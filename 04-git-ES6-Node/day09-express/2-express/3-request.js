//引入express包
const express = require('express');
//创建应用对象
const app = express();
//路由的设置
app.get('/', (request, response) => {
    //设置响应
    response.send('Hello Express');
});
app.get('/req', (request, response) => {
    //获取请求的方法
    // console.log(request.method);
    // //获取请求的url
    // console.log(request.url);
    // //获取请求的http协议版本
    // console.log(request.httpVersion);
    // //获取请求头信息
    console.log(request.headers);
    //获取查询字符串参数
    console.log(request.query);
    //获取指定的请求头信息
    console.log(request.get('host'))

    response.send('请求内容的获取');
});

//新闻的详情
//1、url规则中填写占位符（:标识符）
app.get('/news/:id.html', (request, response) => {
    //2、获取url中的路径的参数
    let id = request.params.id;
    console.log(id);
    response.send(`id 为 ${id} 的新闻`);
});

//模仿京东的路由设置
app.get('/:abc.html', (request, response) => {
    let id = request.params.abc;
    response.send('id 为 ' + id + '的商品信息');
});
//监听端口，启动服务
app.listen(80, () => {
    console.log('服务已经启动...端口 80 监听中...');
});