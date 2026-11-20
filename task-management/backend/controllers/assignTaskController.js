const { Task, AssignTask, User } = require("../models");

async function assignTask(req,res){
    try {
         const { taskId, userId, userIds } = req.body;
         console.log(req.user.id)

        // Accept either one userId or multiple userIds
        const usersToAssign = userIds || (userId ? [userId] : []);

        if (!taskId || usersToAssign.length === 0) {
            return res.status(400).json({msg: "Please provide taskId and userId/userIds", success: false});
        }
        
        // Check task exists
        const task = await Task.findByPk(taskId);

        if (!task) {
            return res.status(404).json({ msg: "Task not found", success: false});
        }
         // Remove duplicate IDs from request
        const uniqueUserIds = [...new Set(usersToAssign.map(Number))];

        // Create assignments
        const assignments = await AssignTask.bulkCreate(
            uniqueUserIds.map(id => ({
                taskId:taskId,
                userId: id,
                createdBy: req.user.id
            }))
        );
        return res.status(201).json({ msg: "Task assigned successfully",success: true,totalAssigned: assignments.length});
    } catch (error) {
        res.status(500).snd({msg:"server error", success:true})
    }
}

async function getTasksByUser(req,res){
    try {
         const userId = req.user.id;
        const assignments = await AssignTask.findAll({
            where: {userId},
            include: [
                {
                    model: Task,
                    as: "task"
                },
                {
                    model: User,
                    as: "assigner",
                    attributes: ["id", "name", "email"]
                }
            ],
            order: [["createdAt", "DESC"]]
        });
        res.status(200).json({
            success: true,
            total: assignments.length,
            assignments
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({msg:"server error", success:true})
    }
}
async function getUsersByTask(req,res){
    try {
         const { taskId } = req.query;

        if (!taskId) {
            return res.status(400).json({
                msg: "Please provide taskId",
                success: false
            });
        }

        const task = await Task.findByPk(taskId);

        if (!task) {
            return res.status(404).json({
                msg: "Task not found",
                success: false
            });
        }

        const assignments = await AssignTask.findAll({
            where: {
                taskId
            },
            include: [
                {
                    model: User,
                    as: "assignee",
                    attributes: [
                        "id",
                        "name",
                        "email",
                        "role",
                        "profileImage"
                    ]
                }
            ],
            order: [["createdAt", "DESC"]]
        });

        return res.status(200).json({ success: true,
            task: {
                id: task.id,
                taskTitle: task.taskTitle
            },
            total: assignments.length,assignments
        });
        
    } catch (error) {
        res.status(500).snd({msg:"server error", success:true})
    }
}
function deleteAssignTask(req,res){
    try {
        
    } catch (error) {
        res.status(500).snd({msg:"server error", success:true})
    }
}
function updateAssignTask(req,res){
    try {
        
    } catch (error) {
        res.status(500).snd({msg:"server error", success:true})
    }
}

module.exports = {
    assignTask, getTasksByUser, getUsersByTask, deleteAssignTask, updateAssignTask
}