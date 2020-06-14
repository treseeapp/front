<template>
  <q-card class="shadow-1" :style="'width:'+widthCanvasPorcentaje +'%;' ">
    <q-card-section>
      <canvas id="line-chart"></canvas>
    </q-card-section>
  </q-card>
</template>

<script>
  import Chart from 'chart.js'

  export default {
    data() {
      return {
        chart: null
      }
    },
    props: {
      title: '',
      labels: null,
      datasets: null,
      widthCanvasPorcentaje: null,
      heightCanvasPorcentaje: null
    },
    mounted() {
      this.createChart('line-chart')
    },
    methods: {
      updateChart(labels, datasets, title) {
        this.chart.data.labels = labels;
        this.chart.data.datasets = datasets;
        this.chart.options = {
          responsive: true,
          title: {
            display: true,
            text: title
          },
          legend: {
            display: false
          }
        };
        this.chart.update();
      },
      createChart(chartId) {
        const ctx = document.querySelector('#' + chartId);
        this.chart = new Chart(ctx, {
          type: 'line',
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
            },
          }
        });
      }
    }
  }
</script>

<style>
</style>
