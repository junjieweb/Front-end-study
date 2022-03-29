<template>
  <div>
    <h2>Hello Vue</h2>

    <!--vue中内置的组件标签-->
    <slot>
      <!--默认插槽-->
      <!--slot内部的东西，是等待着父组件使用的时候给传过来-->
      <span>span</span>
    </slot>

    <slot name="xxx">
      <!--具名插槽-->
    </slot>

    <slot name="yyy">
      <!--具名插槽-->
      <ul>
        <li>哈哈</li>
        <li>嘿嘿</li>
        <li>呵呵</li>
      </ul>
    </slot>

    <!--
      无论是默认插槽还是具名插槽，里面都可以写东西，也可以不写东西
      如果写了东西，就看你用的时候有没有给slot传递新的东西，如果传递了，slot中写的东西就被覆盖了
      如果没有给slot传递新的东西，默认显示的就是slot中的东西
    -->

  </div>
</template>

<script>
export default {
  name: "Child"
}
</script>

<style scoped>

</style>