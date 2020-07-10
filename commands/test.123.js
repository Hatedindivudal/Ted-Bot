const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {


























    let filter = m => m.author.id === message.author.id;
    let q1 = new Discord.MessageCollector(message.channel, filter, {
        max: 1
    })
    message.channel.send('Which Channel you want me to send');

    q1.on('collect', async (message, col) => {
        let channel = message.mentions.channels.first();

        message.channel.send('What is the message you want to send in there?')
        q1.stop();
        let q2 = new Discord.MessageCollector(message.channel, filter, {
            max: 1
        })
        q2.on('collect', async (message, col) => {
            channel.send(message.content);
            await message.react('😀');
            message.channel.send(`Its working! go to ${channel} to check your message out!!`)
            q2.stop();
        })
    })








}









module.exports.config = {
    name: "test",
    description: "",
    usage: ".test",
    accessableby: "Members",
    aliases: []
}