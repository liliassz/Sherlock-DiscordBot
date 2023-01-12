const Discord = require("discord.js");
const bot = new Discord.Client();
const c = require("./config.json");
const fs = require("fs");

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./comandos", (err, files) => {
  if(err) console.error(err);
  files.forEach((f, i) => {
      let folder = f.split('.');
      if(folder[1]) return;
      fs.readdir(`./comandos/${f}/`, (err, jsf) => {
          let jsfiles = jsf.filter(f => f.split(".").pop() === "js");
          if(jsfiles.length <= 0 ) {
              return;
          }
      jsfiles.forEach((j, k) => {
              let props = require(`./comandos/${f}/${j}`);
              bot.commands.set(props.help.name, props);
              if(!props.help || !props.help.aliases || props.help.aliases[0] == '') return;
              props.help.aliases.forEach(alias => {
                  bot.aliases.set(alias, props.help.name);
       
              })
      });
      })
  })
});

fs.readdir("./eventos/", (err, files) => {
  if(err) return console.error("ERRO: " + err)

  files.forEach(file => {

  var eventFunction = require(`./eventos/${file}`)
  var eventName = file.split(".")[0]

    bot.on(eventName, (...args) => eventFunction.run(bot, ...args))
  })
});

bot.on('message', async message => {

  if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(c.prefix)) return;

    var messageArray = message.content.split(" ");
    var cmd = messageArray[0].toLowerCase();
    var args = messageArray.slice(1);
      
    try {
    var command = bot.commands.get(cmd.slice(c.prefix.length)) || bot.commands.get(bot.aliases.get(cmd.slice(c.prefix.length)))
    if(command) command.run(bot, message, args)
    } catch (err) {
    console.error("Erro:" + err);
  }
});

bot.login(c.token);