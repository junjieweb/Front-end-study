<template>
  <div>
    <h2>cart组件</h2>
    <p>props对象模式接收的params参数：{{ a }} -- {{ b }} -- {{ path }}</p>
  </div>
</template>

<script>
export default {
  name: "Cart",
  props: ['a', 'b', 'path']
}
</script>

<style scoped>

</style>
