//1、引入 express 包
const express = require('express');
//2、创建路由器对象 router 是一个微型的 app 对象
const router = express.Router();


//3、修改路由
router.get('/home', (request, response) => {
    response.send('home 页面');
});

router.get('/home.html', (request, response) => {
    response.send('<h1>Home.html</h1>');
});

router.get('/videos', (request, response) => {
    //数据处理：读取数据库，读取文件
    response.send('电源的列表页');
});

//4、暴露router对象
module.exports = router;