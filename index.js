const Discord = require('discord.js');
const client = new Discord.Client();



const PREFIX = '.';

const embed = new Discord.MessageEmbed();





const cheerio = require('cheerio')

const request = require('request')

const validateFlag = f => f === 'true' || f === 'false' || f === 'null';

const IGNORED = new Set([
    // PLACE YOUR CHANNEL IDS HERE
  ]);

  const fs = require('fs');
  client.commands = new Discord.Collection();
   
  const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
  for (const file of commandFiles) {
      const command = require(`./commands/${file}`);
      client.commands.set(command.name, command);
  }
 

const ms = require('ms');

client.on("message", async message => {
    if(message.author.client || message.channel.type === "dm") return;

})

client.on('message', message => {



    const usersMap = new Map();

    

    if (!message.content.startsWith(PREFIX)) return;
    let args = message.content.substring(PREFIX.length).split(" ");
    


    if(!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd.slice(prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(bot,message,args)



   

    
    


                    
               

                

                



                                    


                                    
                                    
                                    

                                    
                                


                            

                                   

                                    

                                    
                                    
                                    
                        
                            

                        


                
                           










client.login(process.env.token)
}) 
