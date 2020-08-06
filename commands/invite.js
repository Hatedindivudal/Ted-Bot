const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
   
    const embed = new Discord.MessageEmbed()
    .setAuthor('Thanks for inviting my bot!')
    .addField("Click on this", "Add Ted to your server! [Click here]( https://discord.com/oauth2/authorize?client_id=704153409309376562&scope=bot&permissions=8)")
    message.channel.send(embed)

    
   
    


}

module.exports.config = {
    name: "invite",
    description: "Sends a bot invite link nothing more.",
    usage: "-invite",
    accessableby: "Members",
    aliases: ['',]



}