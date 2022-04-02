# TypeScript

## 初体验

> 全局安装TypeScript

```shell
npm install -g typescript
```

- ts文件如果书写的是基本的js代码，引入ts文件，浏览器可以正常使用

- 如果使用了ts语法书写代码，那么报错

> 编译：`tsc xxx.ts`

> 运行：`node xxx.js`

## webpack打包ts配置

> build文件夹 > webpack.config.js

```javascript
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const isProd = process.env.NODE_ENV === 'production' // 是否生产环境

function resolve(dir) {
    return path.resolve(__dirname, '..', dir)
}

module.exports = {
    mode: isProd ? 'production' : 'development',
    entry: {
        app: './src/main.ts'
    },

    output: {
        path: resolve('dist'),
        filename: '[name].[contenthash:8].js'
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                include: [resolve('src')]
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin({}),

        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],

    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },

    devtool: isProd ? 'cheap-module-source-map' : 'cheap-module-eval-source-map',

    devServer: {
        host: 'localhost', // 主机名
        stats: 'errors-only', // 打包日志输出输出错误信息
        port: 8081,
        open: true
    },
}

```

> public文件夹 > index.html

```html
<!doctype html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Hello TypeScript</title>
</head>
<body>

</body>
</html>

```

> src文件夹 main.ts
> package.json

```json
{
  "name": "2-webpack-ts",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "cross-env NODE_ENV=development webpack-dev-server --config build/webpack.config.js",
    "build": "cross-env NODE_ENV=production webpack --config build/webpack.config.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "cross-env": "^7.0.3",
    "ts-loader": "^8.0.12",
    "typescript": "^4.1.3",
    "webpack": "^4.41.5",
    "webpack-cli": "^3.3.10",
    "webpack-dev-server": "^3.10.2"
  },
  "dependencies": {
    "-": "0.0.1",
    "D": "^1.0.0",
    "clean-webpack-plugin": "^3.0.0",
    "html-webpack-plugin": "^4.5.0"
  }
}

```

## 基本类型

- ts中定义变量的语法：`let/const 变量名:类型 = 值`
- 变量是什么类型，就应该赋什么类型的值

1. boolean

    ```typescript
    let flag: boolean = true
    flag = false
    ```

2. number

    ```typescript
    let num: number = 10 // 十进制
    let num1: number = 0b1010 // 二进制
    let num2: number = 0o12 // 八进制
    let num3: number = 0xa // 十六进制
    ```

3. string

    ```typescript
    let str: string = 'hello'
    ```

4. undefined 和 null

    可以把`null`或`undefined`赋值给number类型的变量，但是需要关闭`tsconfig.json`文件的严格模式

    ```typescript
    let u: undefined = undefined
    let n: null = null
    ```

5. 数组

    方式一：`let/const 变量名: 类型[] = [值1,值2,...]`

    ```typescript
    let arr: number[] = [1, 2, 3]
    ```

    方式二：使用数组泛型 `let/const 变量名: Array<类型> = [值1,值2,...]`

    ```typescript
    let arr1: Array<number> = [10, 20, 30]
    ```

6. 元组（Tuple）

    元组类型允许表示一个已知元素数量和类型的数组，`各元素的类型不必相同`。 比如，你可以定义一对值分别为 `number` 和 `string` 类型的元组。

    ```typescript
    let t1: [number, string] = [1, 'a']
    ```

7. 枚举

    `enum` 类型是对 JavaScript 标准数据类型的一个补充。 使用枚举类型可以`为一组数值赋予友好的名字`

    - 把具有特定个数，且值是固定的情况的数据，使用枚举类型的方式定义出来，
    - 枚举类型中的数据，可以是中文
    - 枚举类型中的值是从0开始的，依次+1
    - 枚举的值对应的数字值是可以改变的
    - 枚举的值是可以通过索引（像数组中索引的方式来使用，但不是索引）的方式来访问的

    ```typescript
    enum Color {
        red,
        green,
        blue
    }
    
    let c: Color = Color.red // 0
    console.log(Color[0]) // red
    ```

8. any

    `any`类型代表任意类型

    ```typescript
    let s1: any = 10
    s1 = 'hello'
    // 数组中的数据可以是任意类型
    let arr2: any = [10, 'tom', true]
    ```

9. void

    某种程度上来说，`void` 类型像是与 `any` 类型相反，它`表示没有任何类型`。 当一个函数没有返回值时，你通常会见到其返回值类型是 `void`

    可以赋值为`null`或者`undefined`，但是需要关闭`tsconfig.json`文件的严格模式

    ```typescript
    let v: void = undefined
    let v1: void = null
    ```

    通常用在函数的返回值中，标识该函数没有返回值，或者说该函数的返回值可以是null或undefined

    ```typescript
    function showTime(): void {
        console.log(Date.now())
        // 以下都可以
        // return
        // return undefined
        // return null // 需要关闭`tsconfig.json`文件的严格模式
    }
    
    console.log(showTime()) // undefined
    ```

10. object

    `object` 表示非原始类型，也就是除 `number`，`string`，`boolean`之外的类型。

    ```typescript
    let obj: object = {name: 'tom', age: 23}
    ```

    使用 `object` 类型，就可以更好的表示像 `Object.create` 这样的 `API`。例如：

    ```typescript
    function fn2(obj: object): object {
        console.log('fn2()', obj)
        return {}
        // return undefined
        // return null
    }
    
    console.log(fn2(new String('abc')))
    console.log(fn2(String))
    ```

11. 联合类型

    联合类型（Union Types）表示取值可以为多种类型中的一种

    ```typescript
    let t: number | string = 100
    t = 'hello'
    ```

12. 类型断言

    通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。 TypeScript 会假设你，程序员，已经进行了必须的检查。

    语法：方式一：`<类型>值`；方式二：`值 as 类型`

    > 例：定义一个一个函数得到一个数字或字符串值的长度

    ```typescript
    function getLength(str: string | number): number {
        // 如果str是string类型的，那么久str就会自动的转成对象的方式来调用length属性使用（基本包装类型）
        // 如果str是number类型的，那么number是不能直接调用length属性使用
        // 写法一：<string> str 把str变量的类型强制的转成string类型的数据
        // 写法二：(str as string) 转换类型
        if ((<string>str).length) { // 字符串类型的数据
            // return (<string>str).length
            return (str as string).length
        } else { // number类型的数据
            return str.toString().length
        }
    }
    console.log(getLength(100))
    console.log(getLength('hello'))
    ```

13. 类型推断

    TS会在没有明确的指定类型的时候推测出一个类型

    有下面2种情况: 1. 定义变量时赋值了, 推断为对应的类型. 2. 定义变量时没有赋值, 推断为any类型

    ```typescript
    // 情况一：定义变量时赋值了, 推断为对应的类型
    let num = 10 // number
    // 情况二： 定义变量时没有赋值, 推断为any类型
    let a // any类型
    a = 100
    a = 'hello'
    ```

## 接口

TypeScript 的核心原则之一是对值所具有的结构进行类型检查。我们使用接口（Interfaces）来定义对象的类型。`接口是对象的状态(属性)和行为(方法)的抽象(描述)`



