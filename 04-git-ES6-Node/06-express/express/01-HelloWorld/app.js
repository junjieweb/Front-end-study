const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

//在根路由 (/) 上（应用程序的主页）对 POST 请求进行响应：
app.post('/', function (req, res) {
    res.send('Got a POST request');
});

//对 /user 路由的 PUT 请求进行响应：
app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user');
});

// 对 /user 路由的 DELETE 请求进行响应：
app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user');
});


app.use(express.static('public'));
app.use('/static', express.static('public'));
app.use('/static', express.static(__dirname + '/public'));


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// 终端输入 node app.js
// 在浏览器中输入 http://localhost:3000/ 以查看输出。
