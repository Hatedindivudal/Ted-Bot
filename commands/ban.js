const Discord = require('discord.js');  
module.exports.run = async (bot, message, args) => {

                     if(!message.member.hasPermission('BAN_MEMBERS'))
                       message.channel.send("You do not have Ban perms")
                       if (!<banMember>.bannable) return;

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
                            
                        }
                    }

                

                module.exports.config = {
                    name: "ban",
                    description: "",
                    usage: ".ban",
                    accessableby: "Members",
                    aliases: []
                }
