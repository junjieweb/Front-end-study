<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!--props传递方法-->
      <!--<Header :addTodo="addTodo"></Header>-->

      <!--自定义事件传递-->
      <Header @addTodo="addTodo"></Header>

      <List :todos="todos" :updateOne="updateOne" :deleteOne="deleteOne"></List>
      <Footer :todos="todos" :updateAll="updateAll" :deleteAll="deleteAll"></Footer>

    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    List,
    Footer
  },
  data() {
    return {
      todos: [
        {id: 1, content: '吃饭', isOver: false},
        {id: 2, content: '睡觉', isOver: true},
        {id: 3, content: '打豆豆', isOver: true},
      ]
    }
  },
  methods: {
    addTodo(todo) {
      this.todos.unshift(todo)
    },
    updateOne(index) {
      this.todos[index].isOver = !this.todos[index].isOver
    },
    deleteOne(index) {
      this.todos.splice(index, 1)
    },
    updateAll(val) {
      this.todos.forEach(item => item.isOver = val)
    },
    deleteAll() {
      //把没打勾的过滤出来组成新数组，把原数组修改为这个新数组
      this.todos = this.todos.filter(item => !item.isOver)
    }
  }
}
</script>

<style scoped>
.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>