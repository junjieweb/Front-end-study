//1、引入fs模块
const fs = require('fs');

//2.1、调用方法读取内容
fs.readFile('./home.html', (err, data) => {
    if (err) {
        console.log('读取失败');
        console.log('错误的对象为');
        console.log(err);
        return;
    }
    //输出从文件中读取的内容
    console.log(data.toString());
});

//2.2、同步读取
let result = fs.readFileSync('./index.html');
console.log(result.toString());