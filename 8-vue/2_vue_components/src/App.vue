<template>
  <div>
    <button @click="increment">点击加1</button>
    <button @click="decrement">点击减1</button>
    <button @click="incrementIfOdd">点击奇数加1</button>
    <button @click="incrementAsync">点击异步+1</button>
    <!--<p>{{ count }}</p>-->
    <p>{{ $store.state.count }}</p>
  </div>
</template>

<script>
export default {
  name: "App",
  /*data() {
    return {
      count: 0
    }
  },*/
  methods: {
    increment() {
      // this.count++
      //dispatch 和 emit 都是触发分发的意思，分发触发actions中对于的方法
      this.$store.dispatch('increment')
    },
    decrement() {
      // this.count--
      this.$store.dispatch('decrement')
    },
    incrementIfOdd() {
      /*if (this.count % 2 !== 0) {
        this.count++
      }*/
      this.$store.dispatch('incrementIfOdd')
    },
    incrementAsync() {
      /*setTimeout(() => {
        this.count++
      }, 1000)*/
      this.$store.dispatch('incrementAsync')
    }
  }
}
</script>

<style scoped>

</style>