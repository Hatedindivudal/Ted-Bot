const Discord = require("discord.js");
const axios = require('axios');
module.exports.run = async(bot, message, args) => {
        const api = `http://ip-api.com/json/${args}`


        axios.get(api)
            .then(response => {
                message.channel.send(response.data)

            })

    }
    // no 
module.exports.config = {
    name: "lookup",
    description: "",
    usage: ".ping",
    accessableby: "Members",
    aliases: []
}