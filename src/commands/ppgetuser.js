const {
 SlashCommandBuilder
} = require("discord.js");

const User =
require("../models/User");

module.exports = {

 data:new SlashCommandBuilder()

 .setName("ppgetuser")

 .setDescription(
   "Get user details"
 )

 .addStringOption(option=>

    option

    .setName("username")

    .setDescription(
      "Enter username"
    )

    .setRequired(true)

 ),

 async execute(interaction){

   const username =
    interaction.options.getString(
      "username"
    );

   const user =
    await User.findOne({

      where:{
        username
      }

    });

   if(!user){

      return interaction.reply(
         "User not found"
      );

   }

   return interaction.reply(

`Name: ${user.firstName}
Username: ${user.username}
Email: ${user.emailId}`

   );

 }

};