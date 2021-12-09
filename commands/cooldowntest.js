const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
message.channel.send('Cooldown Test command <@719407584435503165>')
    


}

module.exports.config = {
    name: "Cooldown",
    description: "Says hi",
    usage: "-hi",
    accessableby: "Members",
    aliases: ['hi', 'hi'],
    cooldown: 5,



}