<script lang="ts">
import { BarController, BarElement, CategoryScale, Chart, Legend, LinearScale, TimeScale, Tooltip } from 'chart.js'
import { defineComponent } from 'vue'
import { DateTime } from 'luxon'
import 'chartjs-adapter-luxon'
import type { PrismicDocument } from '@prismicio/types'
import { from, take } from 'rxjs'
import type { enterprise, parsedHistoryData } from '@/datamodel/enterprise'

export default defineComponent({
    data() {
        return {
            chart: null as null | Chart<any>
        }
    },
    methods: {
        registerChart() {
            Chart.register(
                BarController,
                BarElement,
                CategoryScale,
                LinearScale,
                TimeScale,
                Legend,
                Tooltip
            )
        },
        formatDataFromMilis(milis: number): string {
            return DateTime.fromMillis(milis).toLocaleString(DateTime.DATE_FULL);
        },
        initializeChart(historyData: parsedHistoryData[]) {
            const data = {
                labels: [''],
                datasets: historyData.map(dataRow => {
                    return {
                        label: dataRow.label,
                        data: [[dataRow.dateStart.toMillis(), dataRow.dateEnd.toMillis()]],
                        barPercentage: 0.8,
                        categoryPercentage: 1,
                        borderWidth: 2,
                        borderRadius: 0,
                        borderSkipped: false,
                        borderColor: dataRow.borderColor,
                        backgroundColor: dataRow.backgroundColor
                    }
                })
            };
            new Chart(
                this.$refs.canvas as HTMLCanvasElement,
                {
                    type: 'bar',
                    data,
                    options: {
                        indexAxis: 'y' as 'y',
                        scales: {
                            x: {
                                type: 'time',
                                min: historyData[0].dateStart.toMillis(),
                                max: historyData[historyData.length-1].dateEnd.toMillis()+360000000
                            }
                        },
                        maintainAspectRatio: false,
                        responsive: true,
                        plugins: {
                            legend: {
                                display: true,
                                position: 'top',
                                align: 'start',
                                onClick: () => {}
                            },
                            tooltip: {
                                enabled: true,
                                displayColors: false,
                                callbacks: {
                                    label: (tooltipModel) => {
                                        const dateArray = tooltipModel.raw as number[];
                                        const isLastestPeriod = tooltipModel.datasetIndex === tooltipModel.chart.data.datasets.length-1;
                                        return isLastestPeriod ? [
                                            `Started: ${this.formatDataFromMilis(dateArray[0])}`,
                                            `Ongoing`
                                        ] : [
                                            `Started: ${this.formatDataFromMilis(dateArray[0])}`,
                                            `Ended: ${this.formatDataFromMilis(dateArray[1])}`
                                        ]
                                    },
                                    labelPointStyle: undefined
                                }
                            }
                        }
                    }
                }
            )
        }
    },
    created() {
        const parsePrismicHistoryData = (v: PrismicDocument<any>): parsedHistoryData[] => {
            const styles = getComputedStyle(document.documentElement);
            // would be nice to get it out somewhere and generally sync with colors in root.
            const availableAccentColors = ['magenta', 'green', 'indigo', 'sand'];
            const parsedhistoryData: parsedHistoryData[] = [];
            const enterpriseData: enterprise[] = v.data['enterprise']
            enterpriseData.forEach((enterprise, index) => {
                parsedhistoryData.push({
                    label: enterprise.place,
                    dateStart: DateTime.fromISO(enterprise.date_start),
                    dateEnd: enterprise.date_end 
                        ? DateTime.fromISO(enterprise.date_end)
                        : DateTime.now(),
                    borderColor: styles.getPropertyValue(`--color-accent-${availableAccentColors[index]}`),
                    backgroundColor: styles.getPropertyValue(`--color-accent-${availableAccentColors[index]}-transparent`),
                })
            });
            return parsedhistoryData;
        }
        this.registerChart();
        from(this.$prismic.client.getByID("Y7AaFhcAAPKCrAnl")).pipe(take(1)).subscribe({
            next: (v) => {
                this.initializeChart(parsePrismicHistoryData(v));
            }
        });
    },
})
</script>

<template>
    <div id="bio-history-container">
        <canvas id="bio-history" ref="canvas"></canvas>
    </div>
</template>

<style lang="scss" scoped>
@import 'src/assets/sass/variables/general.sass';

#bio-history-container {
    position: relative;
    height: 200px; //min height wont work
}
</style>