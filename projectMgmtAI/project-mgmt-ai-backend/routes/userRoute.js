const express = require('express')
const {register, 
    login, getUerInfo, getAllUsers, 
    getAllManagers, updateProfile, passwordUpdate} = require('../controllers/userController')
const {auth, admin, manager} = require('../middlware/auth')
const upload = require('../middlware/multer')
const router = express.Router()

router.post('/register',upload.single('profileImage'), register)
router.post('/', login)
router.get('/',auth, getUerInfo)

router.put('/updateProfile', auth, updateProfile)
router.patch('/passwordUpdate', auth, passwordUpdate)

router.get('/getAllUsers', auth, admin, getAllUsers)
router.get('/getAllManagers', auth, admin, getAllManagers)


module.exports = router