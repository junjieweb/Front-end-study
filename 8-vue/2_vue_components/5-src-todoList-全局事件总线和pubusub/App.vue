<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!--自定义事件传递-->
      <Header @addTodo="addTodo"></Header>
      <!--props-->
      <!--<List :todos="todos" :updateOne="updateOne" :deleteOne="deleteOne"></List>-->
      <!--全局事件总线-->
      <!--<List :todos="todos" :updateOne="updateOne"></List>-->
      <!--PubSub -->
      <List :todos="todos"></List>

      <Footer :todos="todos" :updateAll="updateAll" :deleteAll="deleteAll"></Footer>

    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import PubSub from 'pubsub-js'

export default {
  name: "App",
  components: {
    Header,
    List,
    Footer
  },
  mounted() {
    //在App中找到总线，给总线绑定一个事件 'deleteOne'
    this.$bus.$on('deleteOne', this.deleteOne)

    //消息订阅处理updateOne
    PubSub.subscribe('heihei', this.updateOne)
  },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem('TODOS_KEY')) || []
    }
  },
  watch: {
    todos: {
      deep: true,
      handler(newVal, oldVal) {
        localStorage.setItem('TODOS_KEY', JSON.stringify(newVal))
      }
    }
  },
  methods: {
    //添加一个新的
    addTodo(todo) {
      this.todos.unshift(todo)
    },
    //更新一个
    //msg是消息订阅和发布，传递过来的消息名，即使不用也要占位
    updateOne(msg, index) {
      this.todos[index].isOver = !this.todos[index].isOver
    },
    //删除一个
    deleteOne(index) {
      this.todos.splice(index, 1)
    },
    //更新全选or全部选
    updateAll(val) {
      this.todos.forEach(item => item.isOver = val)
    },
    //删除所有
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