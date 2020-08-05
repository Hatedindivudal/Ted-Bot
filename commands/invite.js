const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
   
message.channel.send('https://discord.com/oauth2/authorize?client_id=704153409309376562&scope=bot&permissions=8')
    
    
   
    


}

module.exports.config = {
    name: "invite",
    description: "Sends a bot invite link nothing more.",
    usage: "-invite",
    accessableby: "Members",
    aliases: ['',]



}