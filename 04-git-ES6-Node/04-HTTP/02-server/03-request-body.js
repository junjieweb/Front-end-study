// 引入 http 模块
const http = require('http');
//引入querystring模块
const qs = require('querystring');
// 调用方法，创建服务对象
const server = http.createServer(function (request, response) {
    //提取请求体数据  POST
    //1、声明一个字符串变量
    let body = '';
    //2、绑定data事件
    request.on("data", chunk => {
        //拼接
        body += chunk.toString();
    });
    //3、绑定end事件
    request.on('end', () => {
        console.log(body);
        //调用qs对象的方法
        console.log(qs.parse(body));
        response.end('body server');
    });

});

// 监听端口，启动服务
server.listen(80, function () {
    console.log('服务已经启动，端口 80 监听中.....');
});