<template>
  <div>
    <h1>{{ message }}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ myAge + 1 }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <button @click="updateAge">尝试修改收到的年龄</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      message: "学生信息",
      myAge: this.age,
    };
  },
  methods: {
    updateAge() {
      this.myAge++;
    },
  },
  //简单声明接收
  // props:['name','age','sex']

  //接收的同时对数据进行类型限制
  /* props:{
        name: String,
        age: Number,
        sex: String
    } */

  //接收的同时对数据：进行类型限制、默认值的指定、必要性的限制
  props: {
    name: {
      type: String, //name的类型是字符串
      required: true, //name是必要的
    },
    age: {
      type: Number,
      default: 18, //默认值
    },
    sex: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
</style>