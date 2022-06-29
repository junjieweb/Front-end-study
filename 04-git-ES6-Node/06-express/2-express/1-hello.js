//1、安装 express
//2、引入 express 包
const express = require('express');

//3、创建应用对象
const app = express();

//4、路由的设置
app.get('/', (request, response) => {
    response.end('Hello express');
});

//5、监听端口，启动服务
app.listen(80, () => {
    console.log('服务已经启动，端口80监听中...');
});
