const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {
    const xdemb = new Discord.MessageEmbed()
    .setColor("#00ff00")
    .setTitle("Ban Command")
    .addField("Description:", `Ban a member`, true)
    .addField("Usage:", `!ban [user] [reason]`, true)
    .addField("Example:", `!ban @Randomexample#7183`);

    

    if (!message.member.hasPermission("BAN_MEMBERS")) {
        return message.reply("Missing Permissions!").then(m => m.delete(5000));
    }
    const member = message.mentions.members.first();
    if(!member) return message.channel.send(xdemb)
    if(!member.bannable) return message.channel.send("I can't ban this user!");
    if(member) return member.send(embed2);

   


    if(member.id === message.author.id) return message.channel.send("You can't ban your self")

   
    const reason = args.slice(1).join(" ");

    if(!reason) {
        res = "No reason given";
    } else {
        res = reason
    }

    await member.ban(reason).catch(error => message.channel.send(`Sorry, I coldn't ban because of: ${error}`));

    const bean = new Discord.MessageEmbed()
    .setColor("#00ff00")
    .setTitle(`Ban | ${member.user.tag}`)
    .addField("User", member, true)
    .addField("Moderator", message.author, true)
    .addField("Reason", res)
    .setTimestamp()

    message.channel.send(bean);

    let embed2 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('You have been banned!')
    .addField(`You have been banned from ${message.guild.name}`, `For ${reason}`);

}

module.exports.config = {
    name: "ban",
    description: "Bans a User",
    usage: "-ban",
    accessableby: "Admins",
    aliases: []
}


