const Discord = require("discord.js")
module.exports.run = async (bot, message, args, profileData) => {
    

const balanceembed = new Discord.MessageEmbed()
.setTitle(`${message.author.tag}`)
.setDescription(`
**Bank:** ${profileData.bank}
**Pocket** ${profileData.coins}`)
message.channel.send(balanceembed);



}


module.exports.config = {
    name: "bal",
    description: "Bans a User",
    usage: "-ban",
    accessableby: "Admins",
    aliases: []
}


