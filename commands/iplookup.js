const Discord = require("discord.js");
const ms = require('ms');

module.exports.run = async (bot, message, args) => {
    const fetch = require("node-fetch").default


    


   
        fetch(`http://ip-api.com/json/${message.content}`)
        
        .then(hostname => hostname.json())
        
        .then(data =>{
            
            message.reply(data.hostname)

        })
            .catch(() =>{
message.channel.send(err)
            })

        
    


    





}

module.exports.config = {
    name: "lookup",
    description: "",
    usage: ".ping",
    accessableby: "Members",
    aliases: []
}