<template>
  <div>
    <ul>
      <li>消息编号：{{ $route.params.id }}</li>
      <li>消息标题：{{ $route.params.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Detail",
};
</script>

<style scoped>
</style>