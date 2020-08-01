const Discord = require('discord.js');
    module.exports.run = async (bot, message, args) => {
    
        let aa = ['If you could have any superpower what would it be?', '', '']
        const a = aa[Math.floor(Math.random()*aa.length)];
message.channel.send(a).then().catch(console.error);
    
    }
    
    module.exports.config = {
        name: "topic",
        description: "Says hi",
        usage: "-hi",
        accessableby: "Members",
        aliases: ['hi', 'hi']
    
    
    
    }