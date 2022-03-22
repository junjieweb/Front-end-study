// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router';
//引入组件
import About from '@/pages/About';
import Home from '@/pages/Home';
import Message from '@/pages/Message';
import News from '@/pages/News';

//创建并暴露一个路由器
export default new VueRouter({
  routes: [
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'message',
          component: Message
        },
        {
          path: 'news',
          component: News
        }
      ]
    }
  ]
})