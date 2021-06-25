const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {

    distube.stop(message);
    message.channel.send("Stopped the music!");


}

module.exports.config = {
    name: "stop",
    description: "Says hi",
    usage: "-hi",
    accessableby: "Members",
    aliases: ['hi', 'hi']



}