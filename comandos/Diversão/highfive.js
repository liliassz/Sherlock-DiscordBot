const Discord = require("discord.js");
const c = require("../../config.json");

exports.run = async (bot, message, args) => {
    let User = message.mentions.users.first();
    if(!User) return message.reply('usuário não encontrado!')

    var list = [
        'https://media1.tenor.com/images/7b1f06eac73c36721912edcaacddf666/tenor.gif?itemid=10559431',
        'https://media.tenor.co/videos/a4e1daf77c3c5278166a1dea95aa40c5/mp4',
        'https://thumbs.gfycat.com/BreakableMessyHarrierhawk-size_restricted.gif',
        'https://lh6.googleusercontent.com/hIRp_xCGjt6x5H5GSu9odKA9WPagzrMYPtT-Ow-Nte0AeHoMY4MUTlnxrZkJK248JAqNiBVi_9iaU3eYS2bWXtcdJFjsnrAV8i2H_iN5pjWWHDN6djKm2E-h3MQMUvM2DkoO3M7e',
        'https://25.media.tumblr.com/b0b33a1a6d1ea4dc25a5160f29d37b7b/tumblr_mt4r5oDhu81sqaw4ao1_400.gif',
        'https://68.media.tumblr.com/4bf533322777242924727977936e6c28/tumblr_n04birgZxv1rl376ro1_500.gif',
        'https://media1.tenor.com/images/aed08ae3d802b0de9791057e2dadf7a6/tenor.gif?itemid=9596045',
        'https://pa1.narvii.com/5584/8560feb85ee07e6d9443c49f06620d57ddba6f3b_hq.gif'
    ];
    var rand = list[Math.floor(Math.random() * list.length)];

    let msa = message.author;
    let embed = new Discord.RichEmbed()
        .setDescription(`Hey ${User}, toca aqui!`)
        .setColor(c.cor)
        .setImage(rand)
        .setFooter("Tamo junto! 😎")

    message.channel.send(embed)
}

exports.help = {
    name: "highfive",
    aliases: ["toca aqui"]
}