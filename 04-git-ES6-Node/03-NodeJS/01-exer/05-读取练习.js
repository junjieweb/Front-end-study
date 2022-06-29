// 1、引入fs模块
const fs = require('fs');

//2、调用方法
fs.readFile('C:\\WINDOWS\\Boot\\BootDebuggerFiles.ini', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
})