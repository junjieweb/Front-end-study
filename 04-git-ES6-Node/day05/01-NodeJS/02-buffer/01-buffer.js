//Buffer 的声明创建
const buf_1 = Buffer.alloc(10);
const buf_2 = Buffer.allocUnsafe(10);
const buf_3 = Buffer.from('hello world');//from 来自
console.log(buf_1);
console.log(buf_2);
console.log(buf_3);

//Buffer内容的读取和设置
//获取第一个字节的内容
console.log(buf_3[0]);

//通过数字获取对应的ASCII字符
console.log(String.fromCharCode(105));
//通过ASCII获取对应的编号
console.log('a'.charCodeAt());
//将Buffer转换为字符串
console.log(buf_3.toString());

//设置
buf_3[0] = 99;
console.log(buf_3.toString());

//获取buffer存储对应的字符串表示

//关于溢出  舍去高于8位的内容   0001 0010 1100 ==> 0010 1100 ==>
buf_3[0] = 300;
console.log(buf_3);
console.log(buf_3.toString());

//关于中文，一个UTF-8中文字符占据三个字节
const buf_4 = Buffer.from('我爱你');
console.log(buf_4);

//字符集