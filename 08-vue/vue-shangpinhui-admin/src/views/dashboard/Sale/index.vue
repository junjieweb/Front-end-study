<template>
  <el-row :gutter="10">
    <el-col :span="12">
      <el-card>
        <div slot="header" class="header">
          <span>线上搜索</span>
          <el-dropdown>
            <span class="el-dropdown-link">
              <i class="el-icon-more" />
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item>双皮奶</el-dropdown-item>
              <el-dropdown-item>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div>
          <el-row :gutter="10">
            <el-col :span="12">
              <div style="width: 100%; height: 150px">
                <LineCharts />
              </div>
            </el-col>
            <el-col :span="12">
              <div style="width: 100%; height: 150px">
                <LineCharts />
              </div>
            </el-col>
          </el-row>
          <!-- 表格 -->
          <el-table style="width: 100%" border @sort-change="handler">
            <el-table-column prop="prop" label="排名" width="width" />
            <el-table-column prop="prop" label="关键字" width="width" />
            <el-table-column prop="prop" label="用户数" sortable width="width" />
            <el-table-column prop="prop" label="周涨幅" sortable width="width" />
          </el-table>
          <!-- 分页器
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
           -->
          <el-pagination layout="prev, pager, next" :total="50" class="right" />
        </div>
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card>
        <div slot="header" class="right-header">
          <div class="left">销售额占比</div>
          <div>
            <el-radio-group v-model="radio">
              <el-radio-button label="全部渠道" />
              <el-radio-button label="线上" />
              <el-radio-button label="门店" />
            </el-radio-group>
          </div>
        </div>
        <div ref="chart1" class="chart1" />
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import LineCharts from '@/views/dashboard/Card/LineCharts'
import * as echarts from 'echarts'
export default {
  name: 'Sale',
  components: {
    LineCharts
  },
  data() {
    return {
      radio: '全部渠道'
    }
  },
  mounted() {
    const mycharts = echarts.init(this.$refs.chart1)
    // 配置项
    const option = {
      title: {
        text: '军事',
        subtext: '1048',
        left: 'center',
        top: 'center',
        textStyle: { color: 'yellowgreen' },
        subtextStyle: { color: 'yellowgreen' }
      },
      // 提示框
      tooltip: {
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          itemStyle: {
            borderRadius: 5,
            borderColor: 'yellowgreen',
            borderWidth: 2
          },
          label: {
            show: true,
            position: 'outside'
          },
          // 标签进行放大-字体
          emphasis: {
            label: {
              show: true,
              fontSize: '16',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: true
          },
          data: [
            { value: 1048, name: '军事' },
            { value: 735, name: '娱乐' },
            { value: 580, name: '游戏' },
            { value: 484, name: '学习' },
            { value: 300, name: '好工作' }
          ]
        }
      ]
    }
    // 设置配置项
    mycharts.setOption(option)

    // echarts实例绑定事件
    mycharts.on('mouseover', function(params) {
      console.log(params)

      mycharts.setOption({
        title: {
          text: params.data.name,
          subtext: params.data.value
        }
      })
    })
  },
  methods: {
    // 排序事件
    handler(params) {
      // 注入相应的参数，区分升序、降序
    }
  }
}
</script>
<style>
.el-dropdown-link {
  cursor: pointer;
  color: black;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
}
.right {
  float: right;
}
.right-header {
  display: flex;
  justify-content: space-between;
  .left {
    width: 100px;
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    text-shadow: 1px 1px #e3e00a;
    transform: rotate(0deg);
    font-weight: 900;
    animation: donghua 2s linear 0s infinite;
  }
  .left:hover {
    //动画播放状态
    animation-play-state: paused;
  }
}

@keyframes donghua {
  from {
    transform: rotate(0deg) scale(1);
  }
  to {
    transform: rotate(360deg) scale(1.2);
  }
}
.chart1 {
  height: 250px;
}
</style>
