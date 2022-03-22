<template>
  <div class="child">
    <h3>我是Child组件（子）</h3>
    <Son></Son>
  </div>
</template>

<script>
import Son from "@/components/Son";
import {inject} from "vue";
export default {
  name: "Child",
  components:{Son},
  setup(){
    let car = inject('car')
    return {car}
  }
}
</script>

<style scoped>
.child{
  background: #42b983;
  padding: 10px;
}
</style>
