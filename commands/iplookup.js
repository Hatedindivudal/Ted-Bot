const Discord = require("discord.js");


module.exports.run = async(bot, message, args) => {
        const axios = require('axios')
            //what are you doing.
            //when i do kms i'lll leave a note with your discord on it saying its your fualt.


        axios.get(`http://ip-api.com/json/${args}`)
            .then(response => response.json())
            .then(data => {
                message.channel.send(data.response)
            })

    }
    //don';t change anything, i'm applying the changes.


module.exports.config = {
    name: "lookup",
    description: "",
    usage: ".ping",
    accessableby: "Members",
    aliases: []
}