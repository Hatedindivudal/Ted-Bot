const Discord = require('discord.js');
const querystring = require('querystring');
module.exports.run = async(bot, message, args) => {
const axios = require("axios")
let ipsearch = async ()  => {
    
let response = axios.get(`http://ip-api.com/json/${args}`)
let info1 =  response.data
return info1
}
let poop = await ipsearch();
console.log(poop)
        message.channel.send(info1)
}
module.exports.config = {
    name: "lookup",
    description: "Sends a bot invite link nothing more.",
    usage: "-invite",
    accessableby: "Members",
    aliases: ['', ]



}