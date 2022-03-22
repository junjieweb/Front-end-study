<template>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪资：{{ job.j1.salary }}K</h2>
  <h3 v-show="person.car">座驾：{{ person.car }}</h3>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">增加年龄</button>
  <button @click="job.j1.salary++">增加薪资</button>
  <hr>
  <h4>当前求和为：{{ sum }}</h4>
  <button @click="sum++">点我sum++</button>
  <button @click="showRawPerson">输出最原始的数据</button>
  <button @click="addCar">给人添加一辆车</button>
  <button @click="person.car.name+='='">换车名</button>
  <button @click="person.car.price++">换价格</button>
</template>

<script>
import {reactive, ref, toRefs, toRaw, markRaw} from "vue";

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

    function addCar() {
      let car = {name: 'BMW', price: 50}
      person.car = markRaw(car)
    }

    function showRawPerson() {
      const p = toRaw(person)
      console.log(p)
    }

    return {
      sum,
      person,
      addCar,
      showRawPerson,
      ...toRefs(person)
    };
  },
};
</script>

<style></style>
