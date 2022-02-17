<template>
  <div>
    <h2>求和{{count}}</h2>
    <button @click="count++">点击+1</button>
  </div>
</template>

<script>
export default {
  name: "MyButton",
  data() {
    return {
      count: 0
    }
  }
}

</script>

<style scoped>
  h2{
    color: skyblue;
  }
</style>