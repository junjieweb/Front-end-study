//1、引入模块
const fs = require('fs');

//2、读取
fs.readFile('data.json', (err, data) => {
    if (err) throw err;
    //将Buffer转换为字符串，并赋值给一个变量
    let str = data.toString();
    //将字符串转换为对象
    let dataJSON = JSON.parse(str);
    console.log(dataJSON);
})