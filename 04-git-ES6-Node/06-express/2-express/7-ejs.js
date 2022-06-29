// ejs 模板引擎 一种技术 并不是js独有
//1、安装 ejs
//2、引入 ejs
const ejs = require('ejs');
const fs = require('fs');

//3、调用方法
/*
    str     要编译的字符串
    data    数据对象
*/
//一、变量的拼接
// let str = '<h1><%= msg %></h1>';
// let str = fs.readFileSync('./views/ry.html').toString();
// let data = {
//     msg:'多少事，从来急，天地转，光阴迫，一万年太久，只争朝夕。',
//     title:'标题'
// };
//
// const result = ejs.render(str,data);


//二、数据的遍历
// let str = `
//     <ul>
//         <% for(let i = 0;i< songs.length;i++){ %>
//         <li><%= songs[i] %></li>
//         <% } %>
//     </ul>
// `;

// let str = fs.readFileSync('./views/songs.html').toString();
// let data = {
//     songs: [
//         '甜蜜蜜',
//         '笨小孩',
//         '常回家看看',
//         '难忘今宵',
//         '好运来'
//     ]
// };
// let result = ejs.render(str, data);
// console.log(result);

//三.判断
let str = `
    <h2>布布TV</h2>
    <% if(!vip){ %>
    <p><%= ad %></p>
    <% } %>
`;

let result = ejs.render(str, {
    vip: 1,
    ad: '我是广告'
});
console.log(result);