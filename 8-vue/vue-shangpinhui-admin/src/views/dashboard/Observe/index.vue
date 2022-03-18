<template>
  <el-card>
    <!-- card卡片头部 -->
    <div slot="header" class="header">
      <!-- 选项卡:tab -->
      <el-tabs v-model="activeName">
        <el-tab-pane label="销售额" name="sale" />
        <el-tab-pane label="访问量" name="visit" />
      </el-tabs>
      <div class="right">
        <span @click="setTodady">今日</span>
        <span @click="setWeek">本周</span>
        <span @click="setMonth">本月</span>
        <span @click="setYear">本年</span>
        <!--
          element-ui里面日历
          v-model:收集日历数据
          value-format:可以格式化收集数据格式
          format:日历展示数据的格式设置
        -->
        <el-date-picker
          v-model="dateArr"
          type="datetimerange"
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          size="mini"
          value-format="yyyy-MM-dd"
          format="yyyy-MM-dd"
        />
      </div>
    </div>
    <div>
      <!-- 栅格系统 -->
      <el-row :gutter="10">
        <el-col :span="18">
          <!--展示柱状图  -->
          <div ref="charts" class="charts" />
        </el-col>
        <el-col :span="6" class="right">
          <h3>门店销售额排名</h3>
          <ul>
            <li>
              <span class="rindex">0</span>
              <span>肯德基</span>
              <span class="rvalue">123456</span>
            </li>
            <li>
              <span class="rindex">1</span>
              <span>肯德基</span>
              <span class="rvalue">123456</span>
            </li>
            <li>
              <span class="rindex">3</span>
              <span>肯德基</span>
              <span class="rvalue">123456</span>
            </li>
            <li>
              <span>4</span>
              <span>肯德基</span>
              <span class="rvalue">123456</span>
            </li>
            <li>
              <span>5</span>
              <span>肯德基</span>
              <span class="rvalue">123456</span>
            </li>
            <li>
              <span>6</span>
              <span>肯德基</span>
              <span class="rvalue">123456</span>
            </li>
            <li>
              <span>7</span>
              <span>肯德基</span>
              <span class="rvalue">123456</span>
            </li>
          </ul>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>
// 引入dayjs插件---类似于moment.js常用于处理日期
import dayjs from 'dayjs'
// 第一步:引入ehcarts
import * as echarts from 'echarts'
export default {
  name: 'Observe',
  data() {
    return {
      // 选项卡使用属性
      activeName: 'sale',
      // 日历的数据
      dateArr: [],
      // 图标属性
      mycharts: null,
      // 存储来自于服务器图形图标的数据
      chartArr: {}
    }
  },
  // 监听数据
  watch: {
    // 监听已有的响应式数据的变化
    activeName(newValue, oldValue) {
      // 监听activeName属性变化,销售额、访问量都能检测到变化
      // echarts实例可以调用setOption方法多次，可以修改配置项
      // 销售额
      if (newValue === 'sale') {
        // 当监听属性值发生变化的时候，图形图标配置项，在此重新配置
        const option = {
          title: {
            text: '销售额'
          },
          series: [
            {
              name: 'Direct',
              type: 'bar',
              barWidth: '60%',
              data: this.chartArr.arr1
            }
          ]
        }
        // 再次设置配置项---【原来有的配置项还是有的】
        this.mycharts.setOption(option)
      } else {
        // 访问量
        // 当监听属性值发生变化的时候，图形图标配置项，在此重新配置
        const option = {
          title: {
            text: '访问量'
          },
          series: [
            {
              name: 'Direct',
              type: 'bar',
              barWidth: '60%',
              data: this.chartArr.arr2
            }
          ]
        }
        // 再次设置配置项---【原来有的配置项还是有的】
        this.mycharts.setOption(option)
      }
    },
    // 监听图形图标的数据变化
    chartArr() {
      // 当chartArr属性发生变化的时候，确定服务器数据回来来
      const option = {
        series: [
          {
            name: 'Direct',
            type: 'bar',
            barWidth: '60%',
            data: this.chartArr.arr1
          }
        ]
      }
      // 重新修改配置项
      this.mycharts.setOption(option)
    }
  },
  // 生命周期函数mounted初始化echarts实例
  mounted() {
    // 模拟向服务器发请求：获取图形、图标数据
    setTimeout(() => {
      // 服务器返回的数据
      const result = {
        code: 200,
        message: 'success',
        data: {
          chartData: {
            arr1: [29, 88, 37, 199, 99, 2, 100],
            arr2: [8, 26, 47, 12, 99, 18, 123]
          }
        }
      }
      // 存储服务器的数据
      this.chartArr = result.data.chartData
    }, 1000)
    // 展示柱状图
    this.showBar()
    // 图形图标自适应
    window.onresize = () => {
      // 调用echarts实例的resize方法
      this.mycharts.resize()
    }
  },
  // 组件实例的方法
  methods: {
    // 今日
    setTodady() {
      // 点击今日按钮的时候，向数组添加两个元素【今日日期】
      // 通过dayjs获取今日的日期
      const start = dayjs().format('YYYY-MM-DD')
      const end = dayjs().format('YYYY-MM-DD')
      // 替换数据
      this.dateArr = [start, end]
    },
    // 本周
    setWeek() {
      const start = dayjs().day(1).format('YYYY-MM-DD')
      const end = dayjs().day(7).format('YYYY-MM-DD')
      this.dateArr = [start, end]
    },
    // 本月
    setMonth() {
      // 获取本月月初，月底的日期
      const start = dayjs().startOf('month').format('YYYY-MM-DD')
      const end = dayjs().endOf('month').format('YYYY-MM-DD')
      this.dateArr = [start, end]
    },
    // 本年
    setYear() {
      const start = dayjs().startOf('year').format('YYYY-MM-DD')
      const end = dayjs().endOf('year').format('YYYY-MM-DD')
      this.dateArr = [start, end]
    },
    // 展示柱状图的方法
    showBar() {
      // 创建echarts实例
      this.mycharts = echarts.init(this.$refs.charts)
      // 配置项
      const option = {
        // 标题
        title: {
          // 主标题
          text: '销售额'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'Direct',
            type: 'bar',
            barWidth: '60%',
            data: [],
          }
        ]
      }
      // 设置配置项
      this.mycharts.setOption(option)
    }
  }
}
</script>

<style scoped lang="scss">
.header {
  position: relative;
  .right {
    position: absolute;
    right: 0;
    top: 10px;
    span {
      margin: 0px 5px;
    }
  }
}
//   >>> 原生CSS深度选择器
//  /deep/ less深度选择器
//  ::v-deep scss深度选择器
::v-deep .el-card__header {
  border-bottom: none;
}

.charts {
  height: 300px;
}
.right {
  position: absolute;
  right: 0px;
}
.rindex {
  float: left;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: black;
  color: white;
  text-align: center;
}
.rvalue {
  float: right;
}
ul {
  list-style: none;
  width: 100%;
  height: 300px;
  padding: 0px;
}
ul li {
  height: 8%;
  margin: 10px 0px;
}
.right span {
  margin: 0px 10px;
}
</style>
