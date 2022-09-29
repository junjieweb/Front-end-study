<template>
  <ul class="list-group">
    <!--<li class="list-group-item">{{ $route.params.msgid }}</li>-->
    <li class="list-group-item">{{ msgid }}</li>

    <!--<li class="list-group-item">{{ $route.query.content }}</li>-->
    <li class="list-group-item">{{ content }}</li>

    <li class="list-group-item">{{ title }}</li>
  </ul>
</template>

<script>
let msgArr = [
  {id: 1, title: 'title01'},
  {id: 2, title: 'title02'},
  {id: 3, title: 'title03'},
]

export default {
  name: "MessageDetail",
  props: ['msgid', 'content'],
  data() {
    return {
      title: ''
    }
  },
  mounted() {
    this.findTitle()
  },
  // 点击三个链接，他们共用的是同一个路由组件，路由组件是同一个，就不会销毁重新创建
  // 点击三个链接的时候，传递的参数不一样，路由组件还是那一个，导致mounted只会执行一次
  // 第一次会正常，后面点击的时候title就不会变化了
  watch: {
    $route: {
      handler(newVal, oldVal) {
        this.findTitle()
      }
    }
  },
  methods: {
    findTitle() {
      setTimeout(() => {
        this.title = msgArr.find(item => item.id === this.msgid).title;
      }, 1000)
    }
  }
}
</script>

<style scoped>

</style>
