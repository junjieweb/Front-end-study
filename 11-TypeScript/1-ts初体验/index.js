"use strict";
(() => {
    // void 代表没有返回值
    function showMsg(msg) {
        console.log(msg);
    }
    let msg = 'hello';
    showMsg(msg);
    // 定义一个函数，参数person的类型是Person
    function showPerson(person) {
        console.log(person.firstName);
        console.log(person.lastName);
    }
    // 最后定义一个对象
    let p = {
        firstName: 'hello',
        lastName: 'tom',
        age: 23
    };
    // 调用函数
    showPerson(p);
    // 创建类
    class User {
        // 构造方法
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    //实例化对象
    let u = new User('tom', 23);
    console.log(u);
})();
