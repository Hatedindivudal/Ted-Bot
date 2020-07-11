const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {

  const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());












    let embed = new Discord.MessageEmbed()

        .setColor('0x#ff0000')
        .setTitle('Server Information')
        .addField('Current Server', message.guild.name)
        .addField('Owner', message.guild.owner)
        .addField('Created Date', message.guild.createdAt)
        .addField('Member count', message.guild.memberCount)
        .addField('Role Count', `${roles.length} `)

        
        .setThumbnail(message.guild.iconURL)


    message.channel.send(embed);



}

module.exports.config = {
    name: "serverinfo",
    description: "Shows information about the guild",
    usage: ".serverinfo",
    accessableby: "Members",
    aliases: []
}