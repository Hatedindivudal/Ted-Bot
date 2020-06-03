const Discord = require("discord.js");
module.exports = {
	execute(message, args) {






 if(!message.member.hasPermission('KICK_MEMBERS'))
 message.channel.send('You do not have the Kick user perms')
 const  user = message.mentions.users.first();
 if (user) {
     const member = message.guild.member(user);

     if (member) {

         member.kick('You Have Been Removed from the server').then(() => {
             message.reply(`Sucessfully Kicked ${user.tag}`);
         }).catch(Err => {
             message.reply('i was unable to complete that command.')
             console.log(err);
         });
     } else {
         message.reply('I Could not find that user inside this server.')


     }


 } else {
     message.reply('I Could not find that user inside this server.')
 }
} 


}