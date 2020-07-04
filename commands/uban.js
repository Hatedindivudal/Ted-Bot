
const Discord = require('discord.js');
    
module.exports.run = async (bot, message, args) => {
   
    
        if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("...")
    
        let bannedMember = await bot.users.fetch(args[0])      
        if(!bannedMember) return message.channel.send("I need an ID")
    
        let reason = args.slice(1).join(" ")
        if(!reason) reason = "..."
    
    
        try {
            message.guild.members.unban(bannedMember, {reason: reason})
            message.channel.send(`${bannedMember.tag} has been unbanned.`)
        } catch(e) {
            console.log(e.message)
        }
    
    }

    
    

    
    
    


    module.exports.config = {
        name: "unban",
        description: "Unban a user from the guild!",
        usage: "!unban",
        accessableby: "Staff",
        aliases: ["ub", "unbanish"]

    }