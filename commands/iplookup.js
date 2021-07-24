const Discord = require("discord.js");
const axios = require('axios');
const api = "`http://ip-api.com/json/${args}`";
module.exports.run = async(bot, message, args) => {
        const axios = require('axios')
        axios.get(api)
            .then(response => {
                message.channel.send(response)

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