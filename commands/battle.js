const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {




const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle('**BATTLE!!**')
.addField(
    ":  **:monkey:- 150 hp -- 300 dps**      **:monkey:- 150 hp -- 300 dps**",
    "***He is overpowered***"
  )                
  .addField(
      "**:bear: - 150 hp -- 20 dps**",
      "***bruh everything else is insane but bear like tf***"

  ) 
  .addField(
    " :horse: - 50 hp -- 10 dps           :horse: - 50 hp -- 10 dps",
    
    "***man what the fuck ***"

)                                                                              
message.channel.send(embed)















    
}

module.exports.config = {
    name: "battle",
    description: "Bans a User",
    usage: "-ban",
    accessableby: "Admins",
    aliases: []
}