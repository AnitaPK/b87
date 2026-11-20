const express = require('express')
const taskController = require('../controllers/taskControllers')
const router = express.Router()
const {auth, admin} = require('../middleware/auth')

router.post('/createTask',auth, admin, taskController.createTask)
router.get('/getAllTasks',auth,admin, taskController.getAllTasks)

router.get('/getTaskById/:ID',auth, taskController.getTaskById)
router.delete('/deleteTask/:ID',auth,admin, taskController.deleteTask)
router.patch('/statusUpdate/:ID',auth, taskController.statusUpdate)
router.put('/updateTask/:ID',auth,admin, taskController.updateTask)

router.get('/taskByPriority/', taskController.taskByPriority)

module.exports = router