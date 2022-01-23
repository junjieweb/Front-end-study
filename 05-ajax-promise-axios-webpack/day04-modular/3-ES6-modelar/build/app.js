'use strict';

var _module = require('./module1');

var module1 = _interopRequireWildcard(_module);

var _module2 = require('./module2');

var _module3 = require('./module3');

var module3 = _interopRequireWildcard(_module3);

var _module4 = require('./module4');

var _module5 = _interopRequireDefault(_module4);

var _module6 = require('./module5');

var _module7 = _interopRequireDefault(_module6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//引入默认暴露


//引入统一暴露的模块（和上面三种引入方式同理）

//引入分别暴露的模块+重命名
console.log(module1);

//引入多种暴露方式的模块

//引入分别暴露的模块+打包引入
//引入分别暴露的模块

console.log(_module.data);
console.log(_module2.data);
console.log(module3);
console.log(_module3.person);
console.log(_module5.default);
console.log(_module7.default);
console.log(_module6.teacher1, _module6.teacher2, _module6.stu1, _module6.stu2);