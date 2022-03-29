import Vue from 'vue';
import App from './App.vue';

import {myMixin,myMixin2} from './mixin';

Vue.mixin(myMixin)
Vue.mixin(myMixin2)

//关闭生产提示
Vue.config.productionTip = false
//创建vm
new Vue({
    el: '#app',
    render: (h) => h(App),
});