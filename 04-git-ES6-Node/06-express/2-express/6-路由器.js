//引入express包
const express = require('express');
//创建应用对象
const app = express();
//
const router = require('./routes/router');

const adminRouter = require('./routes/admin');

//配置网站的根目录
app.use(express.static(__dirname + '/public'));
//设置中间件
app.use(router);
app.use(adminRouter);

//1、创建一个 routes 文件夹
//2、创建单独的文件 router.js
//3、修改 router.js 中的代码（四步）
//4、在主文件中引入 router.js
//5、app.use 设置中间件

//监听端口，启动服务
app.listen(80, () => {
    console.log('服务已经启动...端口 80 监听中...');
});