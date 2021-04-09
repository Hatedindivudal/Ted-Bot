const Discord = require('discord.js');
module.exports.run = async (bot, message, args, profileData) => {
    const profileModel = require("../models/profileSchema");
let faggot = await  id.fetch(`faggot_${message.author.id}`)
let timeout = 10000;
if(faggot !== null && timeout - (Date.now() - faggot) > 0){
    let time = ms(timeout - (Date.now() - faggot));

    return message.channel.send(`Please wait  ${time.seconds}`)

        } else {
            id.set(`faggot_${message.author.id}`, (Date.now()))
    
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
    }
}
module.exports.config = {
    name: "withdraw",
    description: "Says hi",
    usage: "-hi",
    accessableby: "Members",
    aliases: ['hi', 'hi'],




}