<template>
  <div role="tabpanel" class="tab-panel" id="News">
    <ul class="list-group">
      <li class="list-group-item" v-for="(news,index) in newsList" :key="news.id">
        {{ news.content }}
        <button
            type="button"
            class="btn btn-primary"
            data-toggle="button"
            aria-pressed="false"
            autocomplete="off"
            @click="toNewsDetail(news)"
        >{{ news.id }}
        </button>
      </li>
    </ul>
    <button @click="$router.back()">返回</button>
    <div class="alert alert-success" role="alert">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      newsList: [
        {id: 1, content: 'newsOne'},
        {id: 2, content: 'newsTwo'},
        {id: 3, content: 'newsThree'},
      ]
    }
  },
  methods: {
    toNewsDetail(news) {
      //跳转路由切换组件，有历史记录，返回的时候可以返回到之前去过的地方
      // this.$router.push()
      // this.$router.push('/home/news/newsdetail/' + news.id + '?content=' + news.content)
      // this.$router.push(`/home/news/newsdetail/${news.id}?content=${news.content}`)
      // this.$router.push({name: 'newsdetail', params: {newsid: news.id}, query: {content: news.content}})

      //跳转路由切换组件，没有有历史记录，返回的时候不可以返回到之前去过的地方
      // this.$router.replace()
      this.$router.replace({name: 'newsdetail', params: {newsid: news.id}, query: {content: news.content}})
    }
  }
}
</script>

<style scoped>

</style>