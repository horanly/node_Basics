
const os = require('os')
const freemem = os.freemem()
const totalmem = os.totalmem()

const mem = freemem / totalmem * 100

console.log(`总内存: ${totalmem}`);
console.log(`使用内存: ${freemem}`);
console.log(`内存使用率: ${mem}%`);


// 自定义模块
const conf = require('./public/config')
console.log(conf);

const {rmbToDollar} = require('./public/currency')(6)
console.log(rmbToDollar(10));






