const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {

const number123 = Math.floor(Math.random() * 100 ) + 1;

message.channel.send(number123);




}
   
module.exports.config = {
    name: "randomnumber",
    description: "Purges Specified amount can not go past 100",
    usage: "-purge",
    accessableby: "Members",
    aliases: ['c', 'purge']
}