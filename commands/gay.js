const Discord = require("discord.js")
module.exports.run = async(bot, message, args) => {
    for (let i = 0; i < 10; i++) {
        message.channel.send("HatedIndividual is Gay")
    }



}
module.exports.config = {
    name: "fuckingdelete",
    description: "",
    usage: "?help",
    accessableby: "Members",
    aliases: []
}