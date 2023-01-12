const Discord = require("discord.js");
const c = require("../../config.json");

exports.run = async (bot, message, args) => {
    let User = message.mentions.users.first();
    if(!User) return message.reply('usuário não encontrado!')
  
    var list = [
        'https://images-ext-2.discordapp.net/external/9IVs96vzQMDlE5Tih0PI8aX-xfM-BCZaSW-AUkpnyZY/https/loritta.website/assets/img/actions/slap/female_x_male/gif_209.gif',
        'https://images-ext-1.discordapp.net/external/9WzrmhX70eQcKmzhClheTf9kgVWxymlMbkBcE0yhROY/https/loritta.website/assets/img/actions/slap/male_x_male/gif_194.gif',
        'https://images-ext-1.discordapp.net/external/7hkGKHebq4QE-0NOP-WmxrgoNZPGxPAwSNLHoKvaIYg/https/loritta.website/assets/img/actions/slap/male_x_male/gif_191.gif',
        'https://images-ext-1.discordapp.net/external/OfiheqHWoGKk2uARRJZKHeL-__mEjf32tgzmtnpSfEY/https/loritta.website/assets/img/actions/slap/female_x_female/gif_198.gif',
        'https://images-ext-1.discordapp.net/external/Q535DFU3UysrWzmtNtX7jXOKSkOC92yJe1vfxBcfgao/https/loritta.website/assets/img/actions/slap/female_x_male/gif_217.gif',
        'https://images-ext-1.discordapp.net/external/4zIGNFE65odmzGOHvviIvMCrmOmUhpsSFgomAFRdjds/https/loritta.website/assets/img/actions/slap/male_x_female/gif_187.gif',
        'https://images-ext-1.discordapp.net/external/kq2c4pGkI2ys2SZWOi1MVfl48Kjf_GG_2Fl06W_C_74/https/loritta.website/assets/img/actions/slap/male_x_male/gif_192.gif',
        'https://images-ext-1.discordapp.net/external/7hkGKHebq4QE-0NOP-WmxrgoNZPGxPAwSNLHoKvaIYg/https/loritta.website/assets/img/actions/slap/male_x_male/gif_191.gif',
        'https://images-ext-1.discordapp.net/external/1Z7IjxKbjIQL9ah1M5XJzH1h5JvcGr1OedPi238a_Ms/https/loritta.website/assets/img/actions/slap/both/gif_186.gif',
        'https://images-ext-1.discordapp.net/external/f61id06VgTZ-hychxw75r9OziHmoIxU4ykJYRqG-VHw/https/loritta.website/assets/img/actions/slap/female_x_male/gif_211.gif',
        'https://images-ext-2.discordapp.net/external/K_4bv5RTCziPluit2JKIN4zX9otVkM9RHyPqS7iIrWA/https/loritta.website/assets/img/actions/slap/female_x_male/gif_214.gif'
    ]
    var rand = list[Math.floor(Math.random() * list.length)];
    let msa = message.author;
    let embed = new Discord.RichEmbed()
        .setDescription(`${msa} deu um tapa em ` + User + "  😱")
        .setColor(c.cor)
        .setImage(rand)
        .setFooter(`Quanta crueldade... 😑`)
    
    message.channel.send(embed)
}

exports.help = {
    name: "slap",
    aliases: ["tapa"]
}