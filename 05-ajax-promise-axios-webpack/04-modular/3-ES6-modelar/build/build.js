(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _module = require('./module1');

var module1 = _interopRequireWildcard(_module);

var _module2 = require('./module2');

var _module3 = require('./module3');

var module3 = _interopRequireWildcard(_module3);

var _module4 = require('./module4');

var _module5 = _interopRequireDefault(_module4);

var _module6 = require('./module5');

var module55 = _interopRequireWildcard(_module6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//引入多种暴露方式的模块

//引入分别暴露的模块+打包引入
//引入分别暴露的模块
console.log(module1);

//引入默认暴露


//引入统一暴露的模块（和上面三种引入方式同理）

//引入分别暴露的模块+重命名

console.log(_module.data);
console.log(_module2.data);
console.log(module3);
console.log(_module3.person);
console.log(_module5.default);
console.log(module55.default);
console.log(_module6.teacher1, _module6.teacher2, _module6.stu1, _module6.stu2);
console.log(module55);
},{"./module1":2,"./module2":3,"./module3":4,"./module4":5,"./module5":6}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.showData = showData;
exports.showMsg = showMsg;
//module1中使用 分别暴露
var data = exports.data = 'atm';
var msg = exports.msg = 'hello';

function showData() {
    console.log(data);
}
function showMsg() {
    console.log(msg);
}
},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//module2中使用分别暴露，但暴露了一个和module1重名的一个data
var data = exports.data = 'hah';
},{}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
//module4中使用 默认暴露---只能暴露一次
exports.default = {
    name: 'jerry',
    age: 34
};
},{}],6:[function(require,module,exports){
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
},{}]},{},[1]);
