const express = require('express');
const fs = require('fs');
const app = express();

//创建路由规则
app.get('/', (request, response) => {
    response.send('路由界面');
});

app.get('/admin', (request, response) => {
    //send() 方法是 express 封装的响应的方法
    response.send('后台网页');
});

//显示登录页面
app.get('/login', (request, response) => {
    const body = fs.readFileSync('./form.html');
    response.end(body);
});

app.get('/register', (request, response) => {
    response.send('注册页面');
});

app.post('/login', (request, response) => {
    response.send('登录处理');
});

//all 方法，所有任意
app.all('/test', (request, response) => {
    response.send('test');
});


app.get('/introduce', (request, response) => {
    const body = fs.readFileSync('./intro.html');
    response.end(body);
})

app.listen(80, () => {
    console.log('服务已经启动...端口监听中...');
});