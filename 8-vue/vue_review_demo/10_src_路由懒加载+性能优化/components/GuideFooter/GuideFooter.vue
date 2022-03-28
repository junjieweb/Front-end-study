<template>
  <div id="guide">
    <div class="guideItem">
      <!--静态路由-->
      <!--<router-link class="link" to="/home/1/2">首页</router-link>-->
      <!--动态路由 params + name -->
      <router-link class="link" :to="{name: 'Home',params:{id : 1, a : 2, b: 3}}">首页</router-link>
      <!--动态路由 params + path 不能使用-->
      <!--<router-link class="link" :to="{path: '/home',params:{id : 1, a : 2, b: 3}}">首页</router-link>-->
    </div>
    <div class="guideItem">
      <!--<router-link class="link" to="/category?a=1&b=2">分类</router-link>-->
      <!--动态路由 query + path -->
      <!--<router-link class="link" :to="{path: '/category', query:{a:1,b:2}}">分类</router-link>-->
      <!--动态路由 query + name -->
      <router-link class="link" :to="{name: 'Category', query:{a:1,b:2}}">分类</router-link>
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
