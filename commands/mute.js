const Discord = require("discord.js");
const ms = require('ms');

module.exports.run = async (bot, message, args) => {
    if(message.member.hasPermission('MANAGE_MESSAGES')) {
        var member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
        if(!member) return message.reply('Please Provide a Member to TempMute.')

        let mainrole = message.guild.roles.cache.find(role => role.name === "Member");
        let role = message.guild.roles.cache.find(role => role.name === "Muted");

        if (!role) return message.reply("Couldn't find the 'muted' role.")
        if (message.member.roles.highest.position >= member.roles.highest.position) return message.channel.send('That user has a higher role then you!')

        let time = args[1];
        if (!time) {
            return message.reply("You didnt specify a time!");
        }

        member.roles.remove(mainrole)
        member.roles.add(role);

        message.channel.send(`@${member.user.tag} has now been muted for ${ms(ms(time))}`)

        setTimeout( function () {
            member.roles.add(mainrole)
            member.roles.remove(role);
            message.channel.send(`@${member.user.tag} has been unmuted.`)
        }, ms(time));

    } else {
        return message.channel.send('You dont have perms.')
    }

}



module.exports.config = {
    name: "mute",
    description: "Pulls random memes from r/meme r/memes and r/dankmemes Some memes will not load i am not sure why it is an issue",
    usage: "-",
    accessableby: "Members",
    aliases: []
}

