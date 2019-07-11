
const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer((req, res)=>{
    console.log('来了一个请求')
    const {url, method} = req
    if(url === '/' && method === 'GET'){
        // 读取首页
        console.log(path.resolve('./index.html'));
        
        fs.readFile(path.resolve('./index.html'), (err, data)=>{
            if(err){
                res.statusCode = 500;
                 res.end('internal server error')
            }
            res.statusCode = 200;
            // res.setHeader('Content-Type', 'text/plan')
            res.setHeader('Content-Type', 'text/html')
            res.end(data)
        })
    } else if(url === '/app' && method === 'GET'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json')

        res.end(JSON.stringify([{name:"tom", age: 20}]))
    }
}).listen(3000)