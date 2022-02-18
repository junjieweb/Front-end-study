<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header></Header>
      <List :todos="todos"></List>
      <Footer></Footer>
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