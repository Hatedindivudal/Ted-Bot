const Discord = require('discord.js');
module.exports.run = async (bot, message, args, profileData) => {
    const profileModel = require("../models/profileSchema");
    const amount = args[0];

    if(args[0]) return message.reply('Please specify the amount you would like to bet.');

    if (amount % 1 != 0 || amount <= 0) return message.channel.send("That isn't a number!");


let chances = ['Win', 'Lose']
var pick = chances[Math.floor(Math.random() * chances.length)]
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
    return message.channel.send(`You have won ${amount}`);
  }
}
if(pick == "Lose") return message.channel.send("testing for errors")















module.exports.config = {
    name: "gamble",
    description: "Says hi",
    usage: "-hi",
    accessableby: "Members",
    aliases: ['hi', 'hi']



}