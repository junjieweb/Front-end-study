//1、引入fs
const fs = require('fs');

//2、创建写入流对象
const ws = fs.createWriteStream('./home.html');

//3、执行写入
ws.write('巧合是上帝默默操控世界的方式。');
ws.write('聆听雨落的声音，俯看凋零的落叶。伫细雨之中，感雨落之殇。');

//4、关闭写入流
ws.close();
