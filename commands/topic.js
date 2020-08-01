const Discord = require('discord.js');
    module.exports.run = async (bot, message, args) => {
    
        let aa = ['you should get a life', 'get a life loser a life', 'how are you']
        const a = aa[Math.floor(Math.random()*options.length)];
message.channel.send(a)
    
    }
    
    module.exports.config = {
        name: "topic",
        description: "Says hi",
        usage: "-hi",
        accessableby: "Members",
        aliases: ['hi', 'hi']
    
    
    
    }