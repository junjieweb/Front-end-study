<template>
  <div>
    <Header></Header>
    <div class="container">
      <div class="row">
        <!-- Nav tabs -->
        <ul class="nav nav-stacked col-md-6" role="tablist">
          <li role="presentation" class="active">
            <a href="#home" aria-controls="home" role="tab"
               data-toggle="tab">Home</a></li>
          <li role="presentation"><a href="#About" aria-controls="About" role="tab" data-toggle="tab">About</a>
          </li>
        </ul>
        <!-- Tab panes -->
        <div class="tab-content col-md-6">


        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "App",
  components: {Header}
}
</script>

<style scoped>

</style>