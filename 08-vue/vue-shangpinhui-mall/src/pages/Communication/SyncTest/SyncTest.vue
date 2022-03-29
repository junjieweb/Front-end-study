<template>
  <div>
    小明的爸爸现在有{{ money }}元
    <!-- 1、 -->
    <!-- 1) 父组件当中money传递给子组件，子组件使用 -->
    <!-- 2) 子组件当中要修改父组件的数据，必须触发父组件给子组件绑定的的自定义事件 -->
    <!-- 3) 子组件触发自定义事件传递过来新的数据，父组件更改 -->
    <!-- 4) 父组件当中数据更改之后，重新传递给子组件，子组件也就发生变化了 -->
    <h2>不使用sync修改符</h2>
    <Child :money="money" @update:money="money = $event"></Child>
    <br>
    <br>

    <!-- 2、 -->
    <h2>使用sync修改符其实是上面的简写</h2>
    <Child :money.sync="money"></Child>
    <hr>
    <!-- 3、 -->
    <h2>使用v-model修改符</h2>
    <Child2 v-model="money"></Child2>
    <!-- <Child2 :value="money" @input="money = $event"></Child2> -->

    <!-- v-model和.sync都可以实现父子组件数据同步
    约定成俗
    1、v-model是当子组件当中有表单类元素的时候使用
    2、.sync是当子组件当中不是表单类元素的时候使用
    -->

    <!-- element-ui button 添加click事件可以触发，但是添加dblclick不会触发 -->
    <!-- 虽然你用起来和html标签button添加原生com事件click感觉一样，但是本质不一样 -->
    <el-button type="primary" icon="el-icon-edit" @click="test1">点击</el-button>
    <el-button type="primary" icon="el-icon-delete" @dblclick.native="test1">点击</el-button>


  </div>
</template>

<script type="text/ecmascript-6">
import Child from './Child.vue'
import Child2 from './Child2.vue'

export default {
  name: 'SyncTest',
  data() {
    return {
      money: 1000
    }
  },
  components: {
    Child,
    Child2
  },
  methods: {
    test1() {
      console.log(111)
    }
  }
}
</script>
