const Discord = require("discord.js");
const c = require("../../config.json");

exports.run = async (bot, message, args) => {
    let User = message.mentions.users.first();
    if(!User) return message.reply('usuário não encontrado!')
  
  var list = [
    'https://images-ext-2.discordapp.net/external/SYCXVraMtP8KSZtnMyHd7eCt_5pHUH3m5iNOflxvEi8/https/loritta.website/assets/img/actions/kiss/male_x_female/gif_0.gif',
    'https://images-ext-2.discordapp.net/external/RvXJnfsDPx9xo4aJSuwctHWiG7vd9371sY2j0F-Q65k/https/loritta.website/assets/img/actions/kiss/female_x_female/gif_362.gif',
    'https://images-ext-1.discordapp.net/external/-6jmlurYiTKcVzuLaOGj5cJfjObXL8lzgtElu4Rw5Ok/https/loritta.website/assets/img/actions/kiss/male_x_female/gif_294.gif',
    'https://images-ext-1.discordapp.net/external/hGE_15wTREmTzy9bcPJUkLk9ueUjjSHStYRfsBmvxUk/https/loritta.website/assets/img/actions/kiss/male_x_female/gif_289.gif',
    'https://images-ext-1.discordapp.net/external/RwEwaIi6QXRZLTkHYlrVuM62k_IEwfbdj5p2qRaEeII/https/loritta.website/assets/img/actions/kiss/male_x_male/gif_303.gif',
    'https://images-ext-2.discordapp.net/external/i1rKa0jZdn6c9ZhbWUYTD2xo5ve6UapuaR2IaUx6esg/https/loritta.website/assets/img/actions/kiss/male_x_female/gif_288.gif',
    'https://images-ext-1.discordapp.net/external/sHDT0l9qsf3jdqNbIMwIqCNTfr710QA9DGDw8Kcohvo/https/loritta.website/assets/img/actions/kiss/female_x_female/gif_341.gif',
    'https://images-ext-2.discordapp.net/external/4dj3Rc2Gw1KZnJGta7_jYsuX3lPbyNzTOmF5BD1rDSE/https/loritta.website/assets/img/actions/kiss/female_x_female/gif_354.gif',
    'https://images-ext-1.discordapp.net/external/JQvdjKaSzOQfJHBvnOTP1iLRPVh9J-S_Hbvpp_-SW8Y/https/loritta.website/assets/img/actions/kiss/both/gif_284.gif',
    'https://images-ext-1.discordapp.net/external/uOVpbY-YAAD8EAvh1rcTCzs9ywCKtpUTXR48g-rCa9o/https/loritta.website/assets/img/actions/kiss/female_x_female/gif_358.gif',
    'https://images-ext-1.discordapp.net/external/b790vBk2cSgfnovO2TytBJI6_aJmP9HS0YoQ4zMvyk4/https/loritta.website/assets/img/actions/kiss/female_x_male/gif_380.gif',
    'https://images-ext-2.discordapp.net/external/ZEOSM3TjOyDwSJFLuoWK_KEmpVJ8UKakuExwRPDUZoE/https/loritta.website/assets/img/actions/kiss/female_x_female/gif_338.gif',
    'https://images-ext-2.discordapp.net/external/RvXJnfsDPx9xo4aJSuwctHWiG7vd9371sY2j0F-Q65k/https/loritta.website/assets/img/actions/kiss/female_x_female/gif_362.gif',
    'https://images-ext-1.discordapp.net/external/rXtFztRzcriurLxbP2-J-LFspGm0FlLh2059xWkm1cM/https/loritta.website/assets/img/actions/kiss/male_x_male/gif_319.gif',
    'https://images-ext-2.discordapp.net/external/GcbTcohaoDs-1JuJG7tkQG0ScPhw4nQnpgpGg5aIXmE/https/loritta.website/assets/img/actions/kiss/female_x_male/gif_388.gif',
    'https://images-ext-1.discordapp.net/external/2bI5HMYUCHU4W_oYUbEKVomTGZzPpF55NDObyRVHWVY/https/loritta.website/assets/img/actions/kiss/female_x_male/gif_391.gif',
    'https://images-ext-2.discordapp.net/external/kmMB-FH121gt3BGT4kja2_83gMVX8yu8RKaI2XAXOig/https/loritta.website/assets/img/actions/kiss/male_x_male/gif_312.gif',
    'https://images-ext-2.discordapp.net/external/hl7L7X24b85tOOVGGLFoLJOGDaglZEz3PsX1Ev5NULg/https/loritta.website/assets/img/actions/kiss/both/gif_280.gif',
    'https://images-ext-2.discordapp.net/external/kmMB-FH121gt3BGT4kja2_83gMVX8yu8RKaI2XAXOig/https/loritta.website/assets/img/actions/kiss/male_x_male/gif_312.gif',
    'https://images-ext-2.discordapp.net/external/SGAVIxI9IsH7-tdm3XbkVuJUXvaxJppjHlHEzefCouQ/https/loritta.website/assets/img/actions/kiss/female_x_female/gif_366.gif'
  ]
  var rand = list[Math.floor(Math.random() * list.length)];

  let msa = message.author;
  let embed = new Discord.RichEmbed()
  .setDescription(`${msa} beijou o ` + User + "  :flushed:")
  .setColor(c.cor)
  .setImage(rand)
  .setFooter(`O amor é tão lindo... 😍`)
  
  message.channel.send(embed)
}

exports.help = {
    name: "kiss",
    aliases: ["beijar"]
}