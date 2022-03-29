<template>
  <div>
    <h2>Home组件</h2>
    <slot name="left" :user="user"></slot>
    <slot name="right" :user="user"></slot>
    <slot>默认插槽</slot>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      user: {
        leftName: '张三',
        rightName: '李四'
      }
    }
  },
}
</script>

<style scoped>

</style>
