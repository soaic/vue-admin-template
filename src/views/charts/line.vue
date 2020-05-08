<template>
  <div class="chart-container">
    <chart height="100%" width="100%" :chart-data="lineChartData" />
  </div>
</template>

<script>
import Chart from '@/components/Charts/Bar2Chart'

const lineChartData1 = {
  weekData: [10, 52, 200, 134, 290, 200, 220]
}

export default {
  name: 'BarChart',
  components: { Chart },
  data() {
    return {
      lineChartData: lineChartData1
    }
  }
}
</script>

<style scoped>
.chart-container{
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
}
</style>

