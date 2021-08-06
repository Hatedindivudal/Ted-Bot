const Discord = require("discord.js");
const querystring = require('querystring');
const fetch = require("node-fetch").default
module.exports.run = async (bot, message, args,) => {

    const axios = require("axios")
    axios.get(`https://vpnapi.io/api/${args}?key=0d14f51ea0304c97a34e48a83f82a057`)
    .then((res) => {
     console.log(res.data.location)
    })
}

module.exports.config = {
    name: "lookup",
    description: "Sends a bot invite link nothing more.",
    usage: "-invite",
    accessableby: "Members",
    aliases: ['',]



}