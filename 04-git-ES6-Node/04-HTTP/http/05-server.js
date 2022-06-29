/**
 * 创建一个 HTTP 服务
 *
 * GET    /index.html      public/index.html     响应一个文件中的内容
 * GET    /css/app.css     public/css/app.css   响应文件内容
 */
const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((request, response) => {
    //获取路径
    let pathname = url.parse(request.url, true).pathname;
    //判断
    if (pathname === '/index.html') {
        //读取文件中的内容 public/index.html
        let html = fs.readFileSync(__dirname + '/public/index.html');
        response.end(html);
    } else if (pathname === '/css/app.css') {
        let html = fs.readFileSync(__dirname + '/public/css/app.css');
        response.end(html);
    } else if (pathname === '/css/home.css') {
        let html = fs.readFileSync(__dirname + '/public/css/home.css');
        response.end(html);
    } else if (pathname === '/js/app.js') {
        let html = fs.readFileSync(__dirname + '/public/js/app.js');
        response.end(html);
    } else if (pathname === '/images/logo.png') {
        let html = fs.readFileSync(__dirname + '/public/images/logo.png');
        response.end(html);
    } else {
        response.statusCode = 404;
        response.end('404 Not Found');
    }
});
server.listen(80);