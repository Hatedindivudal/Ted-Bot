const Discord = require("discord.js");
const querystring = require('querystring');
module.exports.run = async(bot, message, args, ) => {

const axios = require("axios")
axios.get(`http://ip-api.com/json/${args}`)
.then((res) => {
    const embed = new Discord.MessageEmbed()
    .addField('IP',  `${JSON.stringify(res.data.query).replace(/"/g, '').replace(/}/g, '')}`)
    .addField('Country',  `${JSON.stringify(res.data.country).replace(/"/g, '').replace(/}/g, '')}`)
    .addField('ISP', `${JSON.stringify(res.data.isp).replace(/"/g, '').replace(/}/g, '')}`)
    .addField('City', `${JSON.stringify(res.data.city).replace(/"/g, '').replace(/}/g, '')}`)
    .addField('Province/State', `${JSON.stringify(res.data.regionName).replace(/"/g, '').replace(/}/g, '')}`)

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