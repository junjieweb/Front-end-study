// 1、引入fs模块
const fs = require('fs');

// 2、创建文件夹
// 同步操作
// fs.mkdirSync('e:/project');
// fs.mkdirSync('e:/project/images');
// fs.mkdirSync('e:/project/css');
// fs.mkdirSync('e:/project/js');
//
// // 3、写入文件
// // 同步操作
// fs.writeFileSync('e:/project/index.html', '123');
// fs.writeFileSync('e:/project/images/logo.png', 'abc');
// fs.writeFileSync('e:/project/css/app.css', 'hello');
// fs.writeFileSync('e:/project/js/app.js', 'qw');


// 异步操作
fs.mkdir('e:/project', err => {
    if (err) throw err;

    fs.mkdir('e:/project/images', err => {
        if (err) throw err;
        fs.writeFile('e:/project/images/logo.png', 'as', err => {
            if (err) throw err;
            console.log('logo文件创建成功');
        })
    })
    fs.mkdir('e:/project/css', err => {
        if (err) throw err;
        fs.writeFile('e:/project/css/app.css', 'as', err => {
            if (err) throw err;
            console.log('app.css文件创建成功');
        })
    })
    fs.mkdir('e:/project/js', err => {
        if (err) throw err;
        fs.writeFile('e:/project/js/app.js', 'as', err => {
            if (err) throw err;
            console.log('app.js文件创建成功');
        })
    })
    fs.writeFile('e:/project/index.html', 'abc', err => {
        if (err) throw err;
        console.log('index.html创建成功');
    })
})


