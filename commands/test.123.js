const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {


























    let filter = m => m.author.id === message.author.id;
        let q1 = new Discord.MessageCollector(message.channel, filter, {
            max: 1
        })
        message.channel.send('Which Channel Should I Send The Meseage Too?');

        q1.on('collect', async (message, col) => {
            let channel = message.mentions.channels.first();

            message.channel.send('Great! Now what should i say?')
            q1.stop();
            let q2 = new Discord.MessageCollector(message.channel, filter, {
                max: 1
            })
            q2.on('collect', async (message, col) => {
                var embed2 = new Discord.MessageEmbed()
                    .setColor('#add8e6')
                    .setAuthor('Server Rules')
                    .setDescription(`${message.content}`)
                    
               let hi = channel.send(embed2)
               hi.react('✔')

                await message.react('😀');
                message.channel.send(`Its working! go to ${channel} to check your message out!!`)
                q2.stop
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