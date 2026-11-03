const express = require('express')
require('dotenv').config()
const cors = require('cors')
const db = require('./config/db')
const dashboardRoute = require('./routes/dashboardRoute')


const app = express()

const port = process.env.PORT || 7010 

app.use(express.json())
app.use(cors())

app.use('/dashboard', dashboardRoute)

// http://loacalhost:5011/dashboard/top10PopulatedCon


app.listen(port, () => console.log(`Example app listening on port ${port}!`))