const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {

const ship = Math.floor(Math.random() * 100 ) + 1;
const member = message.mentions.members.first();

if(!member) return message.channel.send('Please mention a valid user.')

const Shipembed = new Discord.MessageEmbed()
.setColor("0x#32CD32")
.setAuthor('How compatible are you?')
.setDescription(`You and ${member} are ${ship}% compatible! `)
message.channel.send(Shipembed);







}
   
module.exports.config = {
    name: "ship",
    description: "Purges Specified amount can not go past 100",
    usage: "-purge",
    accessableby: "Members",
    aliases: ['c', 'purge']
}