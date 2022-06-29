//中间件就是函数

const express = require('express');
const moment = require("moment");
const fs = require('fs');
const app = express();

//1、声明一个中间件函数 next是一个函数类型的值
let record = function (request, response, next) {
    //获取时间
    let time = moment().format('YYYY-MM-DD hh:mm:ss');
    //获取路径
    const path = request.url;
    //拼接要写入的字符串
    let str = `[${time}]  ${path}\r\n`;
    //写入文件
    fs.writeFileSync('./access.log', str, {flag: 'a'});
    //调用next函数
    next();
};

//一、路由中间件 检测用户
let checkUser = function (request, response, next) {
    //获取admin url 参数
    let isAdmin = request.query.admin;
    //判断
    if (isAdmin === '1') {
        //满足条件
        next();
    } else {
        //跳转到登录页面
        response.redirect('/login');
    }
}

//2、使用中间件 中间件的配置（全局中间件）
app.use(record);

//路由
//将用户的请求记录在文件中 access.log [2022-1-14 10:10:10] /
app.get('/', (request, response) => {
    response.send('中间件');
});

//路由规则 ?admin=1
//二、添加函数至第二个参数
app.get('/admin', checkUser, (request, response) => {
    response.send('后台首页');
});

//      ?admin=1
app.get('/setting', checkUser, (request, response) => {
    response.send('后台设置');
});

app.get('/shuju', checkUser, (request, response) => {
    response.send('后台数据');
});

app.get('/home', (request, response) => {
    response.send('前端首页');
});

app.get('/cart', (request, response) => {
    response.send('购物车');
});

app.get('/login', (request, response) => {
    response.send('登录页面');
});

app.listen(80);