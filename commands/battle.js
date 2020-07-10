const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {




const embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle('**Jazzy Vs Hated!!**')
.addField(
    "**:monkey:- 150 hp -- 300 dps**      **:monkey:- 150 hp -- 300 dps**",
    "***Jazzys retarded animal              Hateds Slave                 ***"
  )                
  .addField(
      "**:bear: - 150 hp -- 20 dps**       :bee: -20 hp -- 50 dps",
      "***Wild bear                         Buzzy Boi               ***"

  ) 
  .addField(
    " :horse: - 50 hp -- 10 dps           :cat2: - 50 hp -- 10 dps",
    
    "***Jazzys trained horse               Hateds dumb pussy              ***"

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