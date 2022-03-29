<template>
  <div>
    <!-- 第一个效果 -->
    <!--<ul>
      <li v-for="(todo, index) in todos" :key="index">
        <slot :todo="todo">
          {{ todo.text }}
        </slot>
      </li>
    </ul>-->
    <!-- 第二个效果 -->
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <slot :todo="todo" :index="index">
          {{ todo.text }}
        </slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    todos: Array
  }
}
</script>