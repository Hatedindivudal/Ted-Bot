const Discord = require("discord.js");
const ms = require('ms');

module.exports.run = async (bot, message, args) => {
    const fetch = require("node-fetch").default
 
    


   
        fetch(`http://api.ipstack.com/${message.content}?access_key=91fec0a9d1acf992f8ff7d451f1b175b`)
        .then(response => response.json())
        .then(data =>{

            message.reply(data.response)

        })
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