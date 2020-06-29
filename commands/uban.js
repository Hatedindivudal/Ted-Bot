
const Discord = require('discord.js');
    
module.exports.run = (bot, message, [id]) => {
    if(!message.member.hasPermission('BAN_MEMBERS'))
    message.channel.send("You do not have Ban perms")

    if (id) {
        message.guild.members.unban(id).then(() => {
            message.reply('✅**Succesful**');
        }).catch((e) => {
            message.reply('❌ **Something went wrong**')
            console.error(e)
        })

    } else {
        message.reply('❌**You need to specify a person**');
    }
}
    
    

    
    
    


    module.exports.config = {
        name: "unban",
        description: "Unban a user from the guild!",
        usage: "!unban",
        accessableby: "Administrators",
        aliases: ["ub", "unbanish"]

    }