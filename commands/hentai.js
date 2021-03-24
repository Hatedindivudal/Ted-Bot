const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if(!message.channel.nsfw) return;



const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

const image = await nsfw.hentai();
const embed = new Discord.MessageEmbed()
    .setTitle(`Here you go!`)
    .setColor("GREEN")
    .setImage(image);
message.channel.send(embed).catch(error => message.reply(`Sorry, I couldn't kick because of : ${error}`));


}

module.exports.config = {
    name: "hentai",
    description: "",
    usage: ".",
    accessableby: "Members",
    aliases: []
}