<template>
  <div class="app">
    <h3>我是App组件</h3>
    <Suspense>
      <template v-slot:default>
        <Child></Child>
      </template>
      <template v-slot:fallback>
        <h3>稍等加载中...</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
// import Child from "@/components/Child"; // 静态引入
import {defineAsyncComponent} from "vue";
// 异步引入
const Child = defineAsyncComponent(() => import('@/components/Child'))

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
