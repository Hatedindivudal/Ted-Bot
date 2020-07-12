const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {





    if (message.content.toLowerCase() === '-test3') {
        message.channel.send('hahaha fuck you retard im testing something').catch(err => message.reply(`Something went wrong... ${err}`));









    }








}






module.exports.config = {
    name: "purge",
    description: "Purges Specified amount can not go past 100",
    usage: "-purge",
    accessableby: "Members",
    aliases: ['c', 'purge']



}