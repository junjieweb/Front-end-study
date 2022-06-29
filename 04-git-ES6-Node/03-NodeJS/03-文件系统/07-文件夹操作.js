//1、获取fs模块
const fs = require('fs');

//文件夹操作
//创建文件夹
// fs.mkdir('./html', err => {
//     if (err) throw err;
//     console.log('创建成功');
// })

//读取文件夹 read 读取     dir 文件夹
// fs.readdir('./test', (err, files) => {
//     if (err) throw err;
//     //输出文件夹下的文件内容
//     console.log(files);
// })
// fs.readdir('c:/', (err, files) => {
//     if (err) throw err;
//     //输出文件夹下的文件内容
//     console.log(files);
// })

//删除文件夹
fs.rmdir('./test', {recursive: true}, err => {
    if (err) throw err;
    console.log(err);
    console.log('删除成功');
});