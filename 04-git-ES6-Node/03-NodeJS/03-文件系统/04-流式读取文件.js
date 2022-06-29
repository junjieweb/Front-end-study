//1、引入fs模块
const fs = require('fs');

//2、创建读取流对象
const rs = fs.createReadStream('./index.html');

//3、绑定事件 when 当...时候
//chunk 块   当读取完一块数据后触发
rs.on('data',chunk => {
    console.log(chunk.toString());
});

//读取流打开的时候触发
rs.on('open',()=>{
    console.log('读取流打开了');
})

// rs.close();