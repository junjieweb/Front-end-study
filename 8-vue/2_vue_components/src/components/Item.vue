<template>
  <li @mouseenter="isShow = true" @mouseleave="isShow = false" :class="{myClass:isShow}">
    <label>
      <input type="checkbox" :checked="todo.isOver" @click="updateO"/>

      <!--
        checkbox的两种用法：
        1.多个复选框一组，此时每个复选框需要自己填写value的属性值，最终收集数据到一个数组中
        2.单个复选框使用，此时不需要填写value值，v-model操作的数据，对于操作的就是复选框的checked属性
      -->

      <!--<input type="checkbox" v-model="isCheck"/>-->

      <span>{{ todo.content }}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteO">删除</button>
  </li>
</template>

<script>
export default {
  name: "Item",
  props: {
    //props的第二种写法，写对象，可以对传递过来的属性值类型进行限定
    todo: Object,
    index: {
      type: Number,
      // default: 0 //传递了就拿传递的值，没有传递就默认为0
      required: true
    },
    updateOne: Function,
    deleteOne: Function
  },
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    updateO() {
      this.updateOne(this.index)
    },
    deleteO() {
      if (confirm('确认删除吗？')) {
        this.deleteOne(this.index)
      }
    }
  }
  //data中不能出现this
  /*computed: {
    isCheck: {
      get() {
        return this.todo.isOver
      },
      set() {
      }
    }
  }*/
}
</script>

<style scoped>
.myClass {
  background: #bfc;
}

/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  /*display: none;*/
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>