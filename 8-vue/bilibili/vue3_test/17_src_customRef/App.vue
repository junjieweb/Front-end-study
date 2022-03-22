<template>
  <input type="text" v-model="keyWord">
  <h3>{{ keyWord }}</h3>
</template>

<script>


import {customRef} from "vue";

export default {
  name: "App",
  setup() {
    // 自定义一个ref--名为myRef
    function myRef(value, delay) {
      let timer
      return customRef((track, trigger) => {
        return {
          get() {
            console.log(`有人从myRef中读取数据了，我把${value}给他了`)
            track() // 通知vue追踪value的变化
            return value
          },
          set(newValue) {
            console.log(`有人把myRef中数据改为了：${newValue}`)
            clearTimeout(timer)
            timer = setTimeout(() => {
              value = newValue
              trigger() // 通知vue重新解析模板
            }, delay)
          }
        }
      })
    }

    // 使用Vue提供的ref
    // let keyWord = ref('hello')
    // 使用自定义ref
    let keyWord = myRef('hello', 500)

    return {keyWord}
  }
};
</script>

<style></style>
