const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
   

const music = args.join(" ");
    bot.distube.play(message, music);

    


}

module.exports.config = {
    name: "play",
    description: "Says hi",
    usage: "-hi",
    accessableby: "Members",
    aliases: ['hi', 'hi']



}