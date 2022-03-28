<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      message: '测试数据'
    }
  },
  beforeCreate() {
    console.log('----beforeCreate----')
    // 并没有实现数据劫持代理
    console.log(this.message)
    // 面试题：如何在beforeCreate 中获取data中的数据
    // 方式一：异步获取
    this.$nextTick(() => {
      console.log('$nextTick', this.message)
    })
    // 方式二：同步获取
    console.log('this.$options.data()', this.$options.data().message)
    console.log(this)
  },
  created() {
    console.log('----created----')
    // 已经实现了数据劫持代理
    console.log('created', this.message)
  },
  beforeMount() {

  },
  mounted() {
    // 通常在mounted发请求，处理数据，为的是不影响页面初始化渲染
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
