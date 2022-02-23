import Vue from "vue";
import App from "./App";
import router from "./router"

Vue.config.productionTip = false

new Vue({
    //所有的组件当中都可以通过this.$router拿到路由器对象，还可以通过this.$route拿到当前路由对象
    router,
    render: h => h(App)
}).$mount('#app')