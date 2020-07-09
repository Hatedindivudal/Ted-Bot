const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {




const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle('**BATTLE!!**')
.addField(
    ":cat2:  **- 100 hp -- 70 dps**",
    "***He is overpowered***"
  )                                                                                           
message.channel.send(embed)















    
}

module.exports.config = {
    name: "battle",
    description: "Bans a User",
    usage: "-ban",
    accessableby: "Admins",
    aliases: []
}