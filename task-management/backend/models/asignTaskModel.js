const {Sequelize, DataTypes} = require('sequelize')
const {sequelize} = require('../config/db')

const AssignTask = sequelize.define("AssignTask",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    taskId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    userId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    createdBy:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
},{
    timestamps:true,
    tableName:'assignTasks',
    createdAt:'createdAt',
    updatedAt:'updatedAt'
})

module.exports = AssignTask