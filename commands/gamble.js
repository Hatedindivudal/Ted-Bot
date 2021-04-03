const Discord = require('discord.js');
module.exports.run = async (bot, message, args, profileData) => {
    const profileModel = require("../models/profileSchema");
    const amount = args[0];


    if (amount % 1 != 0 || amount <= 0) return message.channel.send("That isn't a number!");
if(amount > profileData.coins) return message.reply('You dont have that much to gamble!')

let chances = ['Win', 'Lose']
var pick = chances[Math.floor(Math.random() * chances.length)]

if(pick == "Lose"){
await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $inc: {
        coins: -amount,
      },
  }
  );
  return message.channel.send(`You have lost ${amount}$`);
}
if(pick == "Win"){
     await profileModel.findOneAndUpdate(
      {
        userID: message.author.id,
      },
      {
        $inc: {
          coins: amount,
        },
    }
    );
    return message.channel.send(`You have gained ${amount}$`);
  }
}















module.exports.config = {
    name: "gamble",
    description: "Says hi",
    usage: "-hi",
    accessableby: "Members",
    aliases: ['hi', 'hi']



}