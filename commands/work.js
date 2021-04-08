const Discord = require('discord.js');

module.exports.run = async (bot, message, args, profileData, ) => {
    const profileModel = require("../models/profileSchema");

    let timeout = 6000000;
const author = messsage.author.id
    if (author !== null && timeout - (Date.now() - author) > 0) {
        
      let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`<a:false:737764891657633814> You have already robbed someone\n\nTry again in ${time.minutes}m ${time.seconds}s `);
        message.channel.send(timeEmbed)
    

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
  }

},
  



module.exports.config = {
    name: "work",
    description: "",
    usage: ".",
    accessableby: "Members",
    aliases: []
}