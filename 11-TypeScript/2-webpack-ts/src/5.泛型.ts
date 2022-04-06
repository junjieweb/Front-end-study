;(() => {
    // 泛型

    // 在定义函数或类时，如果遇到类型不明确就可以使用泛型
    function fn<T>(a: T): T {
        return a
    }

    // 直接调用具有泛型的函数
    fn(10) // 不指定泛型，TS可以自动对类型进行推断
    fn<string>('hello') // 指定泛型

    // 定义多个泛型参数的函数
    function f1<T, K, V>(x: T, y: K, z: V): void {
        let result = x + '-' + y + '-' + z
        console.log(result)
    }

    f1<string, number, boolean>('a', 10, true)

})();
