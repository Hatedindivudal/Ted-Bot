const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
const querystring = require('querystring');
client.on('message', async message => {
    if (command === '-lookup') {
        if (!args.length) {
            return message.channel.send('You need to supply a search term!');
        }

        const query = querystring.stringify({ term: args.join(' ') });

        const { list } = await fetch(`http://ip-api.com/json/?${query}`)
            .then(response => response.json());
    }
});
}

module.exports.config = {
    name: "lookup",
    description: "Sends a bot invite link nothing more.",
    usage: "-invite",
    accessableby: "Members",
    aliases: ['',]



}