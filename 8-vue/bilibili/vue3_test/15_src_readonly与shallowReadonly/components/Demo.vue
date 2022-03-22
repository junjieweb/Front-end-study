<template>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪资：{{ job.j1.salary }}K</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增加年龄</button>
  <button @click="job.j1.salary++">增加薪资</button>
  <hr>
  <h4>当前求和为：{{ sum }}</h4>
  <button @click="sum++">点我sum++</button>
</template>

<script>
import {reactive, readonly, ref, shallowReadonly, toRefs} from "vue";

export default {
  name: "Demo",
  setup() {
    // 数据
    let sum = ref(0)
    let person = reactive({
      name: 'tom',
      age: 23,
      job: {
        j1: {
          salary: 20
        }
      }
    })

    // person = readonly(person)
    person = shallowReadonly(person)
    sum = readonly(sum)

    return {
      sum,
      ...toRefs(person)
    };
  },
};
</script>

<style></style>
