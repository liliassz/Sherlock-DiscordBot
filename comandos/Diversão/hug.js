const Discord = require("discord.js");
const c = require("../../config.json");

exports.run = async (bot, message, args) => {
    let User = message.mentions.users.first();
    if(!User) return message.reply('usuário não encontrado!')
    
    var list = [
        'https://media1.tenor.com/images/bb841fad2c0e549c38d8ae15f4ef1209/tenor.gif?itemid=10307432',
        'https://i.pinimg.com/originals/49/5d/a3/495da3253424973e0658c4ebecc2b1dc.gif',
        'https://i.pinimg.com/originals/3d/59/76/3d59767bee77ee37fda35f5b999cb2e2.gif',
        'https://pa1.narvii.com/6899/6ab302dba5eba23634f513dad0760343abef3832r1-496-280_00.gif',
        'https://i.pinimg.com/originals/6f/f0/9b/6ff09b06893c1f5135e12ea2e4dcb6a4.gif',
        'https://gifman.net/wp-content/uploads/2019/06/ursinhos-fofos-coracoes.gif',
        'https://media.tenor.com/images/afbc39fcc4cbe67d9622f657d60d41cf/tenor.gif',
        'https://media.giphy.com/media/42YlR8u9gV5Cw/giphy.gif'
    ];
    var rand = list[Math.floor(Math.random() * list.length)];

    let msa = message.author;
    let embed = new Discord.RichEmbed()
    .setDescription(`${msa} abraçou o ` + User + "  :flushed:")
    .setColor(c.cor)
    .setImage(rand)
    .setFooter(`É muito bom ter amigos! 😊`)
    
    message.channel.send(embed);

}

exports.help = {
    name: "hug",
    aliases: ["abraço"]
}