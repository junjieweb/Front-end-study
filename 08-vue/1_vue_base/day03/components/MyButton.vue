<template>
  <div>
    <h2>求和</h2>
    <button>加了{{ count }}次</button>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      count: 0
    }
  }
}
// 一个.vue文件通常我们说是一个组件，但是本质不是，本质其实是定义组件的配置对象
</script>

<style scoped>
  h2{
    color: skyblue;
  }
</style>