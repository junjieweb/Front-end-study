<template>
  <div class="container">
    <Header></Header>
    <Main></Main>
  </div>
</template>

<script>
import Header from "./components/Header";
import Main from "./components/Main";

export default {
  name: "App",
  components: {
    Header,
    Main
  }
}
</script>

<style scoped>

</style>