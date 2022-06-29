const express = require('express');
const bodyParser = require('body-parser');
//引入md5
const md5 = require('md5');

//2.引入mongoose
const mongoose = require('mongoose');

//3.连接
mongoose.connect('mongodb://127.0.0.1:27017/shop');

//4.连接成功的回调
mongoose.connection.on('open', () => {
    //用户的文档结构模型
    const UserSchema = new mongoose.Schema({
        username: String,
        password: String
    });
    //用户模型
    const UserModel = mongoose.model('user', UserSchema);

    const app = express();

    //设置中间件
    app.use(bodyParser.urlencoded({extended: false}));

    //设置ejs
    app.set('view engine', 'ejs');
    app.set('views', './views');

    //显示注册页面
    app.get('/register', (request, response) => {
        response.render('register');
    });

    //对数据进行保存
    app.post('/register', (request, response) => {
        //将密码加密
        request.body.password = md5('request.body.password');
        //获取请求体数据
        // console.log(request.body);
        UserModel.create(request.body, (err, data) => {
            if (err) throw err;
            response.send('注册成功');
        });
    });

    app.listen(80);
});
