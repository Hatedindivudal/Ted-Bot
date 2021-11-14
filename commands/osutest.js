const Discord = require("discord.js");
const ms = require('ms');

module.exports.run = async (bot, message, args) => {
    const url = new URL(
        "https://osu.ppy.sh/api/v2/me/osu"
    );
    let headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
    };
    
    fetch(url, {
        method: "GET",
        headers,
        Authorization: 'Bearer '
    }).then(response => response.json());
}



module.exports.config = {
    name: "osu",
    description: "Pulls random memes from r/meme r/memes and r/dankmemes Some memes will not load i am not sure why it is an issue",
    usage: "-",
    accessableby: "Members",
    aliases: []
}

