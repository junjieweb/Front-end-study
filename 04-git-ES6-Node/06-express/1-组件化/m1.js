function add(a, b) {
    return a + b;
}

function div(a, b) {
    return a / b;
}

//1、暴露数据
module.exports = {
    add,
    div
}