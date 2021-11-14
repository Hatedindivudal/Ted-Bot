const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
   
const ship = Math.floor(Math.random() * 100 ) + 1;
const member = message.mentions.members.first();
if(!member) return message.channel.send('Please mention a valid user.');


const Shipembed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(':rainbow_flag: The Gay Machine :rainbow_flag: ')
.setDescription(`:rainbow_flag: ${member} is ${ship}% Gay! :rainbow_flag:  `)
message.channel.send(Shipembed)




    
    
   
    


}

module.exports.config = {
    name: "Howgay",
    description: "Tells mentioned user how gay they or you are fucking loser",
    usage: "-howgay",
    accessableby: "Members",
    aliases: ['gay',]



}