  
        
        const Discord = require('discord.js');
        module.exports.run = async (bot, message, args, profileData) => {
        
        
        
        
        
        
        
        
        const member = message.mentions.members.first();
    
        const axios = require('axios')
        axios.get(`https://www.nekos.life/api/v2/img/feetg`)
        .then((res) => {
         const embed = new Discord.MessageEmbed()
          .setImage(res.data.url) 
          message.channel.send(embed)
        })
        
        
        
    }
        
        module.exports.config = {
            name: "feet",
            description: "Says hi",
            usage: "-hi",
            accessableby: "Members",
            aliases: ['hi', 'hi']
        
        
        
        }