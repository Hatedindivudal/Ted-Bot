const Discord = require('discord.js');
    module.exports = {

      

        execute(message, args) {
      
        if(message.content === 'sdada')
            

            if (!args[1]) return message.reply('Error Please define second arg')
            
            if(!message.member.hasPermission('MANAGE_MESSAGES'))
            message.channel.send(You do not have the perms to do so)
            message.channel.bulkDelete(args[1]);
            break; 
            




            },



    }


