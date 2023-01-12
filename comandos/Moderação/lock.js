const Discord = require("discord.js");
const c = require("../../config.json");

exports.run = async (bot, message, args) => {
    if(!message.guild.members.get(message.author.id).hasPermission('ADMINISTRATOR')) {
        return message.reply(`você não tem permissão para utilizar esse comando!`)
        }
    var da = message.guild.roles.find("name","@everyone")
    message.channel.overwritePermissions(da, {
        SEND_MESSAGES: false
      })
      message.channel.send(`O canal ${message.channel} foi **desativado** pelo ` + message.author);
}

exports.help = {
    name: "lock",
    aliases: ["chatoff"]
}