//1. 安装
//2. 引入mongoose 模块
const mongoose = require('mongoose');

//3. 连接数据库 connect    project  数据库的名称
mongoose.connect('mongodb://127.0.0.1:27017/project', {useNewUrlParser: true, useUnifiedTopology: true});

//4. 设置连接成功的回调
mongoose.connection.on('open', () => {
    //5. 创建文档结构对象  new Person
    const UserSchema = new mongoose.Schema({
        username: String,
        password: String,
        age: Number
    });
    //6. 创建文档模型对象
    const UserModel = mongoose.model('users', UserSchema);
    //7. 数据操作
    UserModel.create({
        username: 'tom',
        password: '123456',
        age: 28
    }, (err, data) => {
        if (err) throw err;
        //若没有错误
        console.log(data);
        //8. 选做  关闭数据库连接
        mongoose.connection.close();
    });

});