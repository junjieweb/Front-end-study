<template>
  <div class="col-md-4">
    <form class="form-horizontal">
      <div class="form-group">
        <label>用户名</label>
        <input type="text" class="form-control" placeholder="用户名" v-model="username">
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea class="form-control" rows="6" placeholder="评论内容" v-model="content"></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" class="btn btn-default pull-right" @click="addC">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Add",
  data() {
    return {
      username: '',
      content: ''
    }
  },
  props: ['addComment'],
  methods: {
    addC() {
      let {username, content} = this
      if (username.trim() && content.trim()) {
        let id = Date.now()
        let obj = {
          id,
          username,
          content
        }
        this.addComment(obj)
      } else {
        alert('请输入合法的内容！')
      }
      this.username = ''
      this.content = ''
    }
  }
}
</script>

<style scoped>

</style>
