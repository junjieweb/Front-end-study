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
  data() {
    return {
      comments: [
        {id: 1, content: 'vue很好', username: '洛丽塔'},
        {id: 2, content: 'vue真棒', username: '达芬奇'},
        {id: 3, content: 'vue厉害', username: '牛顿'},
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
