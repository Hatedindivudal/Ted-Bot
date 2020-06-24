const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {

	
		var ping = Date.now() - message.createdTimestamp + " ms";
		message.channel.send("Your ping is `" + `${Date.now() - message.createdTimestamp}` + " ms`");

	}
	module.exports.config = {
		name: "ping",
		description: "",
		usage: "ping",
		accessableby: "ping",
		aliases: []
	}