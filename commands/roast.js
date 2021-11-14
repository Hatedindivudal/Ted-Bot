const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {


    const member = message.mentions.members.first();
    if (!member) return message.channel.send('You need to mention someone to roast them!')

var roast = [
    "were you born on the highway? That is where most accidents happen.",
    "i was going to give you a nasty look... but I see you already have one.",
    "remember when I asked for your opinion? Me neither.",
    "everyone's entitled to act stupid once in awhile, but you really abuse the privilege.",
    "i'm trying to see things from your point of view, but I can't get my head that far up my ass.",
    "i haven't seen a fatty like you run that fast since twinkies went on sale for the first time.",
    "two wrongs don't make a right, take your parents as an example.",
    "just looking at you, I now understand why some animals eat their young offspring.",
    "does time actually fly when you're having sex, or was it just one minute after all?",
  
]
    const roasts = roast[Math.floor(Math.random() * roast.length)];
    const embed = new Discord.MessageEmbed()
        .setColor(0x00A2E8)
        .setDescription(member.user.tag + ", " + roasts);
    message.channel.send(embed)
  }

    
module.exports.config = {
    name: "roast",
    description: "Purges Specified amount can not go past 100",
    usage: "-purge",
    accessableby: "Members",
    aliases: ['c', 'purge']
}