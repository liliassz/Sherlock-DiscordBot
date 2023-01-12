const Discord = require("discord.js");
const c = require("../../config.json");

exports.run = async (bot, message, args) => {
    let usuario = message.mentions.users.first() || message.author;
    let avatar1 = usuario.displayAvatarURL;
    if (avatar1.endsWith(".gif")) {
        avatar1 = `${usuario.displayAvatarURL}?size=2048`
    }
  
    const embed = new Discord.RichEmbed()
    .setTitle("Avatar de " +usuario.username)
    .setColor(c.cor)
    .setDescription(`**Gostaria de baixar? [Clique aqui](${avatar1})**`)
    .setImage(avatar1)
  
    message.channel.send(`${message.author}`)
    message.channel.send(embed) 
}

exports.help = {
    name: "avatar",
    aliases: ["icon"]
}