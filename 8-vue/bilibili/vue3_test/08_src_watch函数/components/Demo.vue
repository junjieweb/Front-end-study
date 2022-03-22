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
import {reactive, ref, watch} from "vue";

export default {
  name: "Demo",
  setup() {
    // 数据
    let sum = ref(0);
    let message = ref('你好啊')
    let person = reactive({
      name: 'tom',
      age: 23,
      job: {
        j1: {
          salary: 20
        }
      }
    })

    // 情况1：监视ref所定义的一个响应式数据
    /*watch(sum, (newValue, oldValue) => {
      console.log('sum变了', newValue, oldValue)
    }, {immediate: true})*/

    // 情况2：监视ref所定义的多个个响应式数据
    /*watch([sum, message], (newValue, oldValue) => {
      console.log('sum或message变了', newValue, oldValue)
    }, {immediate: true})*/

    /*
      情况3：监视reactive所定义的一个响应式数据中的所有属性
      注意：1.此处无法正确的获取oldValue
           2.强制开启了深度监视（deep配置无效）
    */
    /*watch(person, (newValue, oldValue) => {
      console.log('person变化了', newValue, oldValue)
    }, {deep: false}) // 此处的deep配置无效*/

    // 情况4：监视reactive所定义的一个响应式数据中的某个属性
    /*watch(() => person.age, (newValue, oldValue) => {
      console.log('person的age变化了', newValue, oldValue)
    })*/

    // 情况5：监视reactive所定义的一个响应式数据中的某些属性
    /*watch([() => person.age, () => person.name], (newValue, oldValue) => {
      console.log('person的age或name变化了', newValue, oldValue)
    })*/

    // 特殊情况
    watch(() => person.job, (newValue, oldValue) => {
      console.log('person的job变化了', newValue, oldValue)
    }, {deep: true}) // 此处由于监视的是reactive素定义的对象中的某个属性，所以deep配置有效

    return {
      sum,
      message,
      person
    };
  },
};
</script>

<style></style>
