const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {

const ship = Math.floor(Math.random() * 100 ) + 1;
const member = message.mentions.members.first();

if(!member) return message.channel.send('Please mention a valid user.')

var absiembed = new Discord.MessageEmbed()
.setAuthor('How compatible are you?')
.setDescription(`You and ${member} are 0% Compatible!`)
if(message.author.id == 483262780376481801){
    return message.channel.send(absiembed)
  }
  if(member.user.id === '483262780376481801'){
return message.channel.send(absiembed)
  }
const Shipembed = new Discord.MessageEmbed()
.setAuthor('How compatible are you?')
.setDescription(`You and ${member} are ${ship}% compatible! `)
message.channel.send(Shipembed)





}
   
module.exports.config = {
    name: "ship",
    description: "Purges Specified amount can not go past 100",
    usage: "-purge",
    accessableby: "Members",
    aliases: ['c', 'purge']
}