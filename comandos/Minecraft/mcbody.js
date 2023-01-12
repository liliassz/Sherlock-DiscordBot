const Discord = require("discord.js");
const c = require("../../config.json");

exports.run = async (bot, message, args) => {
    const player = args[0]
    const mcbody = new Discord.RichEmbed()
        .setColor(c.cor)
        .setTitle(`Aqui está a cabeça de ${player}!`)
        .setURL(`https://mc-heads.net/body/${player}/500`)
        .setImage(`https://mc-heads.net/body/${player}/500`)
    
    message.channel.send(mcbody)
}

exports.help = {
    name: "mcbody",
    aliases: ["corpo do minecraft"]
}