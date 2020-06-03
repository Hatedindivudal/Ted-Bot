const Discord = require("discord.js")
module.exports = {
    name: 'roles',
    description: "Displays roles",
	execute(message, args) {

    let RoleEmbed = new Discord.MessageEmbed()
    .setTitle('Server Roles')
    .setColor("RANDOM")
    message.channel.send(RoleEmbed);




    }


}