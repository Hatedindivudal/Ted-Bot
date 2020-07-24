const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    const member = message.mentions.members.first();
    const randomnumber =  Math.floor(Math.random() * 100 ) + 1;

    const embed = new Discord.MessageEmbed()
    .setColor('0x#ff0000')
    .setTitle("testing")
    .addField('You are', `testing a command`)
    message.channel.send(embed);
    


    


}

module.exports.config = {
    name: "howcool",
    description: "Says hi",
    usage: "-hi",
    accessableby: "Members",
    aliases: ['hi', 'hi']



}