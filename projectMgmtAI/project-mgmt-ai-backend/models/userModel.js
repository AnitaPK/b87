const mongoose = require('mongoose')
const { type } = require('node:os')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
      password: {
            type: String,
            required: true
      },
      contactNumber: {
            type: String,
            required: true
      },
      profileImage: {
            type: String,
            default: ""
        },
    role:{
        type:String,
        enum:["admin", "manager", "user"],
        default:"user"
    }

},{
    timestamps:true
})

const User = mongoose.model("User", userSchema)

module.exports = User