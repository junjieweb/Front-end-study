<template>
  <div style="background: #ccc; height: 50px;">
    <h3>女儿小红: 有存款: {{money}}</h3>
    <button @click="giveMoney(100)">给BABA钱: 100</button>
  </div>
</template>

<script>
import mymixin from '@/pages/Communication/ChildrenParentTest/mymixin'
export default {
  mixins:[mymixin],
  name: 'Daughter',
  data () {
    return {
      money: 20000
    }
  },

  // methods: {
  //   giveMoney(money){
  //     this.money -= money
  //     //爹的钱要增加
  //     // this.$parent也要慎用
  //     // 如果一个儿子万一有了多个爹
  //     // 假设一个组件被多个人复用 那么这个方式是没办法使用的 就不能用
  //     this.$parent.money += money
  //   }
  // }
}
</script>
