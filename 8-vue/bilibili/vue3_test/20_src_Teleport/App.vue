<template>
  <div class="app">
    <h3>我是App组件</h3>
    <Child></Child>
  </div>
</template>

<script>
import Child from "@/components/Child";

export default {
  name: 'App',
  components: {Child},
}
</script>

<style>
.app {
  background: gray;
  padding: 10px;
}
</style>
