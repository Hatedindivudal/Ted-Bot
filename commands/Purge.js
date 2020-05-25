const Discord = require ("discord.js");


module.exports = {
  name: "purge",
  description: "deletes messages!",
  execute(message, args) {
    const amount = parseInt (args[0]);
    const args = message.content
    .slice(client.config.prefix.length)
    .trim()
    .split(/ +/g);

    if (isNaN(amount)) {
      return message.reply("that doesn't seem to be a valid number.");
    }
    if (isNaN(amount)) {
      return message.reply("that doesn't seem to be a valid number.");
    } else if (amount < 2 || amount > 100) {
      return message.reply("you need to input a number between 2 and 100.");
    }
    if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send("You do not have the perms to do so");
    message.channel.bulkDelete(amount);
  }
};




