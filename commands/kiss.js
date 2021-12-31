

const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    
    const user = message.author;
    const member = message.mentions.members.first();
    if(!member){
        return message.reply('You must mention the user you want to slap!')
    }
        const axios = require('axios')
        axios.get(`https://www.nekos.life/api/v2/img/les`)
        .then((res) => {
         const embed = new Discord.MessageEmbed()
         .addField(`You gave a kiss!`, `<@${user.id}> kisses ${member}!` )
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


