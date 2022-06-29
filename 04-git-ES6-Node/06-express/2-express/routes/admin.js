const express = require('express');
const router = express.Router();

//路由规则
router.get('/admin',(request,response)=>{
    response.send('<h1>后台首页</h1>')
})

router.get('/logout',(request,response)=>{
    response.send('<h1>退出登录</h1>')
})

//4、暴露
module.exports = router;