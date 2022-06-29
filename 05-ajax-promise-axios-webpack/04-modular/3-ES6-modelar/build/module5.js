'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
//使用 分别暴露
var teacher1 = exports.teacher1 = { name: '强哥', age: 18 };
var teacher2 = exports.teacher2 = { name: '歌神', age: 28

    //使用 统一暴露
};var stu1 = { name: '张三', age: 12 };
var stu2 = { name: '李四', age: 23 };
exports.stu1 = stu1;
exports.stu2 = stu2;

//使用 默认暴露

exports.default = {
    school: 'sgg',
    address: 'hf',
    subjects: ['web', 'java', 'c++']
};