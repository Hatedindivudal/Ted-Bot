const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if(!message.channel.nsfw) return;

//hey ape can you see this
//we should leave the notes,yeah, LOOL yes, ima put on some music b/ro,I just came to support you!!!
const Discord = require("discord.js");
// wanna have a stroke 
// ill stroke you
//off if i were to ever get hacked
// im going to go to my index file to contiune working on the issue i was having alright?
// come back cunt before i assault you sexually 
//Im note really used to vsc, I only used html on it, where did you go
//good friend
// do you atleast understand the code below? go to lock.jsshe theu
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