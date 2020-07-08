const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {




const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle('**BATTLE!!**')
.addField('test to see if the bot can send emojis in other servers other then where he got the emoji from', ':monkey:')
message.channel.send(embed)













    
}

module.exports.config = {
    name: "battle",
    description: "Bans a User",
    usage: "-ban",
    accessableby: "Admins",
    aliases: []
}