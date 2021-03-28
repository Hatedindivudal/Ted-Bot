const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {
    

    let member = message.mentions.users.first() || message.author

    let avatar = member.displayAvatarURL({dynamic: true, size: 1024})

        const embed = new Discord.MessageEmbed()
        .setTitle(`${member.username}'s avatar`)
        .setImage(avatar)
        .setColor("RANDOM")

        message.channel.send(embed);
    
   








}
module.exports.config = {
    name: "avatar",
    description: "Says hi",
    usage: "-hi",
    accessableby: "Members",
    aliases: ['av']
}
