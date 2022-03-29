<template>
  <h2>Home组件</h2>
</template>

<script>
export default {
  name: "Home",
  props: ['getHomeMessage'],
  data() {
    return {
      message: '我是Home组件的数据'
    }
  },
  mounted() {
    console.log(a)
    this.getHomeMessage(this.message)
  }
}
</script>

<style scoped>

</style>
