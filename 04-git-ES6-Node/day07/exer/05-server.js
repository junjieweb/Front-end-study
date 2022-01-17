// GET  /news    创建一个服务，显示一个新闻列表
const http = require('http');
const url = require('url');
const fs = require('fs');

//获取JSON数据
const data = fs.readFileSync('./05-data.json').toString();
const newsData = JSON.parse(data);

const server = http.createServer((request, response) => {
    //获取请求的类型
    let {method} = request;
    //获取请求路径
    let pathname = url.parse(request.url, true).pathname;
    if (method === 'GET' && pathname === '/news') {
        // 响应新闻列表
        let body = fs.readFileSync('./05-news.html');
        //拼接新闻的HTML结构
        let str = '';
        //遍历数组
        for (let i = 0; i < newsData.data.length; i++) {
            str += `
                <div class="media">
                    <div class="media-left">
                        <a href="#">
                            <img class="media-object" src="${newsData.data[i].image_url}" alt=""/>
                        </a>
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading">${newsData.data[i].title}</h4>
                        <p></p>
                    </div>
                </div>
            `;
        }

        response.end(`
            <!DOCTYPE html>
            <html lang="zh">
            <head>
            <meta charset="UTF-8">
            <title>新闻列表</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
                  integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">
            </head>
            <body>
            <div class="container">
                <div class="row">
                    <div class="col-xs-6 col-xs-offset-3">
                        <h2 class="page-header">新闻列表</h2>
                        ${str}
                    </div>
                </div>
            </div>
            </body>
            </html>
        
        
        `);
    } else {
        response.statusCode = 404;
        response.end('404 Not Found');
    }
});

server.listen(80);