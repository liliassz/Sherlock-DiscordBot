const Discord = require("discord.js");
const c = require("../config.json");

exports.run = async (bot) => {
    console.log(`${bot.user.username} está online!\nAtualmente estou em ${bot.guilds.size} servidores`)
    function botStatus() {
        let status = [
            `.`,
            `..`
        ];
        let rstatus = Math.floor(Math.random() * status.length);

        bot.user.setActivity(status[rstatus], {type: 'STREAMING', url: "https://www.twitch.tv/twitch"});
      };
  setInterval(botStatus, 7000);
}