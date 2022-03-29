<template>
  <div>
    <h2>深入v-model</h2>
    <input type="text" v-model="msg">
    <span>我爱你{{ msg }}</span>
    <br>
    <br>
    <!-- v-model其实可以理解为 :value="msg" @input="msg = $event.target.value"的简写方式-->
    <input type="text" :value="msg" @input="msg = $event.target.value">
    <span>我爱你{{ msg }}</span>

    <br>
    <br>

    <!-- v-model通常用在表单类元素，但是v-model也可以用在组件标签身上进行数据通信 -->
    <!-- 1、父组件通过value属性传递给子组件，子组件内部input，value使用的是传递过去的数据 -->
    <!-- 2、父组件给子组件添加了一个自定义的input事件，这个事件是需要子组件内部触发的 -->
    <!-- 3、子组件内部触发了自定义的input事件，会传递默认值给父组件当中的$event -->
    <!-- 4、父组件当中的msg就会被更改为子组件传递过来的数据 -->
    <!-- 这个是复杂写法 :value="msg" @input="msg = $event" -->
    <CustomInput :value="msg" @input="msg = $event"></CustomInput>
    <!-- 因为:value="msg" @input="msg = $event" 可以简写为v-model -->
    <CustomInput v-model="msg"></CustomInput>


    <!-- 总结  v-model不但可以用在html的表单类元素身上，还可以在组件标签身上使用
    组件标签内部一般都是有表单类元素的
    它适用的场合是父子之间，最终达到父子数据同步的效果
    -->

    <!-- element-ui的组件标签input 可以和原生input一样的使用，感觉是一样的 -->
    <!-- 但是，el-input是组件标签  v-model用在它身上和原生的input身上本质是不一样的
    本质用的就是上面v-model的父子同步
    -->
    <el-input v-model="msg" placeholder=""></el-input>
    <el-input :value="msg" @input="msg = $event" placeholder=""></el-input>


  </div>
</template>

<script type="text/ecmascript-6">
import CustomInput from './CustomInput.vue'

export default {
  name: 'ModelTest',
  data() {
    return {
      msg: '赵丽颖'
    }
  },
  components: {
    CustomInput
  }
}
</script>
