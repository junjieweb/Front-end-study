<template>
  <div class="app">
    <h3>我是App组件（祖先），{{name}}--{{price}}</h3>
    <Child></Child>
  </div>
</template>

<script>
import Child from "@/components/Child";
import {provide, reactive, toRefs} from "vue";

export default {
  name: 'App',
  components: {Child},
  setup() {
    let car = reactive({
      name: '宝马',
      price: '40W'
    })
    provide('car',car) // 给自己的后代组件传递数据
    return {...toRefs(car)}
  }
}
</script>

<style>
.app {
  background: gray;
  padding: 10px;
}
</style>
