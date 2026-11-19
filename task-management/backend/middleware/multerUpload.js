const multer = require("multer");
const path = require("path");
const fs = require("fs");

const uploadPath = path.join(__dirname,"..","upload","profile")

fs.mkdirSync(uploadPath, { recursive: true });

console.log(uploadPath,"uploadPath")

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,uploadPath)
    },
    filename:(req,file,cb)=>{
        const extension = path.extname(file.originalname).toLowerCase();
        const uniqueName = `${Date.now()}${extension}`
        console.log(uniqueName)
        cb(null,uniqueName)
    }
})

const fileFilter = (req,file,cb) =>{
    const allowedExtensions = [".png", ".jpg", ".jpeg"];

    const allowedMimeTypes = [ "image/png", "image/jpeg"];

    const extension = path.extname(file.originalname).toLowerCase();

    if(allowedExtensions.includes(extension) || allowedMimeTypes.includes(extension)){
        cb(null, true)
    }else{
        cb(new Error("Only PNG, JPG and JPEG images are allowed"), false)
    }

    

}

const upload = multer({
    storage:storage,
    fileFilter:fileFilter,
    limits:{
        fileSize : 5 *1024*1024 //5mb
    }
})

module.exports = upload