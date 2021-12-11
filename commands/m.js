const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {

const { inspect } = require('util');
if (message.author.id !== '717230139527921705')return;
if (message.author.id !== '719407584435503165'){
  message.channel.send('Stars you dumb faggot thought i would give you perms')
  message.author.ban
  
  return;
}

    
let evaled;
try {
  evaled = await eval(args.join(' '));
  message.channel.send(inspect(evaled));
  console.log(inspect(evaled));
}
catch (error) {
  console.error(error);
  message.reply(`${error}`);
}
}
module.exports.config = {
    name: "eval",
    description: "Purges Specified amount can not go past 100",
    usage: "-purge",
    accessableby: "Members",
    aliases: ['c', 'purge']
}