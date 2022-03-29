<template>
  <div>
    <Header></Header>
    <div class="container">
      <!--props-->
      <!--<Add :addComment="addComment"></Add>-->

      <!--自定义事件麻烦写法-->
      <Add ref="aa"></Add>
      <!--自定义事件简单写法，以后常用-->
      <!--<Add @addComment="addComment"></Add>-->

      <List :comments="comments" :deleteComment="deleteComment"></List>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Add from "./components/Add";
import List from "./components/List";

export default {
  name: "App",

  //自定义事件麻烦写法
  mounted() {
    //对Add组件对象绑定自定义事件
    // this.$refs.aa.$on('addComment', this.addComment)

    //使用$once绑定的事件只能被触发一次
    this.$refs.aa.$once('addComment', this.addComment)
  },

  data() {
    return {
      comments: [
        {id: 1, username: '刘德华', content: 'Vue还行'},
        {id: 2, username: '周杰伦', content: 'Vue不错'},
        {id: 3, username: '洛丽塔', content: 'Vue可以'},
      ]
    }
  },
  components: {
    Header,
    Add,
    List
  },
  methods: {
    addComment(comment) {
      this.comments.unshift(comment)
    },
    deleteComment(index) {
      this.comments.splice(index, 1)
    }
  }
}
</script>

<style scoped>

</style>