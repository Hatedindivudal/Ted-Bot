

const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    
    const user = message.author;
    const member = message.mentions.members.first();
    if(!member) return message.chanel.send('You must mention the user you want to hug! ')
        const axios = require('axios')
        axios.get(`https://www.nekos.life/api/hug`)
        .then((res) => {
         const embed = new Discord.MessageEmbed()
         .addField(`You gave a hug!`, `<@${user.id}> Hugged ${member}!` )
          .setImage(res.data.url) 
          message.channel.send(embed)
        
        })
}

module.exports.config = {
    name: "hug",
    description: "",
    usage: ".",
    accessableby: "Members",
    aliases: []
}


