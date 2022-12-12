<script lang="ts">
import { BarController, BarElement, CategoryScale, Chart, Legend, LinearScale, TimeScale, Tooltip } from 'chart.js'
import { defineComponent } from 'vue'
import { DateTime } from 'luxon'
import 'chartjs-adapter-luxon'

export default defineComponent({
    data() {
        return {
            data: [] as {
                label: string,
                dateStart: DateTime,
                dateEnd: DateTime,
                borderColor: string,
                backgroundColor: string
            }[],
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
        }
    },
    created() {
        this.registerChart();
        const styles = getComputedStyle(document.body);
        this.data = [
            {
                label: 'Data Engineering course',
                dateStart: DateTime.fromObject({year: 2017, month: 9, day: 2}), 
                dateEnd: DateTime.fromObject({year: 2020, month: 4, day: 24}),
                borderColor: styles.getPropertyValue('--color-green'),
                backgroundColor: styles.getPropertyValue('--color-green-transparent'),
            },
            {
                label: 'Fujitsu Frontend Developer',
                dateStart: DateTime.fromObject({year: 2019, month: 11, day: 13}), 
                dateEnd: DateTime.fromObject({year: 2023, month: 1, day: 1}), 
                borderColor: styles.getPropertyValue('--color-magenta'),
                backgroundColor: styles.getPropertyValue('--color-magenta-transparent'),
            }
        ]
    },
    mounted() {
        const data = {
            labels: [''],
            datasets: this.data.map(dataRow => {
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
                            min: this.data[0].dateStart.toMillis(),
                            max: this.data[this.data.length-1].dateEnd.toMillis()
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