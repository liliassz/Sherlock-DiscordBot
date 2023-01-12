const Discord = require("discord.js");
const c = require("../../config.json");

exports.run = async (bot, message, args) => {
      if (!message.member) return
      
      if(!message.member.hasPermission('MANAGE_CHANNELS'))
      return message.reply(`você não possui permissão para utilizar esse comando!`).then(msg => msg.delete(6000));
    
      var limit = 100
      if (args.length === 1) {
      limit = parseInt(args[0])
      } else {
    
      let comousar = new Discord.RichEmbed()
        
        .setAuthor("Sintaxe Incorreta")
        .setDescription(` 󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪\n• Use: ${c.prefix}clear \`<quantidade>\`\n• Prefixo do Bot: \`${c.prefix}\`\n 󠂪󠂪 󠂪󠂪 󠂪󠂪󠂪 󠂪󠂪 󠂪󠂪`)
        .setThumbnail(bot.user.avatarURL)
        .setColor(c.cor)
        
        if(!args[0]) return message.channel.send(comousar)
          
        return message.reply(comousar)
      }
          /** Verifica se um numero foi passado como argumento. */
          if (!Number.isInteger(limit)) return message.reply(`talvez isso possa ajudá-lo: \`\`\`${process.env.PREFIX}${module.exports.help.usage}\`\`\``)
          /** Então irá aumentar um numero para a mensagem de comando ser apagada junto com as outras. */
          limit++
          /** Limita que o numero de mensagens seja maior que 100 */
          limit = Math.min(limit, 99)
      
          /** Seleciona todas as mensagens conforme o limite */
          message.channel.bulkDelete(limit)
            .then(messages => {
              message.channel.send(`${message.author}, foram apagadas __**${messages.size}**__ mensagens.`)
                .then(message => setTimeout(() => message.delete(), 2000))
      })
    }
      
    exports.help = {
      name: "clear",
      aliases: ["limpar"]
    }