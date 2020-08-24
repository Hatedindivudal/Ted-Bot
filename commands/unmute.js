const Discord = require("discord.js");
const ms = require('ms');

module.exports.run = async (bot, message, args) => {
    if(message.member.hasPermission('MANAGE_MESSAGES')) {
        var member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
        if(!member) return message.reply('Please Provide a Member to unmute')

        let mainrole = message.guild.roles.cache.find(role => role.name === "Member");
        let role = message.guild.roles.cache.find(role => role.name === "Muted");

        

        if(!member.roles.cache.find(r => r.name === "Muted")) {
        return message.channel.send('That user is not muted!')

        }

        
            member.roles.add(mainrole)
            member.roles.remove(role);
            message.channel.send(`${member.user.tag} has been unmuted!`)
            
        

    } else {
        return message.channel.send('You dont have perms.')
    }

}



module.exports.config = {
    name: "unmute",
    description: "Pulls random memes from r/meme r/memes and r/dankmemes Some memes will not load i am not sure why it is an issue",
    usage: "-",
    accessableby: "Members",
    aliases: []
}

