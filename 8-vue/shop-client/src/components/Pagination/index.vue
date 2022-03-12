<template>
  <div class="pagination">
    <button
        :disabled="myCurrentPage === 1"
        :class="{disabled: myCurrentPage === 1}"
        @click="setCurrentPage(myCurrentPage - 1)"
    >上一页
    </button>
    <button v-if="starEnd.start !== 1" @click="setCurrentPage(1)">1</button>
    <button class="disabled" v-if="starEnd.start > 2">...</button>

    <!--多执行了从1到start-1的v-for和v-if的判断-->
    <!--<button
        v-for="item in starEnd.end"
        v-if="item >= starEnd.start"
        :class="{active: item === myCurrentPage}"
        @click="setCurrentPage(item)"
    >{{ item }}
    </button>-->

    <button
        v-for="item in startEndArr"
        :key="item"
        :class="{active: item === myCurrentPage}"
        @click="setCurrentPage(item)"
    >
      {{ item }}
    </button>

    <button class="disabled" v-if="starEnd.end < totalPages - 1">...</button>
    <button
        v-if="starEnd.end < totalPages"
        @click="setCurrentPage(totalPages)"
    >{{ totalPages }}
    </button>
    <button
        :disabled="myCurrentPage === totalPages"
        :class="{disabled: myCurrentPage === totalPages}"
        @click="setCurrentPage(myCurrentPage + 1)"
    >下一页
    </button>
    <button class="disabled">共{{ total }}条</button>
  </div>
</template>

<script>
export default {
  name: 'MyPagination',
  props: {
    currentPage: { //当前页码
      type: Number,
      default: 1
    },
    total: { //所有数据的总数量
      type: Number,
      default: 0
    },
    pageSize: { //每页的最大数量
      type: Number,
      default: 10
    },
    showPageNo: { //最大连续页码数
      type: Number,
      default: 5,
      //要求传入的值要是奇数
      validator: function (value) {
        return value % 2 !== 0
      }
    }
  },
  data() {
    return {
      myCurrentPage: this.currentPage //初始值由父组件来指定
    }
  },
  computed: {
    //总页数
    totalPages() {
      const {total, pageSize} = this
      return Math.ceil(total / pageSize)
    },

    //包含从start到end的数组
    startEndArr() {
      const arr = []
      const {start, end} = this.starEnd
      for (let page = start; page < end; page++) {
        arr.push(page)
      }
      return arr
    },

    //start/end: 连续页码数的开始页码与结束页码 {start: 3, end: 7}
    starEnd() {
      let start, end
      //      当前页码     最大连续页码数  总页数
      const {myCurrentPage, showPageNo, totalPages} = this
      //计算start
      // start = currentPage - (showPageNo - 1) / 2
      start = myCurrentPage - Math.floor(showPageNo / 2)
      //如果myCurrentPage比较小, 计算的结果有可能小于1   start>=1
      if (start < 1) {
        start = 1
      }
      //计算end
      end = start + showPageNo - 1
      // end的最大值为totalPages
      if (end > totalPages) {
        //修改end为totalPages
        end = totalPages
        //修正start
        start = end - showPageNo + 1
        //一旦总页数小于最大连续页码数 ==> start<1
        if (start < 1) {
          start = 1
        }
      }
      return {start, end}
    }
  },
  watch: {
    //子组件监视父组件传入的数据变化
    currentPage(value) {
      this.myCurrentPage = value
    }
  },
  methods: {
    //设置新的当前页码
    setCurrentPage(page) {
      //如果页码没有变化，直接结束
      if (page === this.myCurrentPage) return
      //更新当前页码
      this.myCurrentPage = page

      //分发自定义事件通知父组件
      this.$emit('currentChange', page)
    }
  }
}
</script>

<style lang="less" scoped>
.pagination {
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &.active {
      background: #409eff;
      color: white;
      cursor: not-allowed;
    }

    &.disabled {
      cursor: not-allowed;
      color: #cccccc;
    }
  }
}
</style>