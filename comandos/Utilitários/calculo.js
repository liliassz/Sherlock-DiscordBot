const Discord = require("discord.js")

exports.run = (bot, message, args, db) => {
  let emb = {
    title: "OPERADORES",
    description: "`+` : adição\n`-` : subtração\n`/` : divisão\n`*` : multiplicação\n`**` : potência"
  }
 if (args[0] == "operadores") return message.channel.send({embed: emb})
  
  let operadores = [
    "+",
    "-",
    "*",
    "/",
    "**"
    ]
 if (args[0] == null || args[0] == undefined) return message.reply("não foi inserido nenhum número/operador")
 if (!operadores.includes(args[1])) return message.reply("Esse operador é inválido \npara ver os operadores utilize `calculo operadores`")
if (isNaN(args[0]) || isNaN(args[2])) return message.channel.send("`" + args[0] + "` ou `" + args[2] + "` não foi reconhecido como número")
//message.channel.send(eval(args.join(" ")))
  let embed = {
  title: "Aqui está o resultado !!",
  description: eval(args.join(" ")),
  color: 0x696969,
  thumbnail: {
    url: 'https://cdn.discordapp.com/attachments/703620922854342686/708336859209793636/giphy.gif'
  }
}
  message.channel.send({embed: embed})
}

exports.help = {
name: "calculo",
aliases: ["calculadora","calculation", "calculo", "calcular", "cal"]
}