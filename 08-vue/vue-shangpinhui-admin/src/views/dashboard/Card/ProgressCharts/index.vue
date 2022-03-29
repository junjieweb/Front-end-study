<template>
  <div ref="charts" class="charts" />
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'ProgressCharts',
  mounted() {
    const myCharts = echarts.init(this.$refs.charts)
    const option = {
      // x轴
      xAxis: {
        show: false,
        // 设置轴的最小值
        min: 0,
        // 设置轴的最大值
        max: 100
      },
      yAxis: {
        type: 'category',
        show: false
      },
      series: {
        type: 'bar',
        data: [78],
        barWidth: 10,
        // 每一个柱条的背景样式,需要这个属性
        showBackground: true,
        backgroundStyle: {
          color: '#ccc'
        },
        // 柱条的颜色
        itemStyle: {
          color: 'yellowgreen'
        },
        // 标签
        label: {
          show: true,
          // 调整标签的位置
          position: 'right',
          formatter: '|',
          color: 'yellowgreen'
        }
      },
      grid: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      }
    }
    myCharts.setOption(option)
  }
}
</script>

<style scoped>
.charts{
  width: 100%;
  height: 100%;
}
</style>
