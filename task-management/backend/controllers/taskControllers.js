const Task = require('../models/taskModel')


async function createTask (req,res){
    const {taskTitle, description,priority,department,startDate,endDate}=req.body
    try {
        newTask = await Task.create({
            taskTitle, 
            description,
            priority:priority || 'Medium',
            department,
            startDate,
            endDate
        })
        if(newTask){
            res.status(200).send({msg:"Task creadted Successfully", success:true})
        }else{
            res.status(400).send({msg:"Task not Created", success:false})
        }   
    } catch (error) {
        res.status(500).send({msg:"Server Error", success:false})
    }
}

async function getAllTasks(req,res){
    try {
        const tasks = await Task.findAll()
        res.status(200).send({tasks:tasks, success:true}) 
    } catch (error) {
        res.status(500).send({msg:"Server Error", success:false})
       }
}

async function getTaskById(req, res){
    const ID = req.params.ID
    try {
        const task = await Task.findByPk(ID)
        if(!task){
           return res.status(400).send({msg:"Task Not Found", success:false})
        }
         res.status(200).send({task:task, success:true})

        } catch (error) {
         res.status(500).send({msg:"Server Error", success:false})
       }
}

async function deleteTask(req,res){
    const ID = req.params.ID
    try {
        const task = await Task.findByPk(ID)
        if(!task){
           return res.status(400).send({msg:"Task Not Found", success:false})
        }
        await task.destroy()
        res.status(200).send({msg:"Task deleted Successfully, success:true"})
        } catch (error) {
         res.status(500).send({msg:"Server Error", success:false})
       }
}

async function statusUpdate(req,res){
     
    try {
        const ID = req.params.ID
        const {status} = req.body
        console.log(ID, status)
        const task = await Task.findByPk(ID)
        if(!task){
           return res.status(400).send({msg:"Task Not Found", success:false})
        }
        await task.update({status})
        res.status(200).send({msg:"Task Updated Successfully", success:true})
        } catch (error) {
         res.status(500).send({msg:"Server Error", success:false})
       }
}

async function updateTask(req,res){
 const ID = req.params.ID
 
    try {
         const task = await Task.findByPk(ID)
        if(!task){
           return res.status(400).send({msg:"Task Not Found", success:false})
        }

        await task.update({
            taskTitle:req.body.taskTitle || task.taskTitle, 
            description:req.body.description || task.description,
            priority: req.body.priority || task.priority,
            department: req.body.department || task.department,
            startDate: req.body.startDate || task.startDate,
            endDate: req.body.endDate || task.endDate,
            status: req.body.status || task.status
        })
        res.status(200).send({msg:"Task updated Successfully", success:true})

        } catch (error) {
         res.status(500).send({msg:"Server Error", success:false})
       }
}

async function taskByPriority(req,res){
    // console.log(req.query)
    try {
        const {priority} = req.query
        const tasks = await Task.findAll({
            where:{
                priority:priority
            }
        })
        if(tasks.length == 0){
            res.status(400).send({msg:"Task not found", success:true})
        }
        const len = tasks.length
        res.status(200).send({tasks:tasks,length:len, success:true})
        } catch (error) {
         res.status(500).send({msg:"Server Error", success:false})
       }
}

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    deleteTask,
    statusUpdate,
    updateTask,
    taskByPriority
}