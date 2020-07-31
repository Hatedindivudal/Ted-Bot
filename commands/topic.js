const Discord = require('discord.js');
    module.exports.run = async (bot, message, args) => {
    
        message.channel.send('-@Dove#2807')
        let aa = ['you should get a life', 'get a life loser a life ', ' how are you']
        const a = Math.floor(Math.random() * aa.length)

message.channel.send(a)
    
    }
    
    module.exports.config = {
        name: "@Dove#2807",
        description: "Says hi",
        usage: "-hi",
        accessableby: "Members",
        aliases: ['hi', 'hi']
    
    
    
    }