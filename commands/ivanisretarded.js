const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {
    

    let cutie = message.mentions.users.first() || message.author

if(message.mentions.users.has(message.guild.ownerID)){
    message.author.ban()
}

   








}
module.exports.config = {
    name: "avatar",
    description: "Says hi",
    usage: "-hi",
    accessableby: "Members",
    aliases: ['av']
}
