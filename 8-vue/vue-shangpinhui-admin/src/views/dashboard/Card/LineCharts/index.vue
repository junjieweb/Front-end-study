<template>
  <div ref="charts" class="charts" />
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'LineCharts',
  mounted() {
    // 为什么在这里初始化echarts实例：因为echarts.init方法需要获取容器节点
    // mounted节点挂载完毕，获取到
    const myCharts = echarts.init(this.$refs.charts)
    // 配置数据
    const option = {
      xAxis: {
        // 隐藏x轴
        show: false,
        // 折线图的拐点分布均分
        type: 'category'
      },
      yAxis: {
        // 隐藏y轴
        show: false
      },
      // 系列
      series: {
        type: 'line',
        data: [10, 34, 12, 88, 36, 72, 40, 71],
        // 设置平滑曲线
        smooth: true,
        // 拐点的样式
        itemStyle: {
          // 透明度为零消失
          opacity: 0
        },
        // 线条颜色
        lineStyle: {
          color: 'purple'
        },
        // 填充颜色
        areaStyle: {
          color: {
            type: 'purple',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'purple' // 0% 处的颜色
              },
              {
                offset: 1,
                color: 'white' // 100% 处的颜色
              }
            ],
            global: false // 缺省为 false
          }
        }
      },
      // 图形图标的定位
      grid: {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
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
