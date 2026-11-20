const User = require("./userModel");
const Task = require("./taskModel");
const AssignTask = require("./asignTaskModel");


// 1. USER - TASK (Task Creator)
User.hasMany(Task, {
    foreignKey:"createdBy",
    as:"createdTasks"
})
Task.belongsTo(User, {
    foreignKey:"createdBy",
    as:"creator"
})

// 2. USER - ASSIGN TASK (Assigner) 
User.hasMany(AssignTask, {
    foreignKey: "createdBy",
    as: "createdAssignments"
});

AssignTask.belongsTo(User, {
    foreignKey: "createdBy",
    as: "assigner"
});

// 3. USER - ASSIGN TASK (Assignee)
User.hasMany(AssignTask, {
    foreignKey: "userId",
    as: "taskAssignments"
});

AssignTask.belongsTo(User, {
    foreignKey: "userId",
    as: "assignee"
});

// 4. TASK - ASSIGN TASK  
Task.hasMany(AssignTask, {
    foreignKey: "taskId",
    as: "assignments"
}); 

AssignTask.belongsTo(Task, {
    foreignKey: "taskId",
    as: "task"
});

// 5. MANY-TO-MANY RELATIONSHIP 
Task.belongsToMany(User, {
    through: AssignTask,
    foreignKey: "taskId",
    otherKey: "userId",
    as: "assignedUsers"
});

User.belongsToMany(Task, {
    through: AssignTask,
    foreignKey: "userId",
    otherKey: "taskId",
    as: "assignedTasks"
});

module.exports = {
    User,
    Task,
    AssignTask
};