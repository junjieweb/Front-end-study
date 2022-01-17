//引入express包
const express = require('express');
//创建应用对象
const app = express();

//配置网站的根目录
app.use(express.static(__dirname + '/public'));

//路由
app.get('/home', (request, response) => {
    response.send('home 页面');
});

app.get('/home.html', (request, response) => {
    response.send('<h1>Home.html</h1>');
});

app.get('/videos', (request, response) => {
    //数据处理：读取数据库，读取文件
    response.send('电源的列表页');
});

//监听端口，启动服务
app.listen(80, () => {
    console.log('服务已经启动...端口 80 监听中...');
});