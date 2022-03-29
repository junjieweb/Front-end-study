<template>
  <div id="app">
    <h1>App组件</h1>
    <Home>
      <template v-slot:left="{user}">
        <h2>左护法：{{ user.leftName }}</h2>
      </template>
      <template v-slot:right="{user}">
        <h2>右护法：{{ user.rightName }}</h2>
      </template>
      <template>导入默认插槽的数据</template>
    </Home>
  </div>
</template>

<script>
import Home from "@/components/Home";

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style lang="less">

</style>
