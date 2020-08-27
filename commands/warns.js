const Discord = require('discord.js');
    
module.exports.run = async (bot, message, args) => {
const warns = require("../models/warns");
const target = message.mentions.users.first()
if (!target) {
  message.reply('Please specify a user to load the warnings for.')
  return
}

const guildId = message.guild.id
const userId = target.id

  try {
    const results = await warns.findOne({
      guildId,
      userId,
    })

    let reply = `Previous warnings for <@${userId}>:\n\n`

    for (const warning of results.warnings) {
      const { author, timestamp, reason } = warning

      reply += `By ${author} on ${new Date(
        timestamp
      ).toLocaleDateString()} for "${reason}"\n\n`
    }

    message.reply(reply)
  } finally {
    mongoose.connection.close()
  }
}
  
module.exports.config = {
    name: "warns",
    description: "Says hi",
    usage: "-hi",
    accessableby: "Members",
    aliases: ['hi', 'hi']



}
