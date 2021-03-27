
bot.on("message", async message => {
    if(message.channel.type === "dm") return;

    bot.user.setPresence({ activity: { name: 'In devolpment!' }, status: 'dnd' })
    .catch(console.error);
    
})