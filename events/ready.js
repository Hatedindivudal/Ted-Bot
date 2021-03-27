
bot.on("message", async message => {
    if(message.channel.type === "dm") return;
  
    bot.user.setPresence({ activity: { name: 'In devolpment!' }, status: 'dnd' })
    .catch(console.error);
    
    
    




    const usersMap = new Map();

    

    if (!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = bot.commands.get(commandName)
    bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if(command) command.run(bot,message,args)


    
})