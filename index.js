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

client.on('ready', () => {
    console.log('attepmt #2');
    client.user.setActivity('Testing 123', { type: 'WATCHING'})

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
                    case '50/50':
                        client.commands.get('FiftyFifty').execute(message, args)

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
                            break;
                            

                                    
                                    case 'bye':
                                        message.channel.setName('Noodles')
                                        break;
                                    

                                    
                                    
                                case 'pepe':
                                        client.commands.get('pepe').execute(message, args);
                                        break;

                                    }


                            

                                    
                                    switch (args[0]) {
                                        case 'whois':
                                            client.commands.get('whois').execute(message, args)



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
                                case 'help':
                                   client.commands.get('help').execute(message, args);
                                   break;

                            }
                
                            switch (args[0]) {
                                case 'lockdown':
                                    client.commands.get('lockdown').execute(message, args);
                            } 


   switch (args[0]) {
        case 'search':
        image(message);
 
        break;
    }
 
});
 
function image(message){
    let args = message.content.slice(PREFIX.length).split(" ");
    if(!args[0]) return message.channel.send("Please enter a number of messages to clear! `Usage: !clear <amount>`");

    var search  = args.toString();
    
    var options = {
        url: "http://results.dogpile.com/serp?qc=images&q=" + search,
        method: "GET",
        headers: {
            "Accept": "text/html",
            "User-Agent": "Chrome"
        }
    };



 
    request(options, function(error, response, responseBody) {
        if (error) {
            return;
        }
 
 
        $ = cheerio.load(responseBody);
 
 
        var links = $(".image a.link");
 
        var urls = new Array(links.length).fill(0).map((v, i) => links.eq(i).attr("href"));
       
        console.log(urls);
 
        if (!urls.length) {
           
            return;
        }
 
        // Send result
        message.channel.send( urls[Math.floor(Math.random() * urls.length)]);
    });

    
}










client.login(process.env.token);