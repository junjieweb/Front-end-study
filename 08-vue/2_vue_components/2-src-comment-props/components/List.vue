<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 style='display: none'>暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <Item
          v-for="(comment,index) in comments"
          :key="comment.id"
          :comment="comment"
          :deleteComment="deleteComment"
          :index="index"
      ></Item>
    </ul>
  </div>
</template>

<script>
import Item from "./Item";

export default {
  name: "List",
  components: {Item},
  props: ['comments', 'deleteComment']//声明接收属性
}
</script>

<style scoped>
.reply {
  margin-top: 0;
}
</style>