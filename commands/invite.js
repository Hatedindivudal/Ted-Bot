const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
   
    const embed = new Discord.MessageEmbed()
    .setAuthor('Thanks for inviting my bot!')
    .addField("Click on this", "Add Ted to your server! [Click here]( https://discord.com/api/oauth2/authorize?client_id=822262797022527519&permissions=8&scope=bot)")
    message.channel.send(embed)

    
   
    


}

module.exports.config = {
    name: "invite",
    description: "Sends a bot invite link nothing more.",
    usage: "-invite",
    accessableby: "Members",
    aliases: ['',]



}