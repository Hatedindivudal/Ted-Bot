const Discord = require("discord.js");
const ms = require('ms');

module.exports.run = async (bot, message, args) => {
    const fetch = require("node-fetch").default
    fetch(`http://ipwhois.app/json/${message.content}`)
    .then(response => response.json())
    .then(data =>{

        message.reply(data.response)

    })





    





}

module.exports.config = {
    name: "lookup",
    description: "",
    usage: ".ping",
    accessableby: "Members",
    aliases: []
}