<template>
  <h2>当前求和为：{{ sum }}</h2>
  <button @click="sum++">点我+1</button>
  <hr>
  <h2>当前的信息为：{{ message }}</h2>
  <button @click="message += '!'">修改信息</button>
  <hr>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2>薪资：{{ person.job.j1.salary }}K</h2>
  <button @click="person.name += '~'">修改姓名</button>
  <button @click="person.age++">增加年龄</button>
  <button @click="person.job.j1.salary++">增加薪资</button>
</template>

<script>
import {ref, watch} from "vue";

export default {
  name: "Demo",
  setup() {
    // 数据
    let sum = ref(0);
    let message = ref('你好啊')
    let person = ref({
      name: 'tom',
      age: 23,
      job: {
        j1: {
          salary: 20
        }
      }
    })

    watch(sum, (newValue, oldValue) => {
      console.log('sum改变了', newValue, oldValue)
    })

    watch(person, (newValue, oldValue) => {
      console.log('person变了', newValue, oldValue)
    }, {deep: true})

    return {
      sum,
      message,
      person
    };
  },
};
</script>

<style></style>
