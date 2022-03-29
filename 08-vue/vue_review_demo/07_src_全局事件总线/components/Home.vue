<template>
  <div>
    <h2>Home组件</h2>
    <button @click="handleClick">触发自定义事件</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      message: '我是Home组件的数据'
    }
  },
  methods: {
    handleClick() {
      this.$emit('myEvent', this.message)
      this.$bus.$emit('myBus', this.message)
    }
  }
}
</script>

<style scoped>

</style>
