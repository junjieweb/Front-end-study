# JavaScript

## JS基础

### 01. 谈谈你对js的理解?

a.b 的理解 对象.属性 --->  预解析,作用域,执行上下文环境,闭包,原型

```javascript
// 变量中的值是可以修改的
var num = 10
// 10 这个值是没有变化的  10 所在的这个空间中重新的存储了一个20 的值
num = 20

const num2 = 100
num2 = 200
console.log(num2)
const obj = {}
obj.name = '小明'
console.log(obj)
// str 此时如果是基本类型(string)
var str = '真香'
str += '真好'
var str = '真香'
str.toString()
// str 此时如果是引用类型(String)
```

### 02. 基本类型和引用类型之间传递的是什么,一个是值,一个是地址

```javascript
// 值传递
function f1(a, b) {
    console.log(a, b)
}

var x = 100, y = 200
f1(x, y)

// 引用传递
function f2(obj) {
    obj.name = '小明'
}

var obj1 = {name: '小红'}
f2(obj1)
console.log(obj1)
```

### 03. 数据类型

JavaScript简称:JS
JS中有8数据类型:7个原始数据类型和Object

* `Boolean`---布尔类型
* `Number`----数字类型
* `Null`------空
* `Undefined`-未定义
* `String`----字符串/常见方法
* `BigInt`----任意精度的整数
* `Symbol`----唯一的数据

```javascript
// 基本类型的变量, 普通变量
var num = 10 // 值  在栈中存储
// 引用类型的变量,引用变量
var obj = {} // 这个对象所在的内存空间的地址
// obj引用变量中存储的地址拷贝了一份给obj2
var obj2 = obj
```

`typeof` 检测变量的类型

```javascript
var number = 100
console.log(typeof number)
```

`instanceOf` 检测 用来判断当前实例对象是不是某种数据类型

基本包装类型(`Number`/`Boolean`/`String`)

```javascript
var num = 100
console.log(num.toString())
var flag = true
console.log(flag.toString())
var str = '真香'
console.log(str.toString())
```

## 对象

