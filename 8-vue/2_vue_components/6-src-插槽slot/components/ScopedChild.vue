<template>
  <div>
    <ul>
      <li v-for="(todo,index) in todos" :key="todo.id">
        <slot :todo="todo" :index="index">
          {{ todo.content }}
        </slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ScopedChild",
  props: ['todos']
}
</script>

<style scoped>

</style>