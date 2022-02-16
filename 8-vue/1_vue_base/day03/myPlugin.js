(function (w) {
    //一个插件最终是一个对象
    let MyPlugin = {}
    //Vue.js 的插件应该暴露一个 install 方法。
    // 这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象
    MyPlugin.install = function (Vue, options) {
        // 1. 添加全局方法或 property
        Vue.myGlobalMethod = function () {
            console.log('全局方法被调用')
        }

        //2、添加全局资源
        Vue.directive('upper', function (el, b) {
            el.textContent = b.value.toUpperCase()
        })

        //3、添加实例方法
        Vue.prototype.$myMethod = function (methodOptions) {
            console.log('实例方法被调用')
        }
    }

    //将插件挂载在window上，暴露出去
    w.MyPlugin = MyPlugin

})(window)