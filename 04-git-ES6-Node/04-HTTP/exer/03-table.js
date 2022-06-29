/*
    搭建 HTTP 服务.
    GET  /table  响应一个表格 4 行 3 列表格, 并实现隔行换色 (JS)
 */
const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((request, response) => {
    //读取table.html文件的内容
    const data = fs.readFileSync(__dirname + '/03-table.html');
    response.end(data);
});

server.listen(80);