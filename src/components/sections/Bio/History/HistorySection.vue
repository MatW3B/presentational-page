<script lang="ts">
import { BarController, BarElement, CategoryScale, Chart, LinearScale } from 'chart.js';
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            data: [] as {label: string, yearStart: number, yearEnd: number}[],
        }
    },
    methods: {
        registerChart() {
            Chart.register(
                BarController,
                BarElement,
                CategoryScale,
                LinearScale
            )
        }
    },
    created() {
        this.registerChart();
        this.data = [
            { label: 'Data Engineering course', yearStart: 2017, yearEnd: 2021},
            { label: 'Fujitsu Frontend Developer', yearStart: 2020, yearEnd: 2023}
        ]
    },
    mounted() {
        new Chart(
            this.$refs.canvas as HTMLCanvasElement,
            {
                type: 'bar',
                data: {
                    labels: this.data.map(row => row.label.split(' ')),
                    datasets: [{
                        data: this.data.map((row) => [row.yearStart, row.yearEnd]),
                        barPercentage: 1,
                        categoryPercentage: 0.9,
                        borderWidth: 2,
                        borderRadius: 0,
                        borderSkipped: false,
                        borderColor: '#bd005e',
                        backgroundColor: 'rgba(189, 0, 94, 0.2)'
                    }]
                },
                options: {
                    indexAxis: 'y',
                    scales: {
                        x: {
                            min: 2017,
                            max: 2023,
                        }
                    },
                    maintainAspectRatio: false

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
    width: calc(100vw - 2* #{$app-padding});
    height: 200px; //min height won work
}
</style>