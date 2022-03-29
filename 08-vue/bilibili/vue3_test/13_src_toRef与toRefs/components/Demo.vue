<template>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪资：{{ job.j1.salary }}K</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增加年龄</button>
  <button @click="job.j1.salary++">增加薪资</button>
</template>

<script>
import {reactive, toRef, toRefs} from "vue";

export default {
  name: "Demo",
  setup() {
    // 数据
    let person = reactive({
      name: 'tom',
      age: 23,
      job: {
        j1: {
          salary: 20
        }
      }
    })

    let name = toRef(person, 'name')
    console.log(name)

    let a = toRefs(person)
    console.log(a)

    return {
      ...toRefs(person)
    };
  },
};
</script>

<style></style>
