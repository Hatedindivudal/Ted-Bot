const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    let queue = await bot.distube.getQueue(message);

    if(queue){
        bot.distube.stop(message);
        message.channel.send("Stopped the music!");
    }
    if(!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command!')

   


}

module.exports.config = {
    name: "stop",
    description: "Says hi",
    usage: "-hi",
    accessableby: "Members",
    aliases: ['hi', 'hi']



}