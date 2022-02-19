<template>
  <div>
    <Child>
      <template>
        <button>点我</button>
      </template>

      <template slot="xxx">
        <a href="https://www.baidu.com">点击去百度</a>
      </template>
    </Child>

    <Child>
      <template>
        <p>p标签</p>
      </template>

      <template slot="xxx">
        <span>很爱很爱你</span>
      </template>
    </Child>

    <!--作用域插槽-->
    <!--
      数据是由父组件传给子组件去展示的
      子组件展示数据的过程中，数据的结构是由父组件说了算的
    -->
    <!--
      如果isOver是true的，前面有√，并且颜色是red
      如果没有为true的，原样显示
    -->
    <ScopedChild :todos="todos">
      <template slot-scope="{todo,index}">
        <span v-if="todo.isOver" style="color: red">√ {{ todo.content }} </span>
      </template>
    </ScopedChild>
  </div>
</template>

<script>
import Child from "./components/Child";
import ScopedChild from "./components/ScopedChild";

export default {
  name: "App",
  components: {
    Child,
    ScopedChild
  },
  data() {
    return {
      todos: [
        {id: 1, content: '抽烟', isOver: false},
        {id: 2, content: '喝酒', isOver: true},
        {id: 3, content: '烫头', isOver: true}
      ]
    }
  }
}
</script>

<style scoped>

</style>