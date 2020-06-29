
const Discord = require('discord.js');
    
module.exports.run = async (bot, message, args) => { 

    if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("You can't do that.")

    if(!args[0]) return message.channel.send("Give me a valid ID"); 
    //This if() checks if we typed anything after "!unban"

    let bannedMember;
    try{                                                            
        bannedMember = await bot.users.fetch(args[0])
    }catch(e){
        if(!bannedMember) return message.channel.send("That's not a valid ID")
    }

    //Check if the user is not banned
    try {
            await message.guild.fetchBan(args[0])
        } catch(e){
            message.channel.send('This user is not banned.');
            return;
        }

    

    
    try {
        message.guild.members.unban(bannedMember)
        message.channel.send(`${bannedMember.tag} was readmitted.`)
    } catch(e) {
        console.log(e.message)
    }
}
    
    

    
    
    


    module.exports.config = {
        name: "unban",
        description: "Unban a user from the guild!",
        usage: "!unban",
        accessableby: "Administrators",
        aliases: ["ub", "unbanish"]

    }