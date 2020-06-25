const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports.run = async (bot, message, args) => {
    if(!message.channel.NSFW)
    message.channel.send("This channel is not NSFW")
    const subReddits = ["FiftyFifty", "5050pics", "cursedimages" ]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const img = await randomPuppy(random);

    const embed = new Discord.MessageEmbed()
    .setImage(img)
    .setTitle(`From /r/${random}`)
    .setURL(`http://reddit.com/${random}`)

    message.channel.send(embed);

}

module.exports.config = {
    name: "50/50",
    description: "",
    usage: ".50/50",
    accessableby: "Members",
    aliases: []
}