const {DataTypes,Sequelize} = require('sequelize')
const {sequelize} = require('../config/db')

const User =  sequelize.define("User",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING(150),
        allowNull:false
    },
    email:{
        type:DataTypes.STRING(100),
        allowNull:false,
        unique:true
    },
    password:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    role:{
        type:DataTypes.ENUM('user','admin'),
        defaultValue:'user'
    },
    profileImage:{
        type:DataTypes.STRING(255),
        allowNull:true
    }
},{
    tableName: "users",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at"
})

module.exports = User