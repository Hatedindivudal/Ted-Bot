

module.exports = bot => { 
   
    bot.user.setPresence({ activity: { name: '!help' }, status: 'online' })
    .catch(console.error);
}