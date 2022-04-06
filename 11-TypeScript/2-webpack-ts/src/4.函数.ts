;(() => {
    // ts中的函数
    // 函数类型
    // let add: (x: number, y: number) => number = function (x: number, y: number): number {
    //     return x + y
    // }

    // 默认参数
    function add1(x: number = 0, y: number = 0): number {
        return x + y
    }

    console.log(add1())

    function buildName(firstName: string = 'A', lastName?: string): string {
        if (lastName) {
            return firstName + '-' + lastName
        } else {
            return firstName
        }
    }

    console.log(buildName('C', 'D'))
    console.log(buildName('C'))
    console.log(buildName())

    // 剩余参数
    function info(x: string, ...args: string[]) {
        console.log(x, args)
    }

    info('abc', 'c', 'b', 'a')


    // 函数重载：函数的名字相同，函数的形参个数不同
    // 需求: 有一个add函数，可以接收2个string类型的参数进行拼接，也可以接收2个number类型的参数进行相加
    // 重载函数声明
    function add(x: number, y: number): number
    function add(x: string, y: string): string

    function add(x: number | string, y: number | string): number | string {
        if (typeof x === 'string' && typeof y === 'string') {
            return x + y
        } else if (typeof x === 'number' && typeof y === 'number') {
            return x + y
        } else {
            return -1
        }
    }

    console.log(add(1, 2));
    console.log(add('a', 'b'));

})();
