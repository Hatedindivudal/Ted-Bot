const Discord = require('discord.js');
module.exports.run = async (bot, message, args, profileData) => {
    const profileModel = require("../models/profileSchema");

    const amount = args[0];
    if (amount % 1 != 0 || amount <= 0) return message.channel.send("That isn't a number!");
    try {
      if (amount > profileData.coins) return message.channel.send(`You don't have that many coins!`);
      await profileModel.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            coins: -amount,
            bank: amount,
          },
        }
      );

      return message.channel.send(`You deposited ${amount} of coins into your bank`);
    } catch (err) {
      console.log(err);
    }
  },




module.exports.config = {
    name: "deposit",
    description: "Says hi",
    usage: "-hi",
    accessableby: "Members",
    aliases: ['hi', 'hi']



}