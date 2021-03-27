const Discord = require('discord.js');
const fs = require('fs');

module.exports = (bot, Discord) =>{
const load_dir = (dirs) =>{

    const event_files = fs.readdirSync(`./event/${dirs}`).filter(file => file.endWith('.js'))

    for(const file of event_files){
         const event = require(`../event/${dirs}/${file}`);
         const event_name = file.split('.')[0];
         bot.on(event_name, event.bind(null, Discord, bot))
         ['client',  'guild'].forEach(e => load_dir(e));
    }
}

}