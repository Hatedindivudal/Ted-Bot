const Discord = require('discord.js');
 module.exports = {
name: 'purge',
description: 'Deletes messages'
execute(message, args) {
    const args = message.content.split(' ').slice(1); 
    const amount = args.join(' '); 
    
    if (!amount) return msg.reply('You haven\'t given an amount of messages which should be deleted!'); 
    if (isNaN(amount)) return msg.reply('The amount parameter isn`t a number!');
    
    if (amount > 100) return msg.reply('You can`t delete more than 100 messages at once!'); 
    if (amount < 1) return msg.reply('You have to delete at least 1 message!');
    
    await msg.channel.messages.fetch({ limit: amount }).then(messages => { 
        msg.channel.bulkDelete(messages 
    )});

        }

    }