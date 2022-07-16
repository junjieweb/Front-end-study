<template>
  <li class="list-group-item">
    <div class="handle">
      <a href="javascript:;" @click="deleteC">删除</a>
    </div>
    <p class="user"><span>{{ comment.username }}</span><span>说:</span></p>
    <p class="centence">{{ comment.content }}</p>
  </li>
</template>

<script>
export default {
  name: "Item",
  props: ['comment', 'deleteComment', 'index'],
  methods: {
    deleteC() {
      if (confirm('确定删除吗？')) {
        this.deleteComment(this.index)
      }
    }
  }
}
</script>

<style scoped>
.handle {
  width: 40px;
  border: 1px solid #ccc;
  background: #fff;
  position: absolute;
  right: 10px;
  top: 1px;
  text-align: center;
}

li {
  transition: .5s;
  overflow: hidden;
}

.handle a {
  display: block;
  text-decoration: none;
}

.list-group-item .centence {
  padding: 0 50px;
}

.user {
  font-size: 22px;
}
</style>
