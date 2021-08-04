const Discord = require("discord.js");
const querystring = require('querystring');
const fetch = require("node-fetch").default
module.exports.run = async (bot, message, args,) => {

    const axios = require("axios")
    axios.get(`https://proxycheck.io/v2/${args}?key=84x64h-y0084l-473709-154aq6&vpn=1&asn=1`)
    .then((res) => {
      console.log(res)
           
    })
}

module.exports.config = {
    name: "lookup",
    description: "Sends a bot invite link nothing more.",
    usage: "-invite",
    accessableby: "Members",
    aliases: ['',]



}