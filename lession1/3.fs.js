
// fs

const fs = require('fs')

// 读取一个文件

// 异步读取
fs.readFile('./public/config.js', (err, data)=>{
    console.log(err, data.toString());
})

// fs.writeFile('b.txt','哈哈add',function(err){
//     console.log(err)
// })

// promise
const {promisify} = require('util')
const readFile = promisify(fs.readFile)
readFile('./public/config.js').then(data=>{
    console.log(data);
})

// generator


// async await