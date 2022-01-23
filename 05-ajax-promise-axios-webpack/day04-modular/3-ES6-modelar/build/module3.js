'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
//module3中使用统一暴露
var school = 'sgg';
var person = {
    name: 'tom',
    age: 18,
    sex: '男'
};

function getTom() {
    console.log(person);
}

//统一暴露（精简版）---用的多
exports.school = school;
exports.person = person;
exports.getTom = getTom;

//统一暴露（完整版）
// export {school as a,person as b,getTom as c};