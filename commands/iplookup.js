const Discord = require("discord.js");
const querystring = require('querystring');
const fetch = require("node-fetch").default
module.exports.run = async (bot, message, args,) => {

    const axios = require("axios")
    axios.get(`https://vpnapi.io/api/${args}?key=0d14f51ea0304c97a34e48a83f82a057`)
    .then((res) => {
        const embed = new Discord.MessageEmbed()
        .addFields(
            {name: 'IP', value: `${JSON.stringify(res.data.ip).replace(/"/g, '')}`, inline: true},
            {name: 'Country', value: `${JSON.stringify(res.data.location.country).replace(/"/g, '')}`, inline: true},
            {name: 'City', value: `${JSON.stringify(res.data.location.city).replace(/"/g, '')}`, inline: true},
            {name: 'Continent', value: `${JSON.stringify(res.data.location.continent).replace(/"/g, '')}`, inline: true},
            {name: 'ISP', value: `${JSON.stringify(res.data.network.autonomous_system_organization).replace(/"/g, '')}`, inline: true},
            {name: 'latitude', value: `${JSON.stringify(res.data.location.latitude).replace(/"/g, '')}`, inline: true },
            {name: 'longitude', value: `${JSON.stringify(res.data.location.longitude).replace(/"/g, '')}`, inline: true},
            
        )
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