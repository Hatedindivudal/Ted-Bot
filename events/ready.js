

module.exports = bot => { 
   
    bot.user.setPresence({ activity: { name: 'Not Done Yet!' }, status: 'dnd' })
    .catch(console.error);
}