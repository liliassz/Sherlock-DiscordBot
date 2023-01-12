const Discord = require("discord.js");
const c = require("../../config.json");
const moment = require("moment");

exports.run = (bot, message, args) => {

    let bicon = bot.user.displayAvatarURL;
    let usuario = message.guild.member(message.mentions.users.first() || message.author);

    let user;
    if (message.mentions.users.first()) {
        user = message.mentions.users.first();
    } else {
        user = message.author;
    }

    let statusmebro;
    if(user.presence.status === "dnd") statusmebro = `Ocupado`;
    if(user.presence.status === "idle") statusmebro = `Ausente`;
    if(user.presence.status === "stream") statusmebro = `Transmitindo`;
    if(user.presence.status === "offline") statusmebro = `Offline`;
    if(user.presence.status === "online") statusmebro = `Online`;

    let botinfo;
    if(user.bot === true) botinfo = "Sim";
    if(user.bot === false) botinfo = "Não";

    let roles = usuario.roles.map(r => `<@&${r.id}>`).slice(1).join('**,** ');
    if(roles.length === 0) roles = 'Nenhum';

    let member = message.guild.member(user);

    const info = new Discord.RichEmbed()
        .setDescription(`${message.author.tag} mencione o membro que quer ver as informações.`)
        .setColor(c.cot)

    if (!user)
            return message.channel.send(info);

               const embed = new Discord.RichEmbed()
                   .setDescription(`${message.author.username}, carregando informações...`)
                   .setColor(c.cor)

               message.channel.send(embed).then((m) => {

                setTimeout(() => {

                const info = new Discord.RichEmbed()

                .setAuthor(user.username, user.avatarURL)
                .setDescription(`As informações do usuário ${user} foram enviadas logo abaixo.`)
                .addField(`Nome:`, `${user.username}`, true)
                .addField(`Apelido:`, `${member.nickname !== null ? `${member.nickname}` : 'Nenhum'}`, true)
                .addField(`Discriminator:`, `#${user.discriminator}`, true)
                .addField(`ID:`, `${user.id}`, true)
                .addField(`Última mensagem:`, `${member.lastMessage ? `${member.lastMessage}` : 'Nenhuma'}`, true)
                .addField(`Conta criada:`, `${moment(user.createdAt).format('LL')}`, true)
                .addField(`Entrou no servidor:`, `${moment(member.joinedAt).format('LL')}`, true)
                .addField(`Status:`, `${statusmebro}`, true)
                .addField(`Robô:`, `${botinfo}`, true)
                .addField(`Cargos:`, roles, true)
                .setColor(c.cor)
                .setThumbnail(bicon)
            m.edit(info);

        }, 6000);
    })
}

exports.help = {
    name: "userinfo",
    aliases: ["info"]
}