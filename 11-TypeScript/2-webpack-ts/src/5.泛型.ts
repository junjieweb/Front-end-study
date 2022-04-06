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


    // 需求：创建对象的时候，调用对应的方法，可以实现某一类的信息的添加或查询操作
    // 定义一个泛型接口，用来约束工具类中的方法或者数据的方式
    interface BaseCRUD<T> {
        // 限定存储数据的容器的类型
        data: T[]
        // 增加数据的方法
        add: (t: T) => number
        // 查询数据的方法
        getById: (id: number) => T
    }

    class User {
        id: number = 1
        name: string
        age: number

        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }
    }

    class UserCRUD implements BaseCRUD<User> {
        // 定义属性
        data: User[] = [] // 用来存储用户对象信息
        // 添加用户对象的方法
        add(user: User): number {
            const obj = {
                id: Date.now() + Math.random(),
                name: user.name,
                age: user.age
            }
            this.data.push(obj) // 把当前的用户对象保存到容器中
            return obj.id // 返回用户的id
        }

        // 根据id返回对应的用户对象
        getById(id: number): User {
            return <User>this.data.find(item => item.id === id) || {}
        }
    }

    // 实例化工具类的对象
    const userCRUD: UserCRUD = new UserCRUD()
    let userId: number = userCRUD.add(new User('tom', 23))
    userCRUD.add(new User('tom2', 12))
    userCRUD.add(new User('tom3', 35))
    console.log(userCRUD.data)
    const user = userCRUD.getById(userId)
    console.log(user)

})();
