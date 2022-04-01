(() => {
    // void 代表没有返回值
    function showMsg(msg: string): void {
        console.log(msg)
    }

    let msg = 'hello'
    showMsg(msg)

    // 需求：调用函数的时候，传入的参数必须有firstName属性和lastName属性
    // js中没有接口，无法通过接口限定函数中传入的参数的具体的类型和限制参数中有什么属性
    // 先定义一个接口
    interface Person {
        firstName: string,
        lastName: string
    }

    // 定义一个函数，参数person的类型是Person
    function showPerson(person: Person) {
        console.log(person.firstName)
        console.log(person.lastName)
    }

    // 最后定义一个对象
    let p = {
        firstName: 'hello',
        lastName: 'tom',
        age: 23
    }
    // 调用函数
    showPerson(p)

    // 创建类
    class User {
        // 先定义属性
        private name: string;
        private age: number;

        // 构造方法
        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }
    }
    // ts中有类型推断
    //实例化对象
    let u: User = new User('tom', 23)
    console.log(u)
})()
