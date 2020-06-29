
const Discord = require('discord.js');
    
module.exports.run = (bot, message, args) => {
    if(!message.member.hasPermission('BAN_MEMBERS'))
    message.channel.send("You do not have Ban perms")
    message.guild.members.unban('309996535758979072')
    .then(user => console.log(`Unbanned ${user.username} from ${guild.name}`))
    .catch(console.error);
}
    
    

    
    
    


    module.exports.config = {
        name: "unban",
        description: "Unban a user from the guild!",
        usage: "!unban",
        accessableby: "Administrators",
        aliases: ["ub", "unbanish"]

    }