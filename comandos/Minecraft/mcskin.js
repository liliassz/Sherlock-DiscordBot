const Discord = require("discord.js");
const c = require("../../config.json");

exports.run = async (bot, message, args) => {
    const player = args[0]
    const mcskin = new Discord.RichEmbed()
        .setColor(c.cor)
        .setTitle(`Aqui está a cabeça de ${player}!`)
        .setURL(`https://mc-heads.net/player/${player}/500`)
        .setImage(`https://mc-heads.net/player/${player}/640`)
    
    message.channel.send(mcskin)
}

exports.help = {
    name: "mcskin",
    aliases: ["skin de minecraft"]
}