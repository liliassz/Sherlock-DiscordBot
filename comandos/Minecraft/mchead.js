const Discord = require("discord.js");
const c = require("../../config.json");

exports.run = async (bot, message, args) => {
  const player = args[0]
  const mchead = new Discord.RichEmbed()
    .setColor(c.cor)
    .setTitle(`Aqui está a cabeça de ${player}!`)
    .setURL(`https://mc-heads.net/head/${player}/500`)
    .setImage(`https://mc-heads.net/head/${player}/140`)
    
  message.channel.send(mchead);
}

exports.help = {
    name: "mchead",
    aliases: ["cabeça do minecraft"]
}