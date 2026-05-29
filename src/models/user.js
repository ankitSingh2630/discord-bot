const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define("User",{

 firstName:{
   type: DataTypes.STRING,
   allowNull:false,
   validate:{
      len:[3,20]
   }
 },

 lastName:{
   type: DataTypes.STRING,
   allowNull:false,
   validate:{
      len:[3,20]
   }
 },

 emailId:{
   type:DataTypes.STRING,
   allowNull:false,
   unique:true,
   validate:{
      isEmail:true
   }
 },

 password:{
   type:DataTypes.STRING,
   allowNull:false
 }

});

module.exports = User;