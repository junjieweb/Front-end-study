<template>
  <div class="son">
    <h3>我是Son组件（孙）</h3>
    <Dialog></Dialog>
  </div>
</template>

<script>
import Dialog from "@/components/Dialog";
export default {
  name: "Son",
  components:{Dialog}
}
</script>

<style scoped>
.son {
  background: #d96311;
  padding: 10px;
}
</style>
