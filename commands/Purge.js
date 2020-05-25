
const Discord = require ("discord.js");

const amount = parseInt (args[0]);
module.exports = {
  name: "purge",
  description: "deletes messages!",
  execute(message, args) {
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




module.exports = (client, message) => {
    // Ignore all bots
    if (message.author.bot) return;
  
    // Ignore messages not starting with the prefix (in config.json)
    if (message.content.indexOf(client.config.prefix) !== 0) return;
  
    // Our standard argument/command name definition.
    const args = message.content
      .slice(client.config.prefix.length)
      .trim()
      .split(/ +/g);
    const command = args.shift().toLowerCase();
  
    // Grab the command data from the client.commands Enmap
    const cmd = client.commands.get(command);
  
    // If that command doesn't exist, silently exit and do nothing
    if (!cmd) return;
  
    // Run the command
   cmd.run(client, message, args);
  };