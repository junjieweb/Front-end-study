const express = require('express');
const qs = require('querystring');
//创建应用对象
const app = express();
//① 引入body-parser
const bodyParser = require('body-parser');
// ② parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

//简易的自定义请求体处理
let bodyParser1 = function (request, response, next) {
    //获取请求体
    let body = '';
    request.on('data', chunk => {
        body += chunk;
    })
    request.on('end', () => {
        //解析
        const data = qs.parse(body);
        //将请求体对象作为属性存储到response对象中
        request.body = data;
        next();
    })
}

//1、静态资源服务中间件（）
app.use(express.static('./public'));

//请求体参数的获取 中间件 body-parser
app.get('/from', (request, response) => {
    //将某个文件中的内容响应
    response.sendFile(__dirname + '/form.html');
});

app.post('/login', (request, response) => {
    //获取请求体 body-parser
    //③ request.body    获取请求体中的某个属性
    console.log(request.body.username);
    console.log(request.body.password);
    response.send('请求体接收完毕');
})

app.listen(80, () => {
    console.log('服务已经启动，端口80监听中');
});