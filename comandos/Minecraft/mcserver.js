const Discord = require("discord.js");
const c = require("../../config.json");
const ping = require("minecraft-server-util");

exports.run = async (bot, message, args) => {
    if(!args[0]) return message.channel.send('Você deve digitar um ip do servidor minecraft')

    ping(args[0], (error, reponse) =>{
        if(error) throw error
        let Embed = new Discord.RichEmbed()
        .setColor(c.cor)
        .setTitle('<:mapa:746183950741012582> Server Status')
        .addField('Server IP', reponse.host)
        .addField('Server Version', reponse.version)
        .addField('Online Players', reponse.onlinePlayers)
        .addField('Max Players', reponse.maxPlayers)
        
        message.channel.send(Embed)
    })
}

exports.help = {
    name: "mcserver",
    aliases: ["mcservers"]
}