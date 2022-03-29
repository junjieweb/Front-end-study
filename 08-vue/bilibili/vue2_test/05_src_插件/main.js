import Vue from 'vue';
import App from './App.vue';

import plugins from './plugins'

//应用插件
Vue.use(plugins, 1, 2, 3)

Vue.config.productionTip = false

new Vue({
    el: '#app',
    render: (h) => h(App),
});