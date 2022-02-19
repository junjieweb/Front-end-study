<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="addT" v-model="content"/>
  </div>
</template>

<script>
export default {
  name: "Header",
  /*props: {
    //props的第二种写法，只是限定了传递过来属性值的类型
    // addTodo:Function

    //props的第三种写法，也是对象写法，只是比第二种对象写法更加严谨
    addTodo: {
      //第三种，这是一个配置对象，它可以限定属性值的更多
      type: Function,
      required: true

      /!*type: Number,
      required: true,//是否必须传
      default: 10, //默认值为10，不传的话默认值就是10
      validator(value) { //验证器
        return value >= 0
      }*!/
    }
  },*/
  data() {
    return {
      content: ''
    }
  },
  methods: {
    addT() {
      let content = this.content
      if (content.trim()) {
        let id = Date.now()
        let isOver = false
        let obj = {
          id,
          content,
          isOver
        }
        // this.addTodo(obj)

        //自定义事件使用
        this.$emit('addTodo',obj)
      } else {
        alert('请输入合法数据')
      }
      this.content = ''
    }
  }
}
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>