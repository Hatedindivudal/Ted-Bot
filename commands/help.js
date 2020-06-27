

const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {    const embed = new Discord.MessageEmbed()
    .setTitle('Commands')
    .setColor("RANDOM")
    .addField('test123', 'fucking simp im testing i said dumbass mf')
    message.author.send(embed);
    message.channel.send('Help commands sent in dms!');
    };