// console.log("Hello world")

const http = require('http')
const math = require('./math')
const settings = require('./config/settings')
const os = require('os')
const path = require('path')


number1 = 10
number2 = 20

add = math.addition(number1, number2)
console.log("Addition", add)

console.log(os.totalmem())
console.log(os.platform())

console.log(__dirname)


const server = http.createServer((req, res)=>{
    res.end("Hello world")
})
const port = settings.PORT | 5010



server.listen(5010,()=>{
    console.log("server running")
})

// http://localhost:5010

// npm init 
