const {
 REST,
 Routes
} = require("discord.js");

require("dotenv").config();

const ppcreateuser =
 require("../commands/ppcreateuser");

const ppcreateservice =
 require("../commands/ppcreateservice");

const ppgetuser =
 require("../commands/ppgetuser");

const commands = [

 ppcreateuser.data.toJSON(),

 ppcreateservice.data.toJSON(),

 ppgetuser.data.toJSON()

];

const rest = new REST({
 version:"10"
}).setToken(
 process.env.DISCORD_TOKEN
);

(async()=>{

 try{

   console.log(
     "Registering commands..."
   );

   await rest.put(

     Routes.applicationGuildCommands(

       process.env.CLIENT_ID,

       process.env.GUILD_ID

     ),

     {
       body:commands
     }

   );

   console.log(
     "Commands registered"
   );

 }catch(err){

   console.log(err);

 }

})();