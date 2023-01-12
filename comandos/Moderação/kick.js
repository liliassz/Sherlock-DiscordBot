const Discord = require("discord.js");
const c = require("../../config.json");

exports.run = async (bot, message, args, prefix) =>{

    if(!message.member.hasPermission('KICK_MEMBERS'))
    return message.reply(`você não tem permissão para utilizar esse comando!`)

    let comousar = new Discord.RichEmbed()
        .setTitle("Sintaxe Incorreta")
        .setDescription(` \n• Use: kick \`<@user> <motivo>\`\n• Prefixo do Bot: \`${c.prefix}\`\n 󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪`)
        .setThumbnail(bot.user.avatarURL)
        .setColor(c.cor)
    let member = message.mentions.members.first();
    if(!member)
        return message.channel.send(message.author, comousar).then(msg => msg.delete(10000));
     if(!member.bannable) 
        return message.reply("eu não posso expulsar esse usuário! Ele(a) têm um cargo maior.");

    let motivo = args.slice(1).join(' ');
    if(!motivo) motivo = "Nenhum";
  
    await member.kick(`Expulso por: ${message.author.tag} | Motivo: ` + motivo)
    .catch(error => message.reply(`eu não poderia banir por causa de: ${error}`));
      
    const kikado = new Discord.RichEmbed()
        .setTitle(`⚠️ | Um usúario foi expulso.`)
        .addField("Infrator:", member.user.tag, true)
        .addField("ID:", member.id, true)
        .addField("Aplicador:", message.author, true)
        .addField("Infração:", `\`${motivo}\``, true)
        .setColor(c.cor)
        .setThumbnail(bot.user.avatarURL)

    message.channel.send(kikado).catch(O_o=>{});
}

exports.help = {
    name: "kick",
    aliases: [
        'expulsar'
    ]
}