<template>
  <h4>{{ person }}</h4>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪资：{{ job.j1.salary }}K</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增加年龄</button>
  <button @click="job.j1.salary++">增加薪资</button>
  <hr>
  <h4>当前x.y的值为：{{ x.y }}</h4>
  <button @click="x.y++">点我x加1</button>
</template>

<script>
import {reactive, shallowRef, toRefs} from "vue";

export default {
  name: "Demo",
  setup() {
    // 数据
    // 只考虑第一层数据的响应式
    // let person = shallowReactive({
    let person = reactive({
      name: 'tom',
      age: 23,
      job: {
        j1: {
          salary: 20
        }
      }
    })

    // let x = ref(0)
    let x = shallowRef({
      y: 0
    })
    console.log(x)

    return {
      x,
      person,
      ...toRefs(person)
    };
  },
};
</script>

<style></style>
