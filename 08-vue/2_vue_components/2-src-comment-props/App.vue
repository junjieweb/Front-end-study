<template>
  <div>
    <Header></Header>
    <div class="container">
      <Add :addComment="addComment"></Add>
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
  components: {
    Header,
    Add,
    List
  },
  data() {
    return {
      comments: [
        {id: 1, content: 'vue牛逼', username: 'Tom'},
        {id: 2, content: 'vue不错', username: 'Jim'},
        {id: 3, content: 'vue挺好', username: 'Jerry'}
      ]
    }
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
