const  express = require('express')
require('dotenv').config()
const path = require('path')
const cors = require('cors')
const {connectDB} = require('./config/db')
const app = express()
const port = process.env.PORT || 7001

app.use(express.json())
app.use(cors())

app.use('/user', require('./routes/userRoute'))

app.use("/upload", express.static(path.join(__dirname, "upload")));




app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))