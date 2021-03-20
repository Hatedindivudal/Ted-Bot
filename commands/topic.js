const Discord = require('discord.js');
    module.exports.run = async (bot, message, args) => {
    
        let aa = ["if you could have any superpower what would it be?",
        "What is the worst advice you have given?",
        "What is one thing you should never say at a wedding?",
        "What is the weirdest food combination you’ve ever tried?",
        "Did you have an imaginary friend? What was his/her name?",
        "Have you ever had a dream where everyone was in their underwear?",
        "If you could do anything illegal without getting caught, what would you do?"
        
        
    ]

        
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