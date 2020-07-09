const express = require('express')
const app = express()

app.use('/', express.static('www'))

app.get('/user', function(req, res) {
    console.log('get接口请求');
    res.send({code:1, msg:'get请求'})
})

app.post('/user', function(req, res) {
    console.log('post接口请求');
    res.send({code:1, msg:'post请求'})
})

app.listen(3001, function(){
    console.log('app is running at port  http://localhost:3001');
})

