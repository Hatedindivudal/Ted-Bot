const Discord = require("discord.js")
module.exports.run = async (bot, message, args, profileData) => {
    

const balanceembed = new Discord.MessageEmbed()
.setDescription('hi test', 'hitest')
message.channel.send(balanceembed);



}


module.exports.config = {
    name: "bal",
    description: "Bans a User",
    usage: "-ban",
    accessableby: "Admins",
    aliases: []
}


