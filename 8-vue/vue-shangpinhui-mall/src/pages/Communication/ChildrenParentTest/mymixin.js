export default {
  methods: {
    giveMoney(money){
      this.money -= money
      //爹的钱要增加
      this.$parent.money += money
    }
  }
}