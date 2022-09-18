<template>
  <div>
    <MyButton></MyButton>
  </div>
</template>

<script>
// 拿到了一个定义组件的配置对象
import MyButton from "./components/MyButton.vue";

export default {
  name: "",
  // 在这里才使用导入进来的配置对象定义带注册了一个组件
  components: {MyButton}
}
</script>

<style scoped>

</style>
