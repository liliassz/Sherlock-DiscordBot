const Discord = require("discord.js");
const c = require("../../config.json");

exports.run = async (bot, message, args) => {
    let User = message.mentions.users.first();
    if(!User) return message.reply('usuário não encontrado!')

    var list = [
        'https://media2.giphy.com/media/2sXf9PbHcEdE1x059I/giphy.gif',
        'https://media1.tenor.com/images/b98fd0429163120c4caa184816a457de/tenor.gif?itemid=17297614',
        'https://media0.giphy.com/media/3oGRFw7Ypjh6LKFlwQ/source.gif',
        'https://media.tenor.com/images/d894ea3155542ede777f6edf39a5f8ea/tenor.gif',
        'https://images-ext-1.discordapp.net/external/lA6lH6Rp65xbEgUB5tOwyfzpH1MLjNUiywR6grBBAE4/https/media3.giphy.com/media/12GE0iLE7psBxu/source.gif',
        'https://images-ext-1.discordapp.net/external/nGphUdlT5gIMikB5cpCbocNUPraRxhqUu8ST46aPII4/https/pandatoryu.files.wordpress.com/2013/03/one-piece-gif-felizes-de-animemuch-visite-pandatoryu.gif'
    ];
    var rand = list[Math.floor(Math.random() * list.length)];
    let msa = message.author;
    let userand = [
        `${User}`,
        `${msa}`
    ];
    let useralt = userand[Math.floor(Math.random() * userand.length)];
    let embed = new Discord.RichEmbed()
        .setColor(c.cor)
        .setDescription(`:crossed_swords: O ${useralt} venceu a batalha! Como diabos você conseguiu?`)
        .setImage(rand)
        .setFooter("A batalha acabou. ⚔️")
    
    message.channel.send(embed);
}

exports.help = {
    name: "batalhar",
    aliases: ["batalhar"]
}