//该文件用于创建Vuex中最为核心的store
import Vue from 'vue';
//引入Vuex
import Vuex from 'vuex';
//应用Vuex插件
Vue.use(Vuex)

//准备state——用于存储数据
const state = {
  sum: 0, //当前的和
}

//准备actions——用于响应组件中的动作
//这个里面的方法可以包含if for 异步
const actions = {
  incrementOdd(context, value) {
    if (context.state.sum % 2) {
      context.commit('INCREMENT', value)
    }
  },
  incrementWait(context, value) {
    setTimeout(() => {
      context.commit('INCREMENT', value)
    }, 500);
  }
}

//准备mutations——用于操作数据（state）
//这个里面的方法不能包含 if for 异步，是直接操作的
const mutations = {
  INCREMENT(state, value) {
    state.sum += value
  },
  DECREMENT(state, value) {
    state.sum -= value
  }
}

//创建并暴露store
export default new Vuex.Store({
  state,
  mutations,
  actions
})