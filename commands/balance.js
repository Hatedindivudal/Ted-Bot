const Discord = require("discord.js")
module.exports.run = async (bot, message, args, profileData) => {
    

const balanceembed = new Discord.MessageEmbed()
.setTitle(`<@${message.author.id}>`)
.addField(`Pocket:`, `${profileData.coins} ${true}`)
message.channel.send(balanceembed);



}


module.exports.config = {
    name: "bal",
    description: "Bans a User",
    usage: "-ban",
    accessableby: "Admins",
    aliases: []
}


