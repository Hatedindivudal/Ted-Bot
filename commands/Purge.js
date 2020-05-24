const Discord = require('discord.js');
const amount = parseInt(args[0]);
  module.exports = {

    name: 'purge',
    description: 'deletes messages!',
   execute(message, args) {
    if (isNaN(amount)) {
        return message.reply('that doesn\'t seem to be a valid number.');
    }
if (isNaN(amount)) {
    return message.reply('that doesn\'t seem to be a valid number.');
} else if (amount < 2 || amount > 100) {
    return message.reply('you need to input a number between 2 and 100.');
}
message.channel.bulkDelete(amount);    
   }}