const Discord = require('discord.js');
const querystring = require('querystring');
module.exports.run = async(bot, message, args) => {

    axios.get(`http://ip-api.com/json/${args}`)
        .then((res) => {
          console.log(`RES:`, res.data.toString())
        })
        .catch((err) => {
            message.channel.send(err)
        })
    }
module.exports.config = {
    name: "lookup",
    description: "Sends a bot invite link nothing more.",
    usage: "-invite",
    accessableby: "Members",
    aliases: ['', ]



}