import Vue from 'vue';
import App from './App.vue';

//完整引入
/* //引入ElementUI组件库
import ElementUI from 'element-ui';
//引入ElementUI全部样式
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI); */

//按需引入
import { Button, Row, DatePicker } from 'element-ui';
Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component(DatePicker.name, DatePicker);


Vue.config.productionTip = false

new Vue({
    el: '#app',
    render: (h) => h(App),
});