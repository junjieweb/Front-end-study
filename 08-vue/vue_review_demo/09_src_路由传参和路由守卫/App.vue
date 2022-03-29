<template>
  <div id="app">
    <router-view></router-view>
    <GuideFooter v-show="$route.meta.isShowFooter"></GuideFooter>
  </div>
</template>

<script>
import GuideFooter from "@/components/GuideFooter/GuideFooter";

export default {
  name: 'App',
  components: {
    GuideFooter
  }
}
</script>

<style lang="less">

</style>
