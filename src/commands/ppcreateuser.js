const {
 SlashCommandBuilder
} = require("discord.js");

const bcrypt = require("bcrypt");
const User = require("../models/User");

module.exports = {

 data: new SlashCommandBuilder()

  .setName("ppcreateuser")

  .setDescription(
    "Create user"
  )

  .addStringOption(option =>
     option
      .setName("firstname")
      .setDescription("Enter first name")
      .setRequired(true)
  )

  .addStringOption(option =>
     option
      .setName("lastname")
      .setDescription("Enter last name")
      .setRequired(true)
  )

  .addStringOption(option =>
     option
      .setName("username")
      .setDescription("Enter username")
      .setRequired(true)
  )

  .addStringOption(option =>
     option
      .setName("email")
      .setDescription("Enter email")
      .setRequired(true)
  )

  .addStringOption(option =>
     option
      .setName("password")
      .setDescription("Enter password")
      .setRequired(true)
  ),

 async execute(interaction){

   try{

      const firstName =
       interaction.options.getString(
         "firstname"
       );

      const lastName =
       interaction.options.getString(
         "lastname"
       );

      const username =
       interaction.options.getString(
         "username"
       );

      const emailId =
       interaction.options.getString(
         "email"
       );

      const password =
       interaction.options.getString(
         "password"
       );

      //  checking
       console.log({
 firstName,
 lastName,
 username,
 emailId,
 password
});
      const existingUsername =
       await User.findOne({
         where:{ username }
       });

      if(existingUsername){

         return interaction.reply({
            content:
            "Username already exists",
            ephemeral:true
         });

      }

      const existingEmail =
       await User.findOne({
         where:{ emailId }
       });

      if(existingEmail){

         return interaction.reply({
            content:
            "Email already exists",
            ephemeral:true
         });

      }

      const hashedPassword =
       await bcrypt.hash(
         password,
         10
       );

      await User.create({

         firstName,
         lastName,
         username,
         emailId,
         password:
         hashedPassword

      });

      return interaction.reply({

         content:
         "User registered successfully",

         ephemeral:true

      });

   }catch(err){

      return interaction.reply({

         content: err.message,

         ephemeral:true

      });

   }

 }

};