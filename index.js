const Discord = require('discord.js');
const client = new Discord.Client();



const PREFIX = '.';

const embed = new Discord.MessageEmbed();

const fs = require('fs');
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

const ms = require('ms');

client.on('ready', () => {
    console.log('attepmt #2');

})

client.on('message', message => {


    const usersMap = new Map();

    

    if (!message.content.startsWith(PREFIX)) return;
    let args = message.content.substring(PREFIX.length).split(" ");





    

    
    


    switch (args[0]) {
        case 'kick':
            if(!message.member.hasPermission('KICK_MEMBERS'))
            message.channel.send('You do not have the Kick user perms')
            const  user = message.mentions.users.first();
            if (user) {
                const member = message.guild.member(user);

                if (member) {

                    member.kick('You Have Been Removed from the server').then(() => {
                        message.reply(`Sucessfully Kicked ${user.tag}`);
                    }).catch(Err => {
                        message.reply('i was unable to complete that command.')
                        console.log(err);
                    });
                } else {
                    message.reply('I Could not find that user inside this server.')


                }


            } else {
                message.reply('I Could not find that user inside this server.')
            }
        } 
       

        

      

        
                switch (args[0]) {
                    case 'ban':
                        client.commands.get('ban').execute(message, args)
                }
                    
                    if(message.content === 'test'){
                    let newembed = new Discord.MessageEmbed()
                   
                    .setColor('0x#ff0000')
                    .setTitle('Server Information')
                    .addField('Current Server', message.guild.name)
                    .addField('Owner', message.guild.owner)
                    .addField('Created Date', message.guild.createdAt)
                    .addField('Member count', message.guild.memberCount)
                    message.channel.send(newembed)

                    }


                            switch (args[0]) {
                                case 'ping':
                                    client.commands.get('ping').execute(message, args)
                                    break;
                                 
                            }


                                    switch (args[0]) {
                                        case 'mute':
                                           client.commands.get('mute').execute(message, args);
                                           break;
                            
                                    
                                    
                                    
                                
                                case 'Serverinfo':
                                    let embed = new Discord.MessageEmbed()

                                        .setColor('0x#ff0000')
                                        .setTitle('Server Information')
                                        .addField('Current Server', message.guild.name)
                                        .addField('Owner', message.guild.owner)
                                        .addField('Created Date', message.guild.createdAt)
                                        .addField('Member count', message.guild.memberCount)
                                        .setThumbnail(message.guild.iconURL)
                                        
                                    message.channel.send(embed);
                                    break;
                                    
                                    

                        
                            }

                        


                            switch (args[0]) {
                                case 'purge':
                                   client.commands.get('purge').execute(message, args);
                                   break;

                            }
                


            
                                    

});



client.login(process.env.token);