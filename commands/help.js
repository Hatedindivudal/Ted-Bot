

const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {    const embed = new Discord.MessageEmbed()
      .setTitle("Commands:")
      .addField(
        "=kick",
        "Kicks a mentioned user"
      )
      .addField(
        "=ban",
        "Description: This "
      )
      .addField(
        "=avatar",
        "Description: Sends a picture of your avatar. (Work in progress, not done yet.)"
      ) 
      .addField(
        "=ping",
        "Description: Pretty self-explanatory? Ain't it?"
      )
      .addField(
        "=purge",
        "Description: This command deletes messages (Work in progress, not done yet.)"
      )
      .addField(
        "=say",
        "Description: This command is for fun use. Do something like =say You suck and the bot will be the one replying."
      )
      .addField(
        "=whois",
        "Description: This command will give you information on a user."
      );
    message.author.send(embed);
    message.channel.send('Help commands sent in dms!');
    };