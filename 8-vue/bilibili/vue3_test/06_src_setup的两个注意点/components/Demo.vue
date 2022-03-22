<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <button @click="test">测试触发自定义事件</button>
  <slot name="test1"></slot>
  <slot name="test2"></slot>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "Demo",
  props: ["message", "school"],
  emits: ["hello"],
  setup(props, context) {
    // console.log("setup", props);
    // console.log("setup", context);
    // console.log("setup", context.attrs); // 相当与Vue2中的$attrs
    // console.log("setup", context.emit); // 触发自定义事件
    console.log("setup", context.slots); // 插槽

    // 数据
    let person = reactive({
      name: "张三",
      age: 18,
    });
    // 方法
    function test() {
      context.emit("hello", 999);
    }

    return {
      person,
      test,
    };
  },
};
</script>

<style></style>
