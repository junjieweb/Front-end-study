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
      /*todos: [
        {id: 1, content: '吃饭', isOver: false},
        {id: 2, content: '睡觉', isOver: true},
        {id: 3, content: '打豆豆', isOver: true},
      ]*/
      todos: JSON.parse(localStorage.getItem('TODOS_KEY')) || []
    }
  },
  watch: {
    todos: {
      //代表深度监视
      /*
        一般监视和深度监视
        一般监视，监视的是数组的数据，但是数组内部对象的数据监视不到
        深度监视，可以监视到数据本身的数据，也可以监视到数据内部对象的数据
      */
      deep: true,
      handler(newVal, oldVal) {
        /*只要todos数据发生变化，就把变化后的数据存储到localStorage中
        localStorage 是前端本地存储的方案，是一个小型的数据库，存储到localStorage中的东西都会自动转为字符串
        localStorage中有4个API*/
        /*localStorage.setItem('键', '值') // 给localStorage存储数据
        localStorage.getItem('键') // 获取localStorage中某个数据 能获取到就获取到，获取不到返回null，不会影响其他
        localStorage.removeItem('键') // 删除localStorage中某个数据
        localStorage.clear() //清空localStorage所有的数据*/

        /*
          对象数据类型转基本数据类型
            计算，比较，全部转基本
            判等的时候，如果都是对象，判地址，如果有一个不是对象类型，转基本
           1.数组转基本，去掉中括号，中间留下什么，就带引号
           2.对象转基本，固定的'[object Object]'
           3.函数转基本，固定的：函数整体加字符串
        */
        /*function fn() {
          console.log(111)
        }

        console.log([1, 2, 3] + 100) //'1,2,3100'
        console.log({name: 'tom'} + 100) //'[object Object]100'
        console.log(fn + 100) //'function fn() {console.log(111);}100'*/

        // localStorage.setItem('TODOS_KEY', newVal)//不能直接存对象数据类型，因为对象数据全部都会私自转基本
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
    updateOne(index) {
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