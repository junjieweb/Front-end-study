<template>
  <div id="app">
    <h1>App组件</h1>
    <Home ref="home"></Home>
    <Personal></Personal>
  </div>
</template>

<script>
import Home from "@/components/Home";
// import Personal from "@/components/Personal";

export default {
  name: 'App',
  components: {
    Home,
    Personal: () => import('@/components/Personal') // 异步加载
    // Personal // 同步加载
  },
  beforeMount() {
    this.$bus.$on('myBus', (message) => {
      console.log('全局事件总线的自定义事件被触发了')
      console.log('收到子组件的数据：', message)
    })
  },
  mounted() {
    this.$refs.home.$on('myEvent', (message) => {
      console.log('自定义事件被触发了')
      console.log('App组件获取到Home组件的数据：', message)
    })
  }
}
</script>

<style lang="less">

</style>
