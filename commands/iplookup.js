const Discord = require("discord.js");
const querystring = require('querystring');
const fetch = require("node-fetch").default
module.exports.run = async (bot, message, args,) => {

    const axios = require("axios")
    axios.get(`https://vpnapi.io/api/${args}?key=0d14f51ea0304c97a34e48a83f82a057`)
    .then((res) => {
        const embed = new Discord.MessageEmbed()
        .addTitle('')
        .addFields(
            {name: 'IP', value: `${JSON.stringify(res.data.ip)}`, inline: true},
            {name: 'Country', value: `${JSON.stringify(res.data.location.country).replace(/"/g, '').replace(/}/g, '')}`, inline: true},
            {name: 'City', value: `${JSON.stringify(res.data.location.city).replace(/"/g, '').replace(/}/g, '')}`, inline: true},
            {name: 'Continent', value: `${JSON.stringify(res.data.location.continent).replace(/"/g, '').replace(/}/g, '')}`, inline: true},
            {name: 'ISP', value: `${JSON.stringify(res.data.network.autonomous_system_organization).replace(/"/g, '').replace(/}/g, '')}`, inline: true},
            
        )
        .setThumbnail('https://cdn.discordapp.com/attachments/869064794764873731/873488737609322496/3941-anime-aesthetic.gif')
    message.channel.send(embed)
    })
}

module.exports.config = {
    name: "lookup",
    description: "Sends a bot invite link nothing more.",
    usage: "-invite",
    accessableby: "Members",
    aliases: ['',]



}