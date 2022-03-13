<template>
  <div style="background: #ccc; height: 50px;">
    <span>小明每次花100元</span>
    <!-- money直接这样写，只会修改子组件当中的money
    而父组件当中的money不会修改
    原因和下面代码一样
    父子之间传递的是基本数据类型，各自有各自的数据
    var parent = 1000
    var child = parent
    child = 900
    parent? 1000

    如果传递的是对象数据类型
    var arr = [1,2,3]
    var arr1 = arr
    arr1[0] = 11
    arr?   [11,2,3]  
    -->
    <!-- <button @click="money -= 100">花钱</button> -->
    <!-- 触发的事件名称必须是update:XXX，.sync的要求就是它 -->
    <button @click="$emit('update:money',money - 100)">花钱</button>
    爸爸还剩 {{ money }} 元
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'Child',
  props: ['money']
}
</script>
