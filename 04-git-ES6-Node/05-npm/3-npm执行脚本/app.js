const http = require('http');

const server = http.createServer((request, response) => {


    response.end('Hello npm');
});

server.listen(80);