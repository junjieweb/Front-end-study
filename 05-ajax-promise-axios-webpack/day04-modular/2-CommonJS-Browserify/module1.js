/*
    module1使用module.exports = xxx 去暴露，xxx就是暴露的内容
    module.exports和exports不能混用，若混用了，以module.exports为主
*/

const data = 'atm';
const msg = 'hello';

module.exports = {
    showData() {
        console.log(data);
    },
    showMsg() {
        console.log(msg);
    }
}

exports.x = 100 //此行代码不起作用。因为上方写了module.exports