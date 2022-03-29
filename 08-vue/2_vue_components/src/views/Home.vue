<template>
  <div role="tabpanel" class="tab-pane active" id="home">
    <!-- Nav tabs -->
    <ul class="nav nav-tabs" role="tablist">
      <li role="presentation" class="active">
        <!--<a href="#Message" aria-controls="Message" role="tab" data-toggle="tab">Message</a>-->
        <router-link to="/home/message" aria-controls="Message" role="tab" data-toggle="tab">Message</router-link>
      </li>
      <li role="presentation">
        <!--<a href="#News" aria-controls="News" role="tab" data-toggle="tab">News</a>-->
        <router-link to="/home/news" aria-controls="News" role="tab" data-toggle="tab">News</router-link>
      </li>
    </ul>
    <!-- Tab panes -->
    <div class="tab-content">
      <!--include="Message" 包含这个名字（组件当中的name值）的组件会被缓存-->
      <keep-alive include="Message">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

</style>