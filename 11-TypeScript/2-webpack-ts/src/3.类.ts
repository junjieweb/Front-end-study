;(() => {
    // 类
    // 定义一个普通的类
    class Product {
        // 定义属性
        name: string
        color: string
        price: number

        // 构造函数/构造器：为了实例化对象的时候，可以直接把对象中的属性进行初始化的操作
        constructor(name: string, color: string, price: number) {
            this.name = name
            this.color = color
            this.price = price
        }

        //定义方法
        showProduct(): void {
            console.log(`当前的商品是${this.name}，颜色是${this.color}，价格是${this.price}`)
        }
    }

    // 实例化对象
    let pro: Product = new Product('手机', 'red', 1999)
    pro.showProduct()
    console.dir(pro)

    // 继承：类与类之间的关系，有了继承之后，目的是为了实现多态
    // 类与类之间一旦有了继承关系之后，类的叫法也会改变，A类继承B类，A（子类/派生类）B（父类/基类）
    // 什么情况下类和类之间会产生继承关系？
    // 对象----抽取出类---多个类---抽取基类---抽取派生类
    // 分析对象---抽取出对象的特征（属性）和行为（方法），要想具体地创建出一个对象（实例化），需要现有类
    // 先定义一个类，类中有属性和方法

    // 定义一个父类（基类）
    class Person {
        // 属性
        name: string
        age: number

        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }

        // 方法
        sayHi(): void {
            console.log('你好啊')
        }
    }

    // 定义一个学生类（派生类）
    class Student extends Person {
        // 属性
        score: number

        constructor(name: string, age: number, score: number) {
            // 使用父类中的构造函数来进行属性的初始化操作
            super(name, age)
            this.score = score
        }

        // 子类中可以定义和父类中的方法同名的方法，内部可以重写父类方法中内容
        sayHi() {
            // 子类的方法中调用父类的方法
            super.sayHi();
            console.log('我是学生')
        }

        // 自己的方法
        study() {
            console.log('好好学习，天天向上！')
        }
    }

    // 实例化对象
    const stu: Student = new Student('tom', 23, 100)
    stu.sayHi()
    stu.study()

})();
