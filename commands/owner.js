const Discord = require("discord.js");
const ms = require('ms');

module.exports.run = async (bot, message, args) => {
if(!message.guild.owner) return; 

message.channel.send('hi')


























}

module.exports.config = {
    name: "owner",
    description: "",
    usage: ".ping",
    accessableby: "Members",
    aliases: []
}