<template>
  <div>
    <h1>EventTest组件</h1>
    <!-- 原生的dom事件在html标签上就是原生dom事件 -->
    <!--
      原生的dom事件在组件标签身上，代表的不再是原生事件而是自定义事件
      如果原生的dom事件在组件标签身上需要是一个原生dom事件，需要加描述符.native
    -->
    <!-- html标签 -->
    <button @click="test1($event)">test1</button>
    <!-- 组件标签 -->
    <!-- 当添加.native以后，原生事件就作用在组件标签的根元素身上， 事件委派-->
    <Event1 @click.native="test2($event)"></Event1>

    <br><br><br>

    <!-- 自定义事件添加在html标签身上，无意义 -->
    <!-- 自定义事件添加在组件标签身上，是没问题的，自定义的事件回调函数的默认参数由自己决定 -->
    <!-- 自定义事件得在子组件内部当中，去使用$emit调用 -->
    <button @xxx="test3($event)">test3</button>
    <Event2 @click="test4($event)"></Event2>
    <Event2 @xxx="test4($event)"></Event2>
  </div>
</template>

<script type="text/ecmascript-6">
import Event1 from './Event1.vue'
import Event2 from './Event2.vue'

export default {
  name: 'EventTest',
  components: {
    Event1,
    Event2,
  },

  methods: {
    test1(event) {
      // event就是我们的事件对象
      console.log(event.target.innerHTML)
    },
    test2(event) {
      console.log(event)
      console.log(event.target.innerHTML)
    },
    test3(event) {
      console.log(event)
    },
    test4(event) {
      console.log(event)
    }
  }
}
</script>
