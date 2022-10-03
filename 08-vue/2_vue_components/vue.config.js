module.exports = {
    // 关闭ESLint的规则
    lintOnSave: false,

    devServer: {
        proxy: {
            "/api": {
                /*
                    本身： 8080/api/users/info
                    target  代表转发的目标服务器   4000/api/users/info
                    pathRewrite  4000/api/users/info   和真正的地方多了个/api 需要把/api剁掉
                */
                target: 'http://localhost:4000',
                pathRewrite: {"^/api": ""}, // 4000/users/info
                changeOrigin: true // 不管改变哪个跨域的条件都会转发
            }
        }
    }
}
