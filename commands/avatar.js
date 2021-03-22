const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {
    const member = message.mentions.members.first();

    message.channel.send(message.author.displayAvatarURL)
   








}
module.exports.config = {
    name: "avatar",
    description: "Says hi",
    usage: "-hi",
    accessableby: "Members",
    aliases: ['hi', 'hi']
}
