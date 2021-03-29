const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if(!message.channel.nsfw) return;

//hey ape can you see this

const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

const image = await nsfw.pussy();
const embed = new Discord.MessageEmbed()
    .setTitle(`Pussy Image`)
    .setColor("GREEN")
    .setImage(image);
message.channel.send(embed);


}

module.exports.config = {
    name: "pussy",
    description: "",
    usage: ".",
    accessableby: "Members",
    aliases: []
}