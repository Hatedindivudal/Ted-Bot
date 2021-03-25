const Discord = require('discord.js');
const fs = require("fs");


module.exports.run = async (bot, message, args) => {
  const punishments = require('../models/mod');
  const mongoose = require('mongoose');


  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);
  if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    return message.reply("You are not allowed to warn members!")
}

if(message.author.id === member.id) return;

let reason = args.slice(1).join(" ")

if(!reason) return message.channel.send('NO REASON!')

let data = await punishments.findOne({
  GuildID: message.guild.id,
  UserID: member.id
});
if(data) {
  data.Punishments.unshift({
      PunishType: 'Warn',
      Moderator: message.author.id,
      Reason: reason,
  });
  data.save();

  message.channel.send(`warned ${member} for \`${reason}\``)
} else if (!data) {
  let newData = new punishments({
      GuildID: message.guild.id,
      UserID: member.id,
      Punishments: [{
          PunishType: 'Warn',
          Moderator: message.author.id,
          Reason: reason,
      }, ],
  });
  newData.save();

  message.channel.send(`warned ${member} for \`${reason}\``)
}


}

  












 
module.exports.config = {
  name: "warn",
  description: "",
  usage: ".warn",
  accessableby: "Members",
  aliases: []
}
