<template>
  <div>
    <h2>BABA有存款: {{money}}</h2>
    <button @click="borrowMoneyFromXM(100)">找小明借钱100</button><br>
    <button @click="borrowMoneyFromXH(150)">找小红借钱150</button><br>
    <button @click="borrowMoneyFromALL(200)">找所有孩子借钱200</button><br>
    
    <br>
    <Son ref="son" />

    <br>
    <Daughter ref="dau" />
  </div>
</template>

<script>
import Son from './Son'
import Daughter from './Daughter'

export default {
  name: 'ChildrenParentTest',
  data () {
    return {
      money: 1000
    }
  },

  methods: {
    borrowMoneyFromXM(money){
      //自己的钱增加
      this.money += money
      //对应被借人的钱要减少
      // this.$refs.son 其实放在html标签身上拿到的就是这个dom元素  
      //放在组件标签身上拿到的就是组件对象本身,然后子组件对象的数据 以及方法我们可以直接操作
      this.$refs.son.money -= money
    },
    borrowMoneyFromXH(money){
      this.money += money
      this.$refs.dau.money -= money
    },
    borrowMoneyFromALL(money){
      this.money += money*2
      // this.$refs.son.money -= money
      // this.$refs.dau.money -= money

      // $children 拿到所有的子组件对象组成的一个数组
      // 慎用 原因是拿到这个数组之后数组内部子组件对象先后顺序不定
      this.$children.forEach(item => item.money -= money)
      // this.$children[0]
      // this.$children[1]
    }
  },

  components: {
    Son,
    Daughter
  }
}
</script>

<style>

</style>
