//stat 查看 资源的状态
const fs = require('fs');

//查看文件的状态
fs.stat('./index.html', (err, stats) => {
    if (err) throw err;
    console.log('是否为文件夹' + stats.isDirectory());
    console.log('是否为文件' + stats.isFile());
})