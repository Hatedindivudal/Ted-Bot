const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
   
    const number123 = Math.floor(Math.random() * 100 ) + 1;
    const member = message.mentions.members.first()

    const gayembed = new Discord.MessageEmbed()
    .setAuthor(':rainbow_flag: The Gay Machine :rainbow_flag: ')
    .setDescription(`${member} is ${number123}% Lol retard `)
   
    
    const yourself = new Discord.MessageEmbed()
    .setAuthor('The Gay Machine')
    .setDescription(`:rainbow_flag: You are ${number123}% gay :rainbow_flag: `)

    if(!member){
     return message.channel.send(yourself)
     
    }
    if(member) return message.channel.send(gayembed)
    
    
   
    


}

module.exports.config = {
    name: "Howgay",
    description: "Tells mentioned user how gay they or you are fucking loser",
    usage: "-howgay",
    accessableby: "Members",
    aliases: ['hi', 'hi']



}