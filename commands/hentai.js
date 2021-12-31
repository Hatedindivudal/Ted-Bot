  
        
        const Discord = require('discord.js');
        module.exports.run = async (bot, message, args,) => {
        
        
        
        
        
        
        
        
    
        const axios = require('axios')
        axios.get(`https://www.nekos.life/api/v2/img/Random_hentai_gif`)
        .then((res) => {
         const embed = new Discord.MessageEmbed()
          .setImage(res.data.url) 
          message.channel.send(embed)
        })
        
        
    }
        
        
        module.exports.config = {
            name: "hentai",
            description: "Says hi",
            usage: "-hi",
            accessableby: "Members",
            aliases: ['hi', 'hi']
        
        
        
        }