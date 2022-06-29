//1、引入 fs 模块
const fs = require('fs');

//2、调用方法
// fs.unlink('./test/index.min.css', err => {
//     if (err) throw err;
//     console.log('删除成功');
// });

fs.unlinkSync('./test/app.js');