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
import axios from "axios"

export default {
  name: "Main",
  data() {
    return {
      isFirst: true,
      isLoading: false,
      errMsg: '',
      users: []
    }
  },
  mounted() {
    this.$bus.$on('searchAjax', this.searchAjax)
  },
  methods: {
    searchAjax(q) {
      //修改页面显示的状态数据，为了让页面显示正在搜索
      this.isFirst = false
      this.isLoading = true
      axios({
        url: 'https://api.github.com/search/users',
        method: 'get',
        params: {
          q
        }
      }).then(response => {
        this.isLoading = false
        /*
          forEach map filter some every reduce 都暗含遍历

          map
          功能：加工数组，根据已有的数据船舰新的数组，新数组中每一项和老数组当中每一项对应有关系
          参数：回调函数（item,index,arr） 每个数组项都会执行这个回调函数，返回的是一个新的项，放在新数组当中
          返回值：把每一项都返回的新项组成的新数组返回
        */
        this.users = response.data.items.map(item => ({
          username: item.login,
          userurl: item.html_url,
          userimg: item.avatar_url
        }))
        // console.log(response.data)
      }).catch(error => {
        this.isLoading = false
        this.errMsg = error.message
        console.log(error.message)
      })
    }
  }
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