

const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    

        const axios = require('axios')
        axios.get(`https://www.nekos.life/api/v2/img/kiss`)
        .then((res) => {
         const embed = new Discord.MessageEmbed()
          .setImage(res.data.url) 
          message.channel.send(embed)
        
        })
}

module.exports.config = {
    name: "kiss",
    description: "",
    usage: ".",
    accessableby: "Members",
    aliases: []
}


