<template>
  <div class="child">
    <h3>我是Child组件</h3>
    <Son></Son>
  </div>
</template>

<script>
import Son from "@/components/Son";

export default {
  name: "Child",
  components: {Son}
}
</script>

<style scoped>
.child {
  background: #42b983;
  padding: 10px;
}
</style>
