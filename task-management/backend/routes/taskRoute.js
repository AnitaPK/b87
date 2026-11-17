const express = require('express')
const taskController = require('../controllers/taskControllers')
const router = express.Router()

router.post('/createTask', taskController.createTask)
router.get('/getAllTasks', taskController.getAllTasks)

router.get('/getTaskById/:ID', taskController.getTaskById)
router.delete('/deleteTask/:ID', taskController.deleteTask)
router.patch('/statusUpdate/:ID', taskController.statusUpdate)
router.put('/updateTask/:ID', taskController.updateTask)

router.get('/taskByPriority/', taskController.taskByPriority)
module.exports = router