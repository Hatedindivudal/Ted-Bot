const Discord = require("discord.js");
const ms = require('ms');

module.exports.run = async (bot, message, args) => {
const axios = require('axios')

    


   
        axios.get(`http://ip-api.com/json/${args}`)
        .then((res) => {

          console.log(`RES:`, res.data)
          message.channel.send(`RES:`, res.data)
        })
        .catch((err) => {
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