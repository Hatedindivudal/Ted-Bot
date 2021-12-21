const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {
 var rps = ["🗿", "📜", "✂️"]
    const m = message.channel.send("Let's play a game of Rock, Paper, Scissors! Please react what you would like to choose with the emojis below!").then((message) => {
      message.react("🗿");
      message.react("📜");
      message.react("✂️");
    });
    const reacted = promptMessage(m, message.author, 30, rps);

    const botChoice = rps[Math.floor(Math.random()*rps.length)];
    const result = getResult(reacted, botChoice);
    m.clearReactions();

    message.channel.send(`You chose ${reacted} and I chose ${botChoice}`);

    function getResult(choice, botChosen) {
        message.reactions.removeAll()
      if(choice === "🗿" && botChoice === "✂️") {
          return message.channel.send("You win! I had fun, let's play again!");
        } else if (choice === "📜" && botChoice === "🗿") {
          return message.channel.send("You win! I had fun, let's play again!");
        } else if (choice === "✂️" && botChoice === "📜"){
          return message.channel.send("You win! I had fun, let's play again!");
        } else if (choice === botChosen) {
          return message.channel.send("It's a tie!");
        } else {
          return message.channel.send("You lost! I had fun, let's play again!");
        }
    }
  },
};
  }

    
module.exports.config = {
    name: "rps",
    description: "Purges Specified amount can not go past 100",
    usage: "-purge",
    accessableby: "Members",
    aliases: ['c', 'purge']
}