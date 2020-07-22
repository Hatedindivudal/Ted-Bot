const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {

    message.channel.send('Hello')


}

module.exports.config = {
    name: "hi",
    description: "Says hi",
    usage: "-hi",
    accessableby: "Members",
    aliases: ['hi', 'hi']



}