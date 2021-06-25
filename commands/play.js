const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    const DisTube = require('distube');

const music = args.join(" ");
    distube.play(message, music);

    


}

module.exports.config = {
    name: "play",
    description: "Says hi",
    usage: "-hi",
    accessableby: "Members",
    aliases: ['hi', 'hi']



}