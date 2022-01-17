// fs 模块的路径问题
/**
 * 路径的分类
 * 绝对路径
 *   * D:/www/share/day05/代码/1-nodejs/write.js (windows)
 *   * C:/images/logo.png  (windows)
 *   * /usr/root/www/website/index.html (linux)
 * 相对路径
 *   * ./index.html
 *   * ../css/app.css  上一级目录中找 css/app.css
 *   * index.html  当前文件夹下的 index.html
 */
const fs = require('fs');

// fs.writeFileSync('./index.html', 'abc');
// fs.writeFileSync('E:\\OneDrive - junjie001\\web\\webcode\\projects\\04-git-ES6-Node\\day05\\01-NodeJS\\03-文件系统\\index.html', 'abc');

//特殊的变量 始终保持的是当前文件所在文件夹的绝对路径
//__dirname
console.log(__dirname);
fs.writeFileSync(__dirname + '/index.html', 'abc');
