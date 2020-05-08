<template>
  <div class="chart-container">
    <chart height="100%" width="100%" :chart-data="chartData"/>
  </div>
</template>

<script>
import Chart from '@/components/Charts/BarChart'

const chartData = {
  week1: [79, 52, 200, 334, 390, 330, 220],
  week2: [80, 52, 200, 334, 390, 330, 220],
  week3: [30, 52, 200, 334, 390, 330, 220]
}

export default {
  name: 'BarChart',
  components: { Chart },
  data() {
    return {
      chartData: chartData
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

