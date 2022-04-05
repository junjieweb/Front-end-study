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

    // 多态：同一个行为针对不同的对象，产生的结果是不同的，
    // 父类型引用指向子类型的实例 ==> 多态
    // 父类 Animal
    class Animal {
        name: string

        constructor(name: string) {
            this.name = name
        }

        eat() {
            console.log('我喜欢吃好吃的')
        }
    }

    // 子类 Dog
    class Dog extends Animal {
        constructor(name: string) {
            super(name);
        }

        // 自己的方法
        play() {
            console.log('玩去了')
        }

        // 重写父类中的方法
        eat() {
            console.log('我喜欢吃大骨头')
        }
    }

    // 子类 Pig
    class Pig extends Animal {
        constructor(name: string) {
            super(name);
        }

        // 自己的方法
        sleep() {
            console.log('睡觉了')
        }

        eat() {
            console.log('我喜欢吃泥巴')
        }
    }

    // 子类 Horse
    class Horse extends Animal {
        constructor(name: string) {
            super(name);
        }

        // 自己的方法
        run() {
            console.log('奔跑吧')
        }

        eat() {
            console.log('我喜欢吃小草')
        }
    }

    // Animal父类，Dog/Pig/Horse（子类）
    /*const ani: Animal = new Animal('动物')
    const dog: Dog = new Dog('小黑')
    const pig: Pig = new Pig('佩奇')
    const horse: Horse = new Horse('小白龙')*/
    // 调用方法
    /*ani.eat()
    dog.play()
    dog.eat()
    pig.sleep()
    pig.eat()
    horse.run()
    horse.eat()*/

    // 重新定义对象
    // const ani: Animal = new Animal('动物')
    const dog: Animal = new Dog('小黑')
    const pig: Animal = new Pig('佩奇')
    const horse: Animal = new Horse('小白龙')

    // dog.eat()
    // pig.eat()
    // horse.eat()

    // 工厂的设计模式的体现
    // 多态展示的效果
    // 定义一个数组，里面用来存储Animal类型的对象数据
    const arr: Animal[] = [dog, pig, horse]

    function showEat(ani: Animal) {
        ani.eat()
    }

    // 循环遍历数组
    for (let i = 0; i < arr.length; i++) {
        showEat(arr[i])
    }

    // 类中成员的修饰符（属性和方法）
    class Animal2 {
        // 声明的属性，默认为public，所以任何地方都可以访问这个属性
        // public name: string // public 任何地方都可以以访问
        // private name: string // private 子类中和外部不可以访问，只能在本类中使用
        // protected name: string // protected 子类中可以访问，外部不能访问
        readonly name: string // readonly 表示属性是只读的，不能修改

        constructor(name: string) {
            this.name = name
        }

        sayHi(msg: string) {
            console.log(msg)
        }
    }

    class Dog2 extends Animal2 {
        constructor(name: string) {
            super(name);
        }

        eat(msg: string) {
            console.log(msg, this.name)
        }
    }

    // 子类的子类
    class Husky extends Dog2 {
        constructor(name: string) {
            super(name);
        }

        play(msg: string) {
            console.log(msg, this.name)
        }
    }

    const ani2: Animal2 = new Animal2('动物2')
    console.log(ani2.name)

    const dog2: Dog2 = new Dog2('阿黄')
    dog2.eat('骨头')

    const husky: Husky = new Husky('大白')
    husky.eat('沙发')

    // 存取器
    class User {
        firstName: string
        lastName: string

        constructor(firstName: string, lastName: string) {
            this.firstName = firstName
            this.lastName = lastName
        }

        // 存取器--针对姓名
        get fullName() {
            console.log('get方法执行了')
            return this.firstName + '-' + this.lastName
        }

        set fullName(value: string) {
            console.log('set方法执行了')
            const names = value.split('-')
            this.firstName = names[0]
            this.lastName = names[1]
        }
    }

    const user: User = new User('东方', '不败')
    // 显示姓名
    console.log(user.fullName)
    user.fullName = '诸葛-孔明'
    console.log(user.firstName)
    console.log(user.lastName)

})();
