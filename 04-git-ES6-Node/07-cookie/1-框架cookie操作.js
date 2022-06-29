// cookie-parser
//引入 express
const express = require('express');
//1.引入cookie-parser
const cookieParser = require('cookie-parser');
// 创建应用对象
const app = express();
//2.设置中间件 cookie 方法中间件内部添加的
app.use(cookieParser());
//设置路由
app.get('/', (request, response) => {
    response.send('Hello');
});

//设置cookie
app.get('/set-cookie', (request, response) => {
    //3.设置cookie
    response.cookie('email', '163');
    //设置带有时效性的 cookie   单位 毫秒
    response.cookie('name', 'Tom', {maxAge: 3 * 60 * 1000});
    response.send('cookie的设置');
})

//获取cookie
app.get('/get-cookie',(request,response)=>{
    //读取cookie
    console.log(request.cookies);

    response.send('cookie的读取');
})
//清空 cookie
app.get('/clear-cookie',(request,response)=>{
    response.clearCookie('email');
    response.send('清空cookie');
})

app.listen(80, () => {
    console.log('服务已经启动，端口80监听中');
});