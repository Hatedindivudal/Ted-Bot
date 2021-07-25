const Discord = require("discord.js");
const querystring = require('querystring');
module.exports.run = async(bot, message, args, ) => {

const axios = require("axios")
axios.get(`http://ip-api.com/json/${text}`)
.then((res) => {
    const embed = new Discord.MessageEmbed()
    .addField('Country',  `${JSON.stringify(res.data.country)}`)
    
    message.channel.send(embed)
  .catch(err => message.reply(`Something went wrong... ${err}`));
})
    }
module.exports.config = {
    name: "lookup",
    description: "Sends a bot invite link nothing more.",
    usage: "-invite",
    accessableby: "Members",
    aliases: ['', ]



}