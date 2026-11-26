const mongoose = require('mongoose')
require('dotenv').config()
async function connectDB(){
     try {
    await mongoose.connect(process.env.LOCAL_MONGO_URL)
     console.log(`MongoDB Connected: ${mongoose.connection.host}`);
     }catch(error){
         console.error("Database Connection Failed:", error.message);
        process.exit(1);
     }
}
connectDB()

module.exports = {connectDB}