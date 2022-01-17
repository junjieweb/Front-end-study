//引入express包
const express = require('express');
//创建应用对象
const app = express();
//路由的设置
app.get('/res', (request, response) => {
    //响应状态码
    // response.statusCode = 200;
    response.status(500);
    //响应状态字符串
    response.statusMessage = 'ok';
    //响应头设置
    // response.setHeader('week','3');
    // response.setHeader('Content-type','text/html;charset=utf-8');
    // response.set('a','100');

    //响应体
    // response.write('hello');

    //设置响应
    response.send('今后我们来度过满是愉快之事的人生吧');
    //下载响应
    // response.download('./package.json');
    //将一个文件中的内容响应给浏览器（必须为绝对路径）
    // response.sendFile(__dirname + '/form.html');
    //跳转
    // response.redirect('https://www.baidu.com');

});

//监听端口，启动服务
app.listen(80, () => {
    console.log('服务已经启动...端口 80 监听中...');
});