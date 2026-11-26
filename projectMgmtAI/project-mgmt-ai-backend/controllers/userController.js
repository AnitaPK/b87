const User = require("../models/userModel")
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

async function register(req,res){
    try {
        console.log(req.body)
        const {name,email,password,contactNumber} = req.body
        if(!name || !email || !password, !contactNumber){
            return res.status(400).send({msg:"Required"})
        }
        const existingUser =  await User.findOne({email:email})
        console.log(existingUser)
        if(existingUser){
            return res.status(200).send({masg:"user already exist", success:false})
        }
        const salt = bcryptjs.genSaltSync(8)
        const bcryptPassword = bcryptjs.hashSync(password,salt)
        console.log(bcryptPassword)
        const profileImage = req.file ? `upload/profile/${req.file.filename}` : null 

        const newUser = await User.create({
            name:name,
            email:email,
            password:bcryptPassword,
            contactNumber:contactNumber,
            profileImage:profileImage
        })
        console.log(newUser)
        res.status(202).send({msg:"User Created Successfully", success:true})

    } catch (error) {
        res.status(500).send({msg:"server Error"})
    }
}
async function login(req,res){
    try {
        const {email,password} = req.body
         if(!email || !password){
            return res.status(400).send({msg:"Required"})
        }
        const existingUser =  await User.findOne({email:email})
        console.log(existingUser)
        if(!existingUser){
            return res.status(200).send({masg:"Requires correct values", success:false})
        }
        const checkPassword = bcryptjs.compareSync(password, existingUser.password)
        console.log(checkPassword, "Check passoword")
        if(!checkPassword){
            return res.status(400).send({msg: "Please provide correct password",success: false});
        }
        const payload = {id:existingUser._id, role:existingUser.role}
         const token = jwt.sign(payload, process.env.SECRET_KEY, {expiresIn:'1hr'})
        console.log(token,"TOKEN")
        res.status(200).send({msg:"Login Successfull", token:token, success:true})
        
    } catch (error) {
        res.status(500).send({msg:"server Error"})
    }
}
async function getUerInfo(req,res){
    try {
        const ID = req.user.id
        const loggedUser = await User.findById(ID).select("-password")
        if(!loggedUser){
            return res.status(200).send({masg:"User not found", success:false})
        }
         const userData = {
            ...loggedUser.toObject(),
            profileImage: loggedUser.profileImage
                ? `http://localhost:7007/${loggedUser.profileImage}`
                : null
        };
        return res.status(200).send({
            msg: "User information fetched successfully",
            success: true,
            user: userData
        });
    } catch (error) {
        res.status(500).send({msg:"server Error"})
    }
}
async function getAllUsers(req,res){
    try {
        const users = await User.find({},{password:0}).sort({ createdAt: -1 });

        const updatedUsers = users.map(user => ({
            ...user.toObject(),
            profileImage: user.profileImage
                ? `http://localhost:7007/${user.profileImage}`
                : null
        }));
        res.status(200).send({users:updatedUsers, success:true})
        
    } catch (error) {
        res.status(500).send({msg:"server Error"})
    }
}
async function getAllManagers(req,res){
    try {
         const managers = await User.find({role:"manager"},{password:0}).sort({ createdAt: -1 });

        const updatedManagers = managers.map(user => ({
            ...user.toObject(),
            profileImage: user.profileImage
                ? `http://localhost:7007/${user.profileImage}`
                : null
        }));
        res.status(200).send({managers:updatedManagers, success:true})
        
    } catch (error) {
        res.status(500).send({msg:"server Error"})
    }
}
function updateProfile(req,res){
    try {
        
    } catch (error) {
        res.status(500).send({msg:"server Error"})
    }
}
function passwordUpdate(req,res){
    try {
        
    } catch (error) {
        res.status(500).send({msg:"server Error"})
    }
}

module.exports = {
    register, login, getUerInfo, getAllUsers, 
    getAllManagers, updateProfile,passwordUpdate
}