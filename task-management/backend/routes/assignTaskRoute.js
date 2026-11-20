const express = require('express')
const router = express.Router()
const {auth, admin} = require('../middleware/auth')
const assignTaskController = require('../controllers/assignTaskController')

router.post('/assignTask', auth, admin, assignTaskController.assignTask)
router.get('/getTasksByUser', auth, assignTaskController.getTasksByUser)
router.get('/getUsersByTask', auth, admin, assignTaskController.getUsersByTask)
router.delete('/deleteAssignTask', auth, admin, assignTaskController.deleteAssignTask)
router.put('/updateAssignTask', auth, admin, assignTaskController.updateAssignTask)

module.exports = router