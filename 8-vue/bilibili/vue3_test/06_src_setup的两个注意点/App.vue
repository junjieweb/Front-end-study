<template>
  <Demo @hello="showHelloMessage" message="你好啊" school="B站">
    <template v-slot:test1>
      <span>hello</span>
    </template>
    <template v-slot:test2>
      <span>hello</span>
    </template>
  </Demo>
</template>

<script>
import Demo from "./components/Demo.vue";
export default {
  name: "App",
  components: { Demo },
  setup() {
    function showHelloMessage(value) {
      alert(`你好啊，你触发了自定义事件，我收到的参数是：${value}`);
    }
    return { showHelloMessage };
  },
};
</script>

<style></style>
