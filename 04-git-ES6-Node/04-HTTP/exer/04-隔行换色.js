//获取所有的 tr 元素
const trs = document.querySelectorAll('tr');
//遍历
for (let i = 0; i < trs.length; i++) {
    //判断
    if (i % 2 === 0) {
        trs[i].style.background = '#156';
    } else {
        trs[i].style.background = '#aef';
    }
}