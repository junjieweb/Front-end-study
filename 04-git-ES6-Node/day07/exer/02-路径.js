/*
    # 构建服务
* GET  /login   响应体返回 『登录页面』
* GET  /register   响应体返回 『注册页面』
* POST /register   获取用户信息 控制台输出即可

```
/login?a=100&b=200
url.parse(request.url, true).pathname
```
*/
const http = require('http');
const url = require('url');
const fs = require('fs');
const qs = require('querystring');

const server = http.createServer((request, response) => {
    //获取内容
    let {method} = request;
    let pathname = url.parse(request.url, true).pathname;
    //添加响应头
    response.setHeader('Content-Type', 'text/html;charset=utf-8');
    //判断登录
    if (method.toUpperCase() === 'GET' && pathname === '/login') {
        //设置响应体
        response.end(fs.readFileSync(__dirname + '/login.html'));
    } else if (method.toUpperCase() === 'GET' && pathname === '/register') {
        //注册
        response.end(fs.readFileSync(__dirname + '/register.ejs'));
    } else if (method.toUpperCase() === 'POST' && pathname === '/register') {
        //注册用户的信息提取
        //1、声明变量
        let body = '';
        //2、绑定data事件
        request.on('data', chunk => {
            body += chunk;
        })
        //3、绑定end事件
        request.on('end', () => {
            //将用户的字符串的信息转换为对象
            const data = qs.parse(body);
            //所有的用户信息读取出来
            const users = fs.readFileSync('./users.json').toString();
            //将字符串转换为对象
            const usersObj = JSON.parse(users);
            //将新用户的对象压入到usersObj中
            usersObj.data.push(data);
            //将对象转换为JSON字符串
            let str = JSON.stringify(usersObj);
            //存储新的数据
            fs.writeFileSync(__dirname + '/users.json', str);
            response.end('恭喜注册成功');
        })
        // response.end(fs.readFileSync(__dirname + '/register.ejs'));
    } else {
        response.end('<h1>404 Not Found</h1>');
    }
});

server.listen(80);
