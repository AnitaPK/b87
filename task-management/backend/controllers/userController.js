const { where } = require("sequelize");
const User = require("../models/userModel");
const bcryptjs = require('bcryptjs')
require('dotenv').config()
const jwt = require('jsonwebtoken')

const register = async(req, res)=>{
    try {
        const {name,email, password} = req.body
         if (!name || !email || !password) {
            return res.status(400).send({msg: "Please provide name, email and password",success: false
            });
        }
        const existingUser = await User.findOne({
            where:{email}
        })
        if(existingUser){
            return res.status(400).send({msg: "Email already registered",success: false})
        }
        const salt = bcryptjs.genSaltSync(8)
        const bcryptPassword = bcryptjs.hashSync(password,salt)
        console.log(bcryptPassword)
        const profileImage = req.file ? `upload/profile/${req.file.filename}` : null
        const newUser = await User.create({
            name:name,
            email:email,
            password:bcryptPassword,
            profileImage:profileImage
        })
        if(newUser){
            res.status(200).send({msg:"Registered Successfully", success:true})
        }else{
            res.status(400).send({msg:"Not Registered Contact admin", success:false})
        }

    } catch (error) {
        res.status(500).send({msg:"Server Error", success:false})
    }
}

const login = async(req,res)=>{
    try {
        const {email,password} = req.body

        if (!email || !password) {
            return res.status(400).send({msg: "Please provide email and password",success: false});
        }
        const existingUser = await User.findOne({
            where:{email}
        })
        if(!existingUser){
            return res.status(400).send({msg: "Please provide correct email",success: false});
        }
        const checkPassword = bcryptjs.compareSync(password, existingUser.password)
        console.log(checkPassword, "Check passoword")
        if(!checkPassword){
            return res.status(400).send({msg: "Please provide correct password",success: false});
        }
        const payload = {id:existingUser.id, role:existingUser.role}
        const token = jwt.sign(payload, process.env.SECRET_KEY, {expiresIn:'1hr'})
        console.log(token,"TOKEN")
        res.status(200).send({msg:"Login Successfull", token:token, success:true})

    } catch (error) {
        res.status(500).send({msg:"Server Error", success:false})
    }
}

const getUserInfo = async(req,res)=>{
    try {
        const ID = req.user.id
        const user = await User.findByPk(ID)
        const updatedUser = {
            name:user.name,
            email:user.email,
            role:user.role,
            profileImage: user.profileImage ? `http://localhost:7007/${user.profileImage}` : null
        }
        res.status(200).send({user:updatedUser})
    } catch (error) {
        res.status(500).send({msg:"Server Error", success:false})
    }
}
// http://localhost:7007/upload/profile/1795063727121..png

const getAllUsers = async(req,res)=>{
try{
    const users = await User.findAll()
    //update data without password
    res.status(200).send({users:users})    
} catch (error) {
        res.status(500).send({msg:"Server Error", success:false})
    }
}

module.exports = {
    register, login, getUserInfo, getAllUsers
}