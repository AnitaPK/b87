const jwt = require('jsonwebtoken')
require('dotenv').config()
function auth(req, res, next){
    const tokenReq = req.headers.authorization
    console.log(tokenReq,"token in middleware")
    if(!tokenReq.startsWith("Bearer")){
        res.status(400).send({msg:"Not authorized", success:false})
    }
    const token = tokenReq.split(" ")[1]
    console.log(token, "this is exact token")
    decodedUser = jwt.verify(token,process.env.SECRET_KEY)
    console.log(decodedUser)
    req.user = decodedUser

    next()
}



function admin(req,res, next){
    if(req.user.role == 'admin'){
        next()
    }else{
        res.status(400).send({msg:"You are not ADMIN"})
    }
}




module.exports = {auth, admin}