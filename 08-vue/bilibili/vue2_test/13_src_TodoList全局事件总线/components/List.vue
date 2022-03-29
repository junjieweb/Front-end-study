<template>
  <div>
    <ul class="todo-main">
      <Item v-for="todo in todos" :key="todo.id" :todo="todo"></Item>
    </ul>
  </div>
</template>

<script>
import Item from "@/components/Item";
export default {
  name: "List",
  components: {
    Item,
  },
  //声明接收App传递过来的数据
  props: ["todos"],
};
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>