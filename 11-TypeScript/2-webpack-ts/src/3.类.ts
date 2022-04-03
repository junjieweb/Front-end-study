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


})();
