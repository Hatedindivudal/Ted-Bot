const Discord = require('discord.js');
const fs = require("fs");
module.exports.run = async (bot, message, args) => {
     const reason = args.slice(1).join(" ");

    
  let user = message.mentions.users.first();
  if (!user) return message.channel.send(`You did not mention a user!`);
  if (!reason)
    return message.channel.send(`You did not specify a reason!`);
  warns.findOne(
    { Guild: message.guild.id, User: user.id },
    async (err, data) => {
      if (err) console.log(err);
      if (!data) {
        let newWarns = new warns({
          User: user.id,
          Guild: message.guild.id,
          Warns: [
            {
              Moderator: message.author.id,
              Reason: args.slice(1).join(" "),
            },
          ],
        });
        newWarns.save();
        message.channel.send(
          `${user.tag} has been warned with the reason of ${
            reason}. They now have 1 warn.`
        );
      } else {
        data.Warns.unshift({
          Moderator: message.author.id,
          Reason: reason,
        });
        data.save();
        message.channel.send(
          `${user.tag} has been warned with the reason of ${reason}
            .join(" ")}. They know have ${data.Warns.length} warns.`
        );
      }
    }
  );
},


 
module.exports.config = {
  name: "warn",
  description: "",
  usage: ".warn",
  accessableby: "Members",
  aliases: []
}
