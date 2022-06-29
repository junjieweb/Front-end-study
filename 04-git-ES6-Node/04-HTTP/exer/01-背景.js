/*
创建一个 HTTP 服务, 访问的时候, 返回一个粉色背景的界面, 顺便加一个标题, 标题内容
『身是菩提树，心如明镜台，时时勤拂拭，勿使惹尘埃。』
『菩提本无树, 明镜亦非台, 本来无一物, 何处惹尘埃』
*/
const http = require('http');
const url = require('url');

const server = http.createServer((request, response) => {

    //设置响应头
    response.setHeader('Content-Type', 'text/html;charset=utf-8');
    //获取请求url中的bg参数
    let bg = url.parse(request.url, true).query.bg ? url.parse(request.url, true).query.bg : '#edf';

    //设置响应体
    response.end(`
        <!doctype html>
        <html lang="zh">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
            <style>
                body{
                    background: ${bg};
                }
            </style>
        </head>
        <body>
            <h1>身是菩提树，心如明镜台，时时勤拂拭，勿使惹尘埃。</h1>
            <h1>菩提本无树，明镜亦非台，本来无一物，何处惹尘埃</h1>
        </body>
        </html>
    `);
});
server.listen(80);

// http://127.0.0.1/?bg=rgb(0,10,200)
//     根据参数变换网页的背景