const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {






 let aa = ['Your mother Loser', 'Did i ask?', 'Please shut the fuck up', 'No one cares', 'Im doing good,']

 const a = aa[Math.floor(Math.random()*aa.length)];
 message.channel.send(a).then().catch(console.error);












}

module.exports.config = {
    name: "hru",
    description: "Kicks a user",
    usage: "-kick",
    accessableby: "Admins, ",
    aliases: []
}

