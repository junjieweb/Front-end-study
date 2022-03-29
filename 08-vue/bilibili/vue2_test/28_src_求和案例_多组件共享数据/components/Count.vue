<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h3>当前求和方法10倍为：{{ bigSum }}</h3>
    <h3>我在{{ school }}，学习{{ subject }}</h3>
    <h3 style="color: red">Person组件的总人数是：{{ personList.length }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">奇数加</button>
    <button @click="incrementWait(n)">等等再加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "Count",

  data() {
    return {
      n: 1, //用户选择的数字
    };
  },
  computed: {
    //借助mapState生成计算属性，从state中读取数据。（数组写法）
    ...mapState(["sum", "school", "subject", "personList"]),

    //借助mapGetters生成计算属性，从getters中读取数据。（数组写法）
    ...mapGetters(["bigSum"]),
  },
  methods: {
    //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(对象写法)
    ...mapMutations({ increment: "INCREMENT", decrement: "DECREMENT" }),
    //借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(数组写法)
    // ...mapMutations(["INCREMENT", "DECREMENT"]),

    //借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(对象写法)
    // ...mapActions({incrementOdd:'incrementOdd',incrementWait:'incrementWait'}),
    //借助mapActions生成对应的方法，方法中会调用dispatch去联系actions(数组写法)
    ...mapActions(["incrementOdd", "incrementWait"]),
  },
};
</script>

<style scoped>
button {
  margin: 5px;
}
</style>