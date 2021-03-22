const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {
    const member = message.mentions.members.first();

    if(!member){
       message.reply(message.author.displayAvatarURL());
    }
    if(member){
       const aa = new Discord.MessageEmbed()
       .setAuthor(member.user.username)
       message.channel.send(aa)
    }
   








}
module.exports.config = {
    name: "avatar",
    description: "Says hi",
    usage: "-hi",
    accessableby: "Members",
    aliases: ['hi', 'hi']
}
