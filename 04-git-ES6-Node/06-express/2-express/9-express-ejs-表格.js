//选手数据
const player = [
    {id: 1, name: 'xm'},
    {id: 2, name: 'xn'},
    {id: 3, name: 'xt'},
    {id: 4, name: 'kn'}
];


//引入 express 包
const express = require('express');
//创建应用对象
const app = express();
//1.设置 express 使用的模板引擎 ejs
app.set('view engine', 'ejs');
//设置 ejs 使用的模板的存放位置 模板指的就是 HTML 代码存放的文件
app.set('views', './template');

//路由的设置
app.get('/player', (request, response) => {
    //2.到指定的文件夹下创建模板文件
    //3.设置模板设置响应    使用ejs编译 ./template/player.ejs 文件中的内容
    response.render('player', {player: player});
})
//监听端口,启动服务
app.listen(80);