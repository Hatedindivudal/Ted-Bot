const Discord = require("discord.js");
const ms = require('ms');

module.exports.run = async (bot, message, args) => {
    const fetch = require("node-fetch").default


    


   
        fetch(`http://ip-api.com/json/${message.content}`)
        
        .then(response => response.json())
        
    
            
            console.log(response)

       
            .catch(() =>{
message.channel.send('Im Broken.')
            })

        
    


    





}

module.exports.config = {
    name: "lookup",
    description: "",
    usage: ".ping",
    accessableby: "Members",
    aliases: []
}