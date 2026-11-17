const {sequelize } = require('../config/db')
const {DataTypes, Sequelize} = require('sequelize')

const Task = sequelize.define("Task", {
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
taskTitle:{
        type:DataTypes.STRING(100),
        allowNull:false,
},
description:{
    type:DataTypes.TEXT,
    allowNull:true
},
status:{
    type:DataTypes.ENUM('pending', 'in-progress','complete'),
    defaultValue:'pending'
},
priority:{
    type:DataTypes.ENUM('Low','Medium','High'),
    defaultValue:'Medium'
},
department:{
    type:DataTypes.STRING(50),
    allowNull:false
},
startDate:{
    type:DataTypes.DATEONLY(),
    allowNull:false
},
endDate:{
    type:DataTypes.DATEONLY(),
    allowNull:false
}
},{
    timestamps:true,
    tableName:'tasks',
    createdAt: "created_at",
    updatedAt: "updated_at"
}
)

module.exports = Task