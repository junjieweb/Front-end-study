//引入分别暴露的模块
import {data, msg, showMsg, showData} from './module1';
//引入分别暴露的模块+重命名
import {data as data2} from './module2';
//引入分别暴露的模块+打包引入
import * as module1 from './module1';

//引入统一暴露的模块（统一暴露和分别暴露，最后引入的方式都是一样的）
import {school, person, getTom} from './module3';
import * as module3 from './module3';

//引入默认暴露
import module4 from "./module4";

//引入多种暴露方式的模块
import module5,{teacher1,teacher2,stu1,stu2} from "./module5";
import * as module55 from './module5';

console.log(module1)
console.log(data);
console.log(data2);
console.log(module3);
console.log(person);
console.log(module4);
console.log(module5);
console.log(teacher1,teacher2,stu1,stu2);
console.log(module55);