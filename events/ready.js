
const Discord = require("discord.js")

module.exports = bot => { 
   
    bot.user.setPresence({ activity: { name: 'Hitler.' }, status: 'dnd' })
    .catch(console.error);
}