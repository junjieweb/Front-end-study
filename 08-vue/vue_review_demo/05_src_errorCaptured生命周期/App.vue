<template>
  <div id="app">
    <h1>App组件</h1>
    <!--tab导航-->
    <div class="tabs">
      <div class="tabItem" @click="changeTab('Home')">
        Home 链接
      </div>
      <div class="tabItem" @click="changeTab('Personal')">
        Personal 链接
      </div>
    </div>
    <!--内容区-->
    <!--动态组件-->
    <keep-alive :exclude="['Personal']">
      <component :is="comName" :getHomeMessage="getHomeMessage"></component>
    </keep-alive>
  </div>
</template>

<script>
import Home from "@/components/Home";
// import Personal from "@/components/Personal";

export default {
  name: 'App',
  data() {
    return {
      comName: 'Home'
    }
  },
  components: {
    Home,
    Personal: () => import('@/components/Personal') // 异步加载
    // Personal // 同步加载
  },
  methods: {
    changeTab(comName) {
      this.comName = comName
    },
    getHomeMessage(message) {
      console.log(message)
    }
  },
  errorCaptured(err, vm, info) {
    console.log('获取来自后代组件的错误……')
    console.log(err.message) // a is not defined
    console.log(vm) // 发生错误的后代组件实例
    console.log(info) // mounted hook

    // Home子组件实例.getHomeMessage(Homo子组件实例.message)
    vm.getHomeMessage(vm.message)
    return false // 局部捕获，阻止错误传播到全局
  }
}
</script>

<style lang="less">
.tabs {
  display: flex;

  .tabItem {
    width: 50%;
    height: 80px;
    line-height: 80px;
    text-align: center;
    border: 1px solid #333;
    box-sizing: border-box;
  }
}
</style>
