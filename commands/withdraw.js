const Discord = require('discord.js');
module.exports.run = async (bot, message, args, profileData) => {
    const profileModel = require("../models/profileSchema");

    
        const amount = args[0];
        if (amount % 1 != 0 || amount <= 0) return message.channel.send("That's not a number!");
    
        try {
          if (amount > profileData.bank) return message.channel.send(`You dont have that many coins in your bank!`);
    
          await profileModel.findOneAndUpdate(
            {
              userID: message.author.id,
            },
            {
              $inc: {
                coins: amount,
                bank: -amount,
              },
            }
          );
    
          return message.channel.send(`You withdrew ${amount} of coins into your pocket`);
        } catch (err) {
          console.log(err);
        }
      },
    

module.exports.config = {
    name: "withdraw",
    description: "Says hi",
    usage: "-hi",
    accessableby: "Members",
    aliases: ['hi', 'hi']



}