//暴露的本质是module.exports的内容
//引入的内容是什么，取决与暴露的是什么

const module1 = require('./module1');//引入自定义模块
const module2 = require('./module2');//引入自定义模块
const uniq = require('uniq');//引入第三方模块

module1.showData();
module1.showMsg();

console.log(module2.data);
console.log(module2.msg);
module2.sum(1, 2);
module2.sub(3, 2);

const arr = [1, 2, 3, 4, 5, 6, 3, 4, 2, 5, 3, 8, 7];

console.log(uniq(arr));


