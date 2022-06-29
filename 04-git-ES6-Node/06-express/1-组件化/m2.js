//暴露语法
//1、暴露的数据可以是任意类型
//一般暴露的数据都是引用类型的，数组、对象、函数
// module.exports = 111;
// module.exports = 'hello';

//2、exports 暴露
let a = 100;
let b = 200;
exports.a = a;
exports.b = b;
module.exports = {a, b};
exports = module.exports = {a: a, b: b};

//3、不能使用 exports = xxx 进行暴露
// exports = 100;

//4、简化记忆 module.exports = xxx