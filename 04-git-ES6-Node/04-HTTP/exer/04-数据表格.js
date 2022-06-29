const data = [
    {
        id: 1,
        name: '刘德华',
        song: '冰雨'
    },
    {
        id: 2,
        name: '周杰伦',
        song: '不能说的密码'
    },
    {
        id: 3,
        name: '林俊杰',
        song: '不为谁而作的歌'
    },
    {
        id: 4,
        name: '五月天',
        song: '干杯'
    },
    {
        id: 5,
        name: '张艺兴',
        song: '莲'
    },
    {
        id: 6,
        name: '刘德华',
        song: '冰雨'
    },
    {
        id: 7,
        name: '张学友',
        song: '情人'
    }
];

//
const http = require('http');
const url = require('url');
const fs = require('fs');
const server = http.createServer((request, response) => {
    //获取路径
    let pathname = decodeURI(url.parse(request.url, true).pathname);
    //如果请求路径为/songs 则响应HTML的表格
    if (pathname === '/songs') {
        //响应表格
        //将数组进行tr标签的拼接
        let trs = '';
        //遍历数组
        for (let i = 0; i < data.length; i++) {
            trs += `<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].song}</td></tr>`;
        }

        response.end(`
        <!DOCTYPE html>
            <html lang="zh">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <style>
                    table,td{
                        border-collapse:collapse;
                    }
                    td{
                        padding:20px;
                    }
                </style>
            </head>
            <body>
                <table border="1">
                    <tr><td>ID</td><td>歌手</td><td>歌曲</td></tr>
                    ${trs}
                </table>
                <script src="/04-隔行换色.js"></script>
            </body>
            </html>
        `);
    } else if (pathname === '/04-隔行换色.js') {
        //响应隔行换色的js内容
        let js = fs.readFileSync('./04-隔行换色.js');
        //响应js代码
        response.end(js);
    } else {
        response.end('404 Not Found');
    }

});

server.listen(80);