<template>
  <div class="app">
    <h1>{{ msg }}，学生姓名{{ studentName }}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <School :getSchoolName="getSchoolName"></School>

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法，使用@或v-on） -->
    <!-- <Student @hello="getStudentName" @demo="m1"></Student> -->
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法，使用ref） -->
    <Student ref="student" @click.native="show" />
  </div>
</template>

<script>
import Student from "./components/Student.vue";
import School from "./components/School.vue";

export default {
  name: "App",
  components: {
    Student,
    School,
  },
  data() {
    return {
      msg: "你好啊",
      studentName: "",
    };
  },
  methods: {
    getSchoolName(name) {
      console.log("App收到了学校名：", name);
    },
    getStudentName(name, ...args) {
      console.log("App收到了学生名：", name, args);
      this.studentName = name;
    },
    m1() {
      console.log("demo事件被触发了");
    },
    show() {
      alert(123);
    },
  },
  mounted() {
    //绑定自定义事件
    this.$refs.student.$on("hello", this.getStudentName);
    //绑定自定义事件（只触发一次）
    // this.$refs.student.$once("hello", this.getStudentName);
  },
};
</script>

<style>
.app {
  background-color: gray;
  padding: 5px;
}
</style>