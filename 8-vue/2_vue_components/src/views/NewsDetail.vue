<template>
  <ul class="list-group">
    <li class="list-group-item">{{$route.params.newsid}}</li>
    <li class="list-group-item">{{$route.query.content}}</li>
  </ul>
</template>

<script>
export default {
  name: "NewsDetail"
}
</script>

<style scoped>

</style>