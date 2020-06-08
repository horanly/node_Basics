
const http = require('http')
const fs = require('fs')
const path = require('path')
const urlFormatter = require('url');

http.createServer((req, res)=>{
    // console.log('来了一个请求')
    const {url, method} = req

    const getData = urlFormatter.parse(url, true).query;
    const urlReq = urlFormatter.parse(url, true).pathname;

    // console.log(req);
    if(urlReq === '/' && method === 'GET'){
        // 读取首页
        console.log(path.resolve('./index.html'));
        
        fs.readFile(path.resolve('./index.html'), (err, data)=>{
            if(err){
                res.statusCode = 500;
                 res.end('internal server error')
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html')
            res.end(data)
        })
    } else if(urlReq === '/user' && method === 'GET'){
        console.log(JSON.stringify(getData));
        if (JSON.stringify(getData) === "{}") {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json')
            res.end('参数【name】不能为空')
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify([
                getData,
                {name:"tom", age: 20}
            ]))
        }
    } 
    // else if(urlReq === '/user' && method === 'POST'){
    //     // res.statusCode = 200;
    //     // res.setHeader('Content-Type', 'application/json')
    //     console.log(req);
    // }
}).listen(3000, function () {
    console.log('app is running at port  http://localhost:3000');
})