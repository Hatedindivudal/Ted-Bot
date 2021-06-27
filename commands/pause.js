const Discord = require("discord.js");
const ms = require('ms');

module.exports.run = async (bot, message, args) => {
bot.distube.pause(message)
message.channel.send('Paused the Queue!')

























}

module.exports.config = {
    name: "pause",
    description: "",
    usage: ".ping",
    accessableby: "Members",
    aliases: []
}