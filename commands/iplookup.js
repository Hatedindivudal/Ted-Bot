const Discord = require('discord.js');
const querystring = require('querystring');
module.exports.run = async(bot, message, args) => {
const axios = require("axios")
    axios.get(`http://ip-api.com/json/${args}`)
        .then((res) => {
            var dataString = JSON.stringify(response.data);

          message.channel.send(dataString)
          .catch(err => message.reply(`Something went wrong... ${err}`));
        })
       
    }
module.exports.config = {
    name: "lookup",
    description: "Sends a bot invite link nothing more.",
    usage: "-invite",
    accessableby: "Members",
    aliases: ['', ]



}