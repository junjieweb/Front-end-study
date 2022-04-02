(() => {
    // 布尔类型
    let flag: boolean = true
    console.log(flag)

    // 数字类型
    let num: number = 10 // 十进制
    let num1: number = 0b1010 // 二进制
    let num2: number = 0o12 // 八进制
    let num3: number = 0xa // 十六进制
    console.log(num)
    console.log(num1)
    console.log(num2)
    console.log(num3)

    // 字符串类型
    let str: string = 'hello'
    console.log(str)

    let u: undefined = undefined
    let n: null = null
    console.log(u, n)
    // let a: number = null
    // console.log(a)

    // 数组类型
    let arr: number[] = [1, 2, 3]
    let arr1: Array<number> = [10, 20, 30]
    console.log(arr)
    console.log(arr1)

    // 元组
    let t1: [number, string] = [1, 'a']
    console.log(t1[0])
    console.log(t1[1])

    // 枚举类型
    enum Gender {
        女,
        男
    }

    let g: Gender = Gender.男
    let g1: Gender = Gender.女
    console.log(g, g1)

    enum Color {
        red,
        green,
        blue
    }

    let c: Color = Color.red
    console.log(c)
    console.log(Color[0])
    console.log('---------------------------')

    // any类型
    let s1: any = 10
    console.log(s1)
    s1 = 'hello'
    console.log(s1)
    let arr2: any = [10, 'tom', true]
    console.log(arr2)

    // void类型
    let v: void = undefined
    console.log(v)

    function showTime(): void {
        console.log(Date.now())
        // 以下都可以
        // return
        // return undefined
        // return null // 需要关闭`tsconfig.json`文件的严格模式
    }

    console.log(showTime()) // undefined

    // object
    let obj: object = {name: 'tom', age: 23}
    console.log(obj)

    function fn2(obj: object): object {
        console.log('fn2()', obj)
        return {}
        // return undefined
        // return null
    }

    console.log(fn2(new String('abc')))
    // console.log(fn2('abc') // error
    console.log(fn2(String))

    // 联合类型
    let t: number | string = 100
    t = 'hello'

    // 需求2: 定义一个一个函数得到一个数字或字符串值的长度
    function getLength(str: string | number): number {
        // 如果str是string类型的，那么久str就会自动的转成对象的方式来调用length属性使用（基本包装类型）
        // 如果str是number类型的，那么number是不能直接调用length属性使用
        // 类型断言：
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


    // 类型推断
    let a = 10 // number
    let b
    b = 100
    b = 'hello'
    console.log(b)
    console.log(a)
})();
