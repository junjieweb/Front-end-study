import Vue from "vue";
import App from "./App";
import store from "./store";

Vue.config.productionTip = false

new Vue({
    el: '#app',
    render: h => h(App),
    //store对象在配置对象中配置使用，每个组件对象中都可以通过this.$store获取到我们的这个对象
    store
})