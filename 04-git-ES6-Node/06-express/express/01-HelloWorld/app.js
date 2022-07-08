const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// 终端输入 node app.js
// 在浏览器中输入 http://localhost:3000/ 以查看输出。
