<template>
  <button @click="isShow = !isShow">切换隐藏/显示</button>
  <Demo v-if="isShow"></Demo>
  <hr>
  <Test></Test>
</template>

<script>
import Demo from "./components/Demo.vue";
import Test from "@/components/Test";
import {ref} from "vue";

export default {
  name: "App",
  components: {Demo, Test},
  setup() {
    let isShow = ref(true)
    return {isShow}
  }
};
</script>

<style></style>
