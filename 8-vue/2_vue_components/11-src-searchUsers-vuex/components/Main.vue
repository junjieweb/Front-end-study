<template>
  <div class="row">
    <h2 v-if="isFirst">欢迎来搜索</h2>
    <h2 v-else-if="isLoading">正在搜索中img</h2>
    <h2 v-else-if="errMsg">请求失败了：{{ errMsg }}</h2>
    <div v-else class="card" v-for="(user,index) in users" :key="user.username">
      <a :href="user.userurl" target="_blank">
        <img :src="user.userimg" style='width: 100px' alt="头像"/>
      </a>
      <p class="card-text">{{ user.username }}</p>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "Main",
  computed: {
    //从vuex中把数据拿到vue中
    ...mapState(['isFirst', 'isLoading', 'errMsg', 'users'])
  }
  /*data() {
    return {
      isFirst: true,
      isLoading: false,
      errMsg: '',
      users: []
    }
  },*/
  /*mounted() {
    this.$bus.$on('searchAjax', this.searchAjax)
  },
  methods: {
    /!*
        async await 是使用同步代码实现异步效果
          async函数代表这是一个异步函数，async函数返回的是promise
          async函数返回值不看return，必然返回promise

        async函数返回的promise是成功还是失败，看return
        return的结果代表promise是成功还是失败
          1.如果return的是一个非promise的值，代表async函数返回的promise是成功的
            成功的结果是return的结果
          2.如果返回的是成功的promise，代表async函数返回的promise也是成功的（他们不是同一个promise）
            成功的结果是return的promise的成功结果
          3.如果返回的是失败的promise，代表async函数返回的promise是失败的
            失败的原因是return的promise失败的原因
          4.如果throw出错误，代表async函数返回的promise是失败的
            失败的原因是抛出的错误原因
      *!/
    async searchAjax(q) {
      try {
        //修改页面显示的状态数据，为了让页面显示正在搜索
        this.isFirst = false
        this.isLoading = true
        const response = await axios({
          url: 'https://api.github.com/search/users',
          method: 'get',
          params: {
            q
          }
        })
        this.isLoading = false
        /!*
          forEach map filter some every reduce 都暗含遍历

          map
          功能：加工数组，根据已有的数据船舰新的数组，新数组中每一项和老数组当中每一项对应有关系
          参数：回调函数（item,index,arr） 每个数组项都会执行这个回调函数，返回的是一个新的项，放在新数组当中
          返回值：把每一项都返回的新项组成的新数组返回
        *!/
        this.users = response.data.items.map(item => ({
          username: item.login,
          userurl: item.html_url,
          userimg: item.avatar_url
        }))
      } catch (error) {
        this.isLoading = false
        this.errMsg = error.message
        console.log(error.message)
      }
    }
  }*/
}
</script>

<style scoped>
.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>