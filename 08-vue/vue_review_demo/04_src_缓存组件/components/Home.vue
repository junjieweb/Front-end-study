<template>
  <h2>Home组件</h2>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    console.log('Home mounted')
  },
  activated() {
    // 当使用keep-alive的时候，可以使用 activated 代替 mounted 发请求
    console.log('Home activated')
  },
  deactivated() {
    // 当使用keep-alive的时候，可以使用 deactivated 代替 destroyed 收尾工作：关闭定时器、清除缓存数据等
    console.log('Home deactivated')
  }
}
</script>

<style scoped>

</style>
