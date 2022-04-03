;(() => {
    // 接口：是一种约束、限制、类型，可以限制对象的类型，针对对象的属性或者方法进行一个描述
    // 接口：其实就是一种限制，可以限制对象中有什么样的数组或者方法

    /*
    在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型
    接口: 是对象的状态(属性)和行为(方法)的抽象(描述)
    接口类型的对象
        多了或者少了属性是不允许的
        可选属性: ?
        只读属性: readonly
    */

    /*
    需求: 创建人的对象, 需要对人的属性进行一定的约束
      id是number类型, 必须有, 只读的
      name是string类型, 必须有
      age是number类型, 必须有
      gender是string类型, 可以没有
    */

    // 定义一个接口
    interface Person {
        readonly id: number, // readonly 只读
        name: string,
        age: number,
        gender?: string // ? 可选属性
    }

    // 接口定义后可以当作对象来使用，如果某个对象的类型是当前的这个接口，那么这个对象中的属性和方法必须符合定义的接口
    // 定义一个对象
    let person: Person = {
        id: 1,
        name: 'tom',
        age: 23,
        // gender: '男'
    }
    // person.id = 2

    // 函数类型，
    // 定义一个接口，用来限制某个函数变量的类型
    interface Search {
        // 限制某个函数的类型
        (x: number, y: string): string
    }

    // 定义一个函数
    let fn: Search = function (x: number, y: string): string {
        return x + y
    }
    fn(1, 'a')


    // 接口可以作为类的类型使用
    // 定义一个接口
    interface Fly {
        fly(str: string): void
    }

    // 定义一个类
    // 理解：当前User类的类型是Fly类型的/接口限定了当前这个类中必须要有接口中定义的内容
    class User implements Fly {
        // 定义属性
        name: string
        age: number

        // 构造方法（构造函数/构造器）
        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }

        // 定义方法
        sayHi() {
            console.log(`我是${this.name}，今年${this.age}岁了`)
        }

        // 实现接口中定义的方法
        fly(str: string): void {
            console.log(str)
        }
    }

    // 实例化对象
    let u: User = new User('tom', 34)
    u.sayHi()
    u.fly('起飞')

    // 类可以同时实现多个接口，类的类型通过接口来限制，可以有多个接口类型
    // 类可以实现多个接口
    // 定义一个接口
    interface Swim {
        swim(str: string): void
    }

    // 定义一个类
    class User2 implements Fly, Swim {
        name: string

        constructor(name: string) {
            this.name = name
        }

        // 实现的Fly接口中的方法
        fly(str: string): void {
            console.log('起飞了', str)
        }

        // 实现的Swim接口中的方法
        swim(str: string): void {
            console.log('游泳去了', str)
        }
    }

    // 实例化对象
    let u2: User2 = new User2('user')
    u2.fly('真好')
    u2.swim('一起啊')

    // 接口之间也可以进行继承的操作
    // 定义接口
    interface Fly1 {
        fly(): void
    }

    interface Swim1 {
        swim(): void
    }

    // 新的接口，继承上面两个接口
    interface FlyAndSwim extends Fly1, Swim1 {

    }

    // 定义一个类，可以同时实现多个接口
    class User3 implements FlyAndSwim {
        name: string

        constructor(name: string) {
            this.name = name
        }

        fly(): void {
            console.log('起飞')
        }

        swim(): void {
            console.log('游泳')
        }
    }

    let u3: User3 = new User3('tom')
    u3.fly()
    u3.swim()

})();
