// 引入 http 模块
const http = require('http');
// 一、引入url模块
const url = require('url');

//调用方法，创建服务对象
const server = http.createServer(function (request, response) {
    // 获取请求报文中的内容
    //1、请求的类型
    console.log(request.method);
    //2、请求的url
    console.log(request.url);
    //3、HTTP协议版本
    console.log(request.httpVersion);
    //4、获取url中的路径部分
    //二、调用方法获取参数
    console.log(url.parse(request.url).pathname);
    //5、获取查询字符串
    console.log(url.parse(request.url,true).query);
    //6、获取请求头信息
    console.log(request.headers);

    response.end('HELLO');
});

// 监听端口，启动服务
server.listen(80, function () {
    console.log('服务已经启动，端口 80 监听中.....');
});