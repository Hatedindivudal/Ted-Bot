const Discord = require('discord.js');
const fs = require("fs");
module.exports = {
    name: 'warn',
    description: "Warns a user",
    execute(message, args) {
        
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


}