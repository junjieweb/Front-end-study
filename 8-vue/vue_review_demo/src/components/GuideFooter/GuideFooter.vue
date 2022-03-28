<template>
  <div id="guide">
    <div class="guideItem">
      <router-link class="link" to="/home/1/2">首页</router-link>
    </div>
    <div class="guideItem">
      <router-link class="link" to="/category?a=1&b=2">分类</router-link>
    </div>
    <div class="guideItem">
      <router-link class="link" to="/buy/1">值得买</router-link>
    </div>
    <div class="guideItem">
      <router-link class="link" to="/cart">购物车</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuideFooter"
}
</script>

<style lang="less" scoped>
#guide {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  display: flex;
  border-top: 1px solid red;

  .guideItem {
    width: 25%;
    height: 100%;
    line-height: 50px;
    text-align: center;

    .link, .link:hover, .link:link, .link:visited, .link:active {
      text-decoration: none;
      color: inherit;
      font-size: 32px;
    }
  }
}
</style>
