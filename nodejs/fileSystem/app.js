const http = require('http')

const fs = require('fs')

fs.writeFileSync('file1.txt', 'this is first line\n')

fs.appendFileSync('file1.txt', 'This is second line')

data = fs.readFileSync('file1.txt', 'utf8')
console.log(data)




const server = http.createServer((req,res)=>{
    res.end("This is my server")
})

server.listen(5010,()=>{
    console.log(`server runs on http://localhost:5010`)
})