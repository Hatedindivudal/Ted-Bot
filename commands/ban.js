const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) {
        return message.reply("Missing Permissions!").then(m => m.delete(5000));
    }
  

  
  const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

  // Final Check
  if(!member) return message.channel.send('member not found');
  if(member.id === message.author.id) return message.channel.send("You can't ban your self");
  if(!member.bannable) return message.channel.send('not bannable');

  // Reason
  let reason = args.slice(1).join(" ");
  if(!reason) reason = "no reason";

  // dmMessage embed
    let embed2 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('You have been banned!')
    .addField(`You have been banned from ${message.guild.name}`, ` ${reason}`);
    
    try {
    member.send(embed2)
} catch(e) {
console.log(e)
}

    await member.ban({reason: reason}).catch(error => message.channel.send(`Sorry, I coldn't ban because of: ${error}`));

    const bean = new Discord.MessageEmbed()
    .setColor("#00ff00")
    .setTitle(`Ban | ${member.user.tag}`)
    .addField("User", member, true)
    .addField("Moderator", message.member, true)
    .addField("Reason", reason)
    .setTimestamp()

    message.channel.send(bean);
}




module.exports.config = {
    name: "ban",
    description: "Bans a User",
    usage: "-ban",
    accessableby: "Admins",
    aliases: []
}


