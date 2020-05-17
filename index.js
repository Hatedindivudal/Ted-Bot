const Discord = require('discord.js');
const client = new Discord.Client();



const PREFIX = '~';

const embed = new Discord.MessageEmbed

const fs = require('fs');

const ms =require('ms');

client.commands = new Discord.Collection();


const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('js'))
for (const file of commandFiles) {
    const command = require(`./commands/${file}`)

    client.commands.set(command.name, command);

}

client.on('ready', () => {
    console.log('attepmt #2');

})

client.on('message', message => {

    if (!message.content.startsWith(PREFIX)) return;
    let args = message.content.substring(PREFIX.length).split(" ");





                            


                                    

});



client.login(process.env.token);