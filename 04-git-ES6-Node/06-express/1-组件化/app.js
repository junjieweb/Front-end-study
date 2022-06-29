//2、引入模块
// 这里不需要添加 __dirname
// 但是 ./ 不能省
// const {add, div} = require('./m1.js');
//
// console.log(add);
// console.log(add(12, 23));
// console.log(div(24, 4));
// console.log(add(10, 20));

// const num = require('./m2.js');
// console.log(num);

// 1、文件的情况   路径不带后缀
// const m3 = require('./m3');
// console.log(m3);
// const m4 = require('./m4');
// console.log(m4);

//2、文件夹情况
// const libs = require('./libs');
// console.log(libs);

//3、内置模块与npm模块
// const fs = require('fs');
// const http = require('http');
//
// const lodash = require('lodash');
// const lodash = require('./node_modules/lodash');

//4、自动向上寻找

//5、引入的注意点
/*
    在导入模块的时候，目标文件中的代码是会执行的
    require 模块的步骤
        1、获取目标文件中的内容
        2、执行目标文件中的js代码
        3、返回 module.exports 中的值
*/

const m6 = require('./m6');
console.log(m6);