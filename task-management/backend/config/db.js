const mysql2 = require('mysql2')
const {Sequelize} = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host:process.env.DB_HOST,
        dialect:'mysql',
        logging:false
    }
)

async function connectDB (){
    try{
    await sequelize.authenticate()
    await sequelize.sync({ alter: true });

    console.log("MySQL Database Connected Successfully!")
     // Automatically update database tables
        
    }catch(error){
        console.log("Database Connection Failed:", error.message)
        process.exit(1)
    }
}

module.exports = {connectDB, sequelize}