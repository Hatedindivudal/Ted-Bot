const Discord = require("discord.js")
module.exports.run = async (bot, message, args, profileData) => {
    
}

message.channel.send(`Your wallet balance is currently ${profileData.coins}`)



module.exports.config = {
    name: "bal",
    description: "Bans a User",
    usage: "-ban",
    accessableby: "Admins",
    aliases: []
}


