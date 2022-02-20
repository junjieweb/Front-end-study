const express = require('express')
const app = express()

app.get('/users/info', function (req, res) {
    let response = {
        status: 200,
        data: {
            name: 'tom',
            age: 23
        }
    }
    res.send(JSON.stringify(response))
})

app.listen(4000, function () {
    console.log('服务已经启动，在localhost:4000/users/info')
})