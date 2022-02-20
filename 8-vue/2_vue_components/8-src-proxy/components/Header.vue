<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="keyword"/>
      <button @click="search">Search</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      keyword: ''
    }
  },
  methods: {
    search() {
      let keyword = this.keyword
      if (keyword.trim()) {
        this.$bus.$emit('searchAjax', keyword)
      } else {
        alert('请输入合法关键字')
      }
      this.keyword = ''
    }
  }
}
</script>

<style scoped>

</style>