const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    













 let embed = new Discord.MessageEmbed()

 .setColor('0x#ff0000')
 .setTitle('Server Information')
 .addField('Current Server', message.guild.name)
 .addField('Owner', message.guild.owner)
 .addField('Created Date', message.guild.createdAt)
 .addField('Member count', message.guild.memberCount)
 .setThumbnail(message.guild.iconURL)
 
message.channel.send(embed);



}

module.exports.config = {
    name: "serverinfo",
    description: "",
    usage: ".serverinfo",
    accessableby: "Members",
    aliases: []
}