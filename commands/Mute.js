const Discord = require('discord.js');
module.exports = {

    name: 'mute',
    description: "Mutes a user for a time",
    execute(message, args) {
        if(!message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS']))
            message.channel.send("You don't have permissions to use that command.");
        else {
            let memberId = message.content.substring(message.content.indexOf(' ')+1);
            let member = message.guild.members.cache.get(args);
            if(member) {
                if(member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS']) && !message.member.hasPermission('ADMINISTRATOR'))
                    message.channel.send("You cannot mute that person!");
                else {
                    let mutedRole = message.guild.roles.cache.get('713185362519916656');
                    if(mutedRole) {
                        member.roles.add(mutedRole);
                        message.channel.send("User was muted.");
                    }
                    else
                        message.channel.send("Muted role not found.");
                }
            }
            else
                message.channel.send("Member not found.");
        }
    },
    aliases: [],
    description: 'Mutes a user'
}

