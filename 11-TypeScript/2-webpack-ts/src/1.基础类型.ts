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
})();
