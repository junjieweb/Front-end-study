// const http = require("http");
// const callback = require("./callback");
// const serverOk = require("./serverOk");
module.exports = function (port) {
    const http = require('http');
    //引入模块
    const callback = require('./callback');
    const serverOk = require('./serverOk');

    const server = http.createServer(callback);

    server.listen(port, serverOk);
}
