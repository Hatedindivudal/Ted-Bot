
const Discord = require("discord.js")

module.exports = bot => { 
   
    bot.user.setPresence({ activity: { name: 'In devolpment!' }, status: 'dnd' })
    .catch(console.error);
}