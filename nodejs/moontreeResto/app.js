const express = require('express')

const port = 7010

const app = express()

app.use(express.static('public'))



app.listen(port, ()=>{
    console.log(`server running on http://localhost:${port}`)
})