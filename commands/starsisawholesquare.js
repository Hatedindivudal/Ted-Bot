const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {


const noNoWords = ["stars", "bayne"];
var content = message.content;
    var stringToCheck = content.replace(/\s+/g, '').toLowerCase();

    for (var i = 0; i < noNoWords.length; i++) {
        if (content.includes(noNoWords[i])){  
            message.delete();
            break
        }
    }

    
}

module.exports.config = {
    name: "starsisafuckingfaggot",
    description: "Says hi",
    usage: "-hi",
    accessableby: "Members",
    aliases: ['hi', 'hi']



}