const Discord = require("discord.js");
module.exports = {
    name: 'kick',
    description: "Kicks Mentioned user.",
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
             message.reply('That user has a role higher then yours! get better skrub')
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