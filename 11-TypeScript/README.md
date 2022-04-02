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

    可以把null或undefined赋值给number类型的变量，但是需要关闭`tsconfig.json`文件的严格模式

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

    ```typescript
    enum Gender {
        女,
        男
    }
    
    let g: Gender = Gender.男
    let g1: Gender = Gender.女
    ```

    

