// function myMoney() {
//     var money = 18000;
//
//     function getMoney() {
//         return money;
//     }
//
//     function setMoney(a) {
//         money += a;
//     }
//
//     return {
//         getMoney: getMoney,
//         setMoney: setMoney
//     }
// }
(function () {
    var money = 15000;

    function getMoney() {
        return money;
    }

    function setMoney(a) {
        money += a;
    }

    window.getMoney = getMoney;
    window.setMoney = setMoney;
})()
// function myMoney2() {
//
// }
