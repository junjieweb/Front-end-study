<template>
  <div role="tabpanel" class="tab-pane active" id="Message">
    <ul class="list-group">
      <li class="list-group-item" v-for="(message,index) in messages" :key="message.id">
        <!--<a href="##">message01</a>-->
        <!--<router-link to="/home/message/msgdetail">{{message.content}}</router-link>-->

        <!--1.模板的字符串拼接写法-->
        <!--<router-link :to="'/home/message/msgdetail/' + message.id + '?content=' + message.content ">
          {{ message.content }}
        </router-link>-->

        <!--2.路径的模板字符串拼接写法-->
        <!--<router-link :to="`/home/message/msgdetail/${message.id}?content=${message.content}`">
          {{ message.content }}
        </router-link>-->

        <!--3.路径的对象写法-->
        <router-link :to="{name:'msgdetail',params:{msgid:message.id},query:{content:message.content}}">
          {{ message.content }}
        </router-link>
        <!--
          路由传参写法：
            params参数和query参数
              params参数是路径的一部分
              query参数不占路径
        -->
      </li>
    </ul>
    <input type="text">
    <div class="alert alert-success" role="alert">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messages: [
        {id: 1, content: 'message01'},
        {id: 2, content: 'message02'},
        {id: 3, content: 'message03'},
      ]
    }
  }
}
</script>

<style scoped>

</style>