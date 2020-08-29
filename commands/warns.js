const Discord = require('discord.js');
    
module.exports.run = async (bot, message, args) => {
    const warns = require("../models/warns");

    let user = message.mentions.members.first();
    if (!user) return message.channel.send(`No user specified!`);
    warns.find(
      { Guild: message.guild.id, User: user.id },
      async (err, data) => {
        if (err) console.log(err);
        if (!data.length)
          return message.channel.send(
            `${user.user.tag} has not got any warns in this guild!`
          );
        const Embed = new Discord.MessageEmbed()
          .setTitle(`${user.user.tag}'s warns in ${message.guild.name}.. `)
          .setDescription(
            data.map((d) => {
              return d.Warns.map(
                (w, i) =>
                  `${i} - Moderator: ${
                    message.guild.members.cache.get(w.Moderator).user.tag
                  } Reason: ${w.Reason}`
              )
            })
          );
        message.channel.send(Embed);
      }
    );
  }
  
module.exports.config = {
    name: "warns",
    description: "Says hi",
    usage: "-hi",
    accessableby: "Members",
    aliases: ['hi', 'hi']



}