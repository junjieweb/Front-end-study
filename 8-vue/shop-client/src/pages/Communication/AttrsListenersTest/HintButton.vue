<template>
  <a href="javascript:;" :title="title">
    <el-button v-bind="$attrs" v-on="$listeners"></el-button>
  </a>
</template>

<script>
export default {
  name: '',
  props:['title'],//声明接收属性 这个属性的数据就给了当前组件对象 就和data里面写了个title一样了，是个动态数据
  //只要是组件对象的数据或者是vm的数据  都是动态数据
  mounted(){
    //this.$attrs拿的是除了 （class、style属性以及props接收过的属性之外）   所有的属性组成的一个对象
    //this.$listeners 父组件当中给子组件标签绑定的所有自定义事件监听组成的对象

    //$attrs以及$listeners主要是用来让我们自己封装组件使用的,主要就是为了传递属性和事件监听用的，而不是为了自己用
    // 父向子传递属性数据和事件绑定监听的数据

    console.log(this.$attrs,this.$listeners)
  }
}
</script>

