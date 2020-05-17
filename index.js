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



    switch (args[0]) {
        case 'kick':
            if (!args[1]) message.channel.send('Please Mention the user you are trying to kick')
            if(!message.member.hasPermission('KICK_MEMBERS'))
            const user = message.mentions.users.first();

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
                        if (!args[1]) message.channel.send('Please Mention the user you are trying to ban')
                       if(!message.member.hasPermission('BAN_MEMBERS'))
                       message.channel.send("You do not have Ban perms")
                        const user = message.mentions.users.first();

                        if (user) {
                            const member = message.guild.member(user);

                            if (member) {
                                member.ban({
                                    ression: 'You have been removed from Vibe Squad'
                                }).then(() => {
                                    message.reply(`${user.tag} Has been removed from the server!`)


                                })
                            } else {
                                message.reply('I Could not find that user inside this server.')


                            }


                        } else {
                            message.reply('I Could not find that user inside this server.')
                        }
                    }


                   

                        
                            
   //Whois Command
   if (msg.startsWith(prefix + 'WHOIS')) { //Checks if messages starts with "!whois"
   let memberToFind = message.mentions.members.first(); //Checks for a mentioned user (@eSkuzi#0001)

   if (!memberToFind) { //If no member is mentioned, throw this error
       return message.channel.send('You must mention a member for this command'); //Send message and stop executing code
   }

   let embed = new Discord.RichEmbed()
       .setAuthor(memberToFind.user.tag, memberToFind.user.avatarURL) //This will show the users tag and avatar - there was no need to stringify that text :P
       .addField('Account Created', memberToFind.user.createdAt, true) //Shows when the user was registered
       .addField('Joined this Server', message.guild.members.find('id', memberToFind.id).joinedAt, true) //Shows when the user joined the guild
       .addField('User ID', memberToFind.id, true) //Shows the user ID
       .setColor(0xffffff) //Make the embed white
       .setFooter('Searched User') //Add a footer
       .setTimestamp() //Timestamp the footer

   message.channel.send(embed); //Send the embed we just created
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
                                case 'purge':
                                    if (!args[1]) return message.reply('Error Please define second arg')
                                    if (!message.member.roles.cache.find(r => r.name === "𝒱𝒾βᵉ мσᗪѕ"))
                                        then(message => message.delete({
                                            timeout: 4000
                                        }));
                                    message.channel.bulkDelete(args[1]);
                                    break;
                                case 'Serverinfo':
                                    let embed = new Discord.MessageEmbed()

                                        .setColor('0x#ff0000')
                                        .setTitle('Server Information')
                                        .addField('Current Server', message.guild.name)
                                        .addField('Owner', message.guild.owner)
                                        .addField('Created Date', message.guild.createdAt)
                                        .addField('Member count', message.guild.memberCount)
                                    message.channel.send(embed);
                                    break;
                                    

                                    case 'whois': 


                            }


                                    

});



client.login(process.env.token);