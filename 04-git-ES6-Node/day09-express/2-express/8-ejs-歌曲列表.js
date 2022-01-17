const express = require('express');
const app = express();
const ejs = require('ejs');
const fs = require('fs');

//显示歌曲列表
app.get('/songs', (request, response) => {
    //字符串参数
    let str = fs.readFileSync('./views/songs.html').toString();
    //数据对象
    let data = {
        songs: [
            '甜蜜蜜',
            '笨小孩',
            '常回家看看',
            '难忘今宵',
            '好运来'
        ]
    };
    //编译内容
    let result = ejs.render(str, data);
    //响应
    response.send(result);
})

app.listen(80);