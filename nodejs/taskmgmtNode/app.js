const express = require('express')
const colors = require('colors')
require('dotenv').config()



const app = express()
const port = process.env.PORT  | 5010
console.log(port)

app.use(express.json())




console.log("This is Hello".red)
console.log(colors.bgCyan("This is Hello"))
console.log("This is Hello".rainbow)
console.log(colors.italic("This is Hello"))

const tasks = []


app.get('/',(req,res)=>{
    res.send({msg:"Server sends this Data"})
})

app.post('/createTask', (req,res)=>{
    console.log("****************************")
    console.log(req.body)
    console.log(typeof req.body)
    try {
        tasks.push(req.body)
        console.log("tasks".green,tasks)
        res.status(200).send({"msg":"Task created","success":true})
    } catch (error) {
        console.log(error)
        res.status(500).send({msg:"ServerError","success":false,"error":error})
    }

})
// http://localhost:5011/createTask 
app.get('/getAllTask', (req,res)=>{
    try {

        res.status(200).send({tasks:tasks,success:true})
    } catch (error) {
        console.log(error)
        res.status(500).send({msg:"ServerError","success":false,"error":error})
    }
})
//  http://localhost:5011/getAllTask

app.get('/getTaskById/:ID', (req,res)=>{
    console.log(req.params) // {ID:1}
    const ID =  req.params.ID
try {
        index = tasks.findIndex((elmt) => elmt.id == ID)
        if(index == -1){
            res.status(400).send({msg:"Tasks not found",success:false})
        }else{
            // task = tasks[index]
            const task = tasks.find((elmt => elmt.id == ID))
            res.status(200).send({task:task, success:true})
        }

    } catch (error) {
        console.log(error)
        res.status(500).send({msg:"ServerError","success":false,"error":error})
    }
})
// http://localhost:5011/getTaskById/11
app.delete('/deleteTask/:ID',(req,res)=>{
    const ID = req.params.ID
    try {
        index = tasks.findIndex((elmt) => elmt.id == ID)
        if(index == -1){
            res.status(400).send({msg:"Tasks not found",success:false})
        }else{
            tasks.splice(index, 1)
            res.status(200).send({msg:"Task Deleted successfully",success:true})
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).send({msg:"ServerError","success":false,"error":error})
    }

})
// http://localhost:5011/deleteTask/8
app.put('/updateTask/:ID',(req,res)=>{
        const ID = req.params.ID
        console.log(req.body)
    try {
        index = tasks.findIndex((elmt) => elmt.id == ID)
        if(index == -1){
            res.status(400).send({msg:"Tasks not found",success:false})
        }else{
            tasks[index].title = req.body.title || tasks[index].title
            tasks[index].status = req.body.status ||  tasks[index].status 

            res.status(200).send({msg:"task updated successfully", success:'true'})
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({msg:"ServerError","success":false,"error":error})
    }

})
// http://localhost:5011/updateTask/11
app.patch('/updateStatus/:ID',(req,res)=>{
    const ID = req.params.ID
    console.log(req.body)
    try {
        index = tasks.findIndex((elmt) => elmt.id == ID)
        if(index == -1){
            res.status(400).send({msg:"Tasks not found",success:false})
        }else{
            tasks[index].status = req.body.status
            res.status(200).send({msg:"Task status updated",success:true})
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).send({msg:"ServerError","success":false,"error":error})
    }

})
http://localhost:5011/updateStatus/11
app.get('/about',(req,res)=>{
    const aboutUs = "This is data of about us page"
    res.json({msg:aboutUs})
})






app.listen(port, ()=>{
    console.log(`server started on http://localhost:${port}`)
})