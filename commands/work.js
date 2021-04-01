const Discord = require('discord.js');

module.exports.run = async (bot, message, args, profileData, profileModel) => {



    const randomNumber = Math.floor(Math.random() * 500) + 1;
    const response = await profileModel.findOneAndUpdate(
      {
        userID: message.author.id,
      },
      {
        $inc: {
          coins: randomNumber,
        },
    }
    );
    return message.channel.send(`${message.author.username}, you have become a hitman and received ${randomNumber} **coins**`);
  },


  



module.exports.config = {
    name: "work",
    description: "",
    usage: ".",
    accessableby: "Members",
    aliases: []
}