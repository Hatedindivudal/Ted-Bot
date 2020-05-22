const Discord = require('discord.js');
const client = new Discord.Client();



const PREFIX = '.';

const embed = new Discord.MessageEmbed()

const fs = require('fs');
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}

const ms = require('ms');

client.on('ready', () => {
    console.log('attepmt #2');

})

client.on('message', message => {


    const usersMap = new Map();
    switch (args[0]) {
    case 'Earth':
    var config = {
        port: 1500,
        subreddits: [
            'earthporn'
        ]
    };
    
    // JSON URL for getting images
    var url = 'https://www.reddit.com/r/' + config.subreddits.join('+') + '.json';
    
    var express = require('express');
    var app     = express();
    var request = require('request');
    var Random  = require('random-js');
    var engine  = Random.engines.mt19937().autoSeed();
  
    // Callback returns image data, false if error
    function getImage(callback) {
        request(url, function(err, res, body) {
            if(err) {
                callback(false);
                return;
            }
            var json = JSON.parse(body);
            var posts = json.data.children;
            var randomPosts = Random.shuffle(engine, posts);
            
            // Go through each post returned by JSON
            var validImage = false;
            for(var i = 0; i < randomPosts.length; i++) {
                var post = randomPosts[i];
                
                // If post is text, skip
                if(typeof post.data.preview === 'undefined') continue;
                
                // Get image data
                var imageData = post.data.preview.images[0].source;
                
                var image = {
                    url   : imageData.url,
                    width : imageData.width,
                    height: imageData.height
                };
                
                validImage = true;
                callback(image);
                
                
                // TODO: Check for image resolution/ratio and skip to next one if requirements aren't met
                break;
            }
            // If not valid image, return false
            if(!validImage) {
                callback(false);
            }
        });
    }
    
    app.get('/', function(req, res) {
        getImage(function(image) {
            if(image) {
                request(image.url).pipe(res);
            } else {
                
                // Fallback iamge if all else fails
                fs.readFile(__dirname + '/default.jpg', function(err, data) {
                    if(!err) {
                        res.writeHead(200, {'Content-Type': 'image/jpeg'});
                        res.end(data, 'binary');
                    } else {
                        res.status(404).send('Something did an uh oh. Try again later.');
                    }
                });
                
            }
        });
    });
    
    app.listen(config.port, function() {
        console.log('Server listening on *:' + config.port);
    })


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
                     
                       if(!message.member.hasPermission('BAN_MEMBERS'))
                       message.channel.send("You do not have Ban perms")
                       const user = message.mentions.users.first();

                        if (user) {
                            const member = message.guild.member(user);

                            if (member) {
                                member.ban({
                                    ression: 'You have been removed from the server'
                                }).then(() => {
                                    message.reply(`${user.tag} Has been removed from the server!`)


                                })
                            } else {
                                message.reply('I Could not find that user inside this server.')


                            }


                        } else {
                            message.reply('I Could not find that user inside this server.')
                            break;
                        }
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
                                    client.commands.get('ping').execute(message, args);
                                    break;

                            
                                case 'website':
                                    message.channel.send('Sorry i do not currently own one please check back later!');
                                    break;
                                case 'info':
                                    if (args[1] === 'version') {
                                        message.channel.send('We are Currently using version 1.0.1');
                                    } else {
                                        message.channel.send('Invalid args')
                                    }
                                    break;
                                {

                                    
                                    if(message.content === 'purge')
                                    if (!args[1]) return message.reply('Error Please define second arg')
                                    if (!message.member.roles.cache.find(r => r.name === "𝒱𝒾βᵉ мσᗪѕ"))
                                        then(message => message.delete({
                                            timeout: 4000
                                        }));
                                    message.channel.bulkDelete(args[1]);
                                    break;
                                }
                                    
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

                        


                
                        }

            
                                    

});



client.login(process.env.token);