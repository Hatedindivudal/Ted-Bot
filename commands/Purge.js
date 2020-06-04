const Discord = require("discord.js");

module.exports = {
    name: 'purge',
    description: "Deletes a specified amount of numbers",
    execute(message, args) {
  if(args[0] == "help"){
    let helpembxd = new Discord.MessageEmbed()
    .setColor("#00ff00")
    .addField("clear Command", "Usage: !Clear <amount>")

    message.channel.send(helpembxd);
    return;
  } 

  message.delete()

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You don't have premssions to do that!");
  if(!args[0]) return message.channel.send("Please enter a number of messages to clear! `Usage: !clear <amount>`");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`**__Cleared ${args[0]} messages.__**`).then(msg => msg.delete(2000));
});


}


  
}