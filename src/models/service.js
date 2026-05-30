const { DataTypes } = require("sequelize");

const sequelize =
require("../config/db");

const Service =
sequelize.define("Service",{

   serviceName:{
      type:DataTypes.STRING,
      allowNull:false
   },

   description:{
      type:DataTypes.STRING,
      allowNull:false
   }

});

module.exports = Service;