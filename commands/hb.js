  
        
        const Discord = require('discord.js');
        module.exports.run = async (bot, message, args, profileData) => {
        }
        
        
        
        
        
        
        
    
        const axios = require('axios')
        axios.get(`https://www.nekos.life/api/v2/img/boobs`)
        .then((res) => {
         const embed = new Discord.MessageEmbed()
          .setImage(res.data.url) 
          message.channel.send(embed)
        })
        
        
        
        
        
        module.exports.config = {
            name: "hb",
            description: "Says hi",
            usage: "-hi",
            accessableby: "Members",
            aliases: ['hi', 'hi']
        
        
        
        }