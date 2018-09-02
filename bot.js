const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "%";
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong!');
      }
});

   client.on('ready', () => {
     client.user.setActivity("NoThing",{type: 'WATCHING'});
 });


  client.login(process.env.BOT_TOKEN);
