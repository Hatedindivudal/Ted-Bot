const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {
    const member = message.mentions.members.first();

    const a = new Discord.MessageEmbed()
   .setThumbnail(message.author.displayAvatarURL)
   message.channel.send(a)







}
module.exports.config = {
    name: "avatar",
    description: "Says hi",
    usage: "-hi",
    accessableby: "Members",
    aliases: ['hi', 'hi']
}
