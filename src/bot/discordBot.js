const {
 Client,
 GatewayIntentBits,
 Collection
} = require("discord.js");

const ppcreateuser =
require("../commands/ppcreateuser");

const ppcreateservice =
require("../commands/ppcreateservice");

const ppgetuser =
require("../commands/ppgetuser");

const service =
 require("../commands/service");

const client = new Client({

 intents:[
   GatewayIntentBits.Guilds
 ]

});

client.commands =
 new Collection();

client.commands.set(
 "ppcreateuser",
 ppcreateuser
);

client.commands.set(
 "ppcreateservice",
 ppcreateservice
);

client.commands.set(
 "ppgetuser",
 ppgetuser
);

client.once(
 "clientReady",
 ()=>{

 console.log(
   `Bot Logged In: ${client.user.tag}`
 );

});

client.on(
 "interactionCreate",
 async(interaction)=>{

   if(
     !interaction.isChatInputCommand()
   ) return;

   const command =
    client.commands.get(
      interaction.commandName
    );

   if(command){

      await command.execute(
         interaction
      );

   }

});

client.login(
 process.env.DISCORD_TOKEN
);