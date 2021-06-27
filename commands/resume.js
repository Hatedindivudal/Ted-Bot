const Discord = require("discord.js");
const ms = require('ms');

module.exports.run = async (bot, message, args) => {
bot.distube.resume(message)
message.channel.send('Resumed the Queue!')

























}

module.exports.config = {
    name: "resume",
    description: "",
    usage: ".ping",
    accessableby: "Members",
    aliases: []
}