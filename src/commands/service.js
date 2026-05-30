const {
 SlashCommandBuilder
} = require("discord.js");

module.exports = {

 data: new SlashCommandBuilder()
  .setName("ppcreateuser")
  .setDescription(
    "Create user"
  ),

 async execute(interaction){

   await interaction.reply(
      "Service command working"
   );

 }

};