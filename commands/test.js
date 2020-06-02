const Discord = require('discord.js');
module.exports = {

name: 'test',
description: "testing command",


execute(message, args) {



    let test = new Discord.MessageEmbed()

        .setColor('0x#ff0000')
        .setTitle('Server Information')
        .addField('Current Server', message.guild.name)
        .addField('Owner', message.guild.owner)
        .addField('Created Date', message.guild.createdAt)
        .addField('Member count', message.guild.memberCount)
        .setThumbnail(message.guild.iconURL)
        
    message.channel.send(test);
    break;

}


}