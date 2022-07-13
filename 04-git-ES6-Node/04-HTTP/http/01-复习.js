//引入http模块
const http = require('http');
const url = require('url');

//创建服务对象
const server = http.createServer(function (request, response) {
    //请求类型
    console.log(request.method);
    //URL
    console.log(request.url);
    //协议版本号
    console.log(request.httpVersion);
    //请求头
    console.log(request.headers);
    //url 路径及查询字符串
    console.log(url.parse(request.url, true).pathname);//路径部分 /s
    console.log(url.parse(request.url, true).query);//查询字符串 {wd:'关键字',charset: 'utf-8',a:100}


    response.end('HELLO NODEJS SERVER');
});

//监听端口，启动服务
server.listen(80, () => {
    console.log('server is running,port 80 is listening...');
});
