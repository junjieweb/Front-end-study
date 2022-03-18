<template>
  <div ref="charts" class="charts" />
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'BarCharts',
  mounted() {
    // 为什么在这里初始化echarts实例：因为echarts.init方法需要获取容器节点
    // mounted节点挂载完毕，获取到
    const myCharts = echarts.init(this.$refs.charts)
    // 配置项
    const option = {
      // x轴
      xAxis: { show: false, type: 'category' },
      // y轴
      yAxis: { show: false },
      // 系列的设置
      series: {
        type: 'bar',
        data: [30, 66, 42, 47, 88, 62, 75, 38],
        color: 'skyblue',
        // 展示柱状图的标签
        label: {
          show: true,
          position: 'inside',
          color: 'white'
        }
        // 遮罩层
      },
      // 定位
      grid: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      },
      // 遮罩层
      tooltip: {
        // 遮罩层在容器内部显示
        confine: true
      }
    }
    // 设置配置项
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
