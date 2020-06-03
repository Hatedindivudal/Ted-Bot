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
            client.commands.get('kick').execute(message, args)



    }
       

        

      

        
                switch (args[0]) {
                    case 'ban':
                        client.commands.get('ban').execute(message, args)
                }
                    
                   
                switch (args[0]) {
                    case 'warn':
                        client.commands.get('warn').execute(message, args)
                }


                switch (args[0]) {
                    case 'mock':
                        client.commands.get('mock').execute(message, args)

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

                                    

                                    case 'test':
                                        client.commands.get('test').execute(message, args);
                            
                            case 'help':
                                let help = new Discord.MessageEmbed()
                                .setColor('RANDOM')
                                .setTitle('Help')
                                .addField('Kick', 'Kicks a mentioned' )
                                    

                                    
                                    
                                case 'pepe':
                                        client.commands.get('pepe').execute(message, args);
                                        break;

                                    }


                            

                                    
                                            


                                    

                                    
                                    
                                    
                                            switch (args[0]) {
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
                

                            switch (args[0]) {
                                case 'roles':
                                    client.commands.get('roles').execute(message, args)
                                    


                            }

            
                                    

});



client.login(process.env.token);