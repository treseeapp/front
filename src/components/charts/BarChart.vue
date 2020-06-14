<template>
  <q-card class="shadow-1" :style="'width:'+widthCanvasPorcentaje +'%'">
    <q-card-section>
      <canvas id="bar-chart"></canvas>
    </q-card-section>
  </q-card>
</template>

<script>
  import Chart from 'chart.js'

  export default {
    props: {
      title: '',
      labels: null,
      datasets: null,
      widthCanvasPorcentaje: null
    },
    data() {
      return {}
    },
    mounted() {
      this.createChart('bar-chart')
    },
    methods: {
      createChart(chartId) {
        const ctx = document.querySelector('#' + chartId);
        const myChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: this.labels,
            datasets: this.datasets
          },
          options: {
            legend: {
              display: false
            },
            title: {
              display: true,
              text: this.title
            }
          }
        });
        return myChart
      }
    }
  }
</script>

<style>
</style>
