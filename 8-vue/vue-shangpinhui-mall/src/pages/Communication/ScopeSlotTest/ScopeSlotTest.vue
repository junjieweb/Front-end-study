<template>
  <div>
    <h2>效果一: 显示TODO列表时, 已完成的TODO为绿色</h2>
    <List :todos="todos">
      <template v-slot:default="{todo}">
        <span :style="{color: todo.isComplete ? 'green' : ''}">{{ todo.text }}</span>
      </template>
    </List>
    <hr>

    <h2>效果二: 显示TODO列表时, 带序号, TODO的颜色为蓝绿搭配</h2>
    <List :todos="todos">
      <template v-slot="{todo,index}">
        <span :style="{color:index%2===0? 'blue':'green'}">{{ index + 1 }}{{ todo.text }}</span>
      </template>
    </List>
  </div>
</template>

<script type="text/ecmascript-6">
import List from './List'

export default {
  name: 'ScopeSlotTest',
  data() {
    return {
      todos: [
        {id: 1, text: 'AAA', isComplete: false},
        {id: 2, text: 'BBB', isComplete: true},
        {id: 3, text: 'CCC', isComplete: false},
        {id: 4, text: 'DDD', isComplete: true},
      ]
    }
  },
  components: {List}
}
</script>
