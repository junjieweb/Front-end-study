//复制文件
//1、引入fs模块
const fs = require('fs');

//2、创建流对象
const ws = fs.createWriteStream('./file/不二法门.mp3');
const rs = fs.createReadStream('./file/刻意练习.mp3');

//3、绑定事件读取内容
// rs.on('data', chunk => {
//     //写入文件
//     ws.write(chunk);
// });

//pipe 管道
rs.pipe(ws);
