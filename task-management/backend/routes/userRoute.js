const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const {auth, admin} = require('../middleware/auth')
const upload = require("../middleware/multerUpload")

router.post('/register',upload.single('profileImage'), userController.register)
router.post('/login', userController.login)
router.get('/getUserInfo', auth, userController.getUserInfo)
router.get('/getAllUsers', auth, admin, userController.getAllUsers)

module.exports = router