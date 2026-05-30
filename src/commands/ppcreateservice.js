const {
 SlashCommandBuilder
} = require("discord.js");

const Service =
require("../models/Service");


module.exports = {

 data:new SlashCommandBuilder()

 .setName("ppcreateservice")

 .setDescription(
   "Create service"
 )

 .addStringOption(option=>

   option
   .setName("name")
   .setDescription(
      "Service Name"
   )
   .setRequired(true)

 )

 .addStringOption(option=>

   option
   .setName("description")
   .setDescription(
      "Description"
   )
   .setRequired(true)

 ),

 async execute(interaction){

   try{

      const serviceName =
       interaction.options.getString(
         "name"
       );

      const description =
       interaction.options.getString(
         "description"
       );

      console.log({
         serviceName,
         description
      });

      await Service.create({

         serviceName,
         description

      });

      return await interaction.reply({

         content:
         "Service Created Successfully"

      });

   }catch(err){

      console.log(err);

      return await interaction.reply({

         content:
         err.message || "Something went wrong"

      });

   }

 }

};