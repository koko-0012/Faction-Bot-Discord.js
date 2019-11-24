const { RichEmbed } = require('discord.js');


const config = require ("../config.json");
const mysql = require('mysql');
const connection = mysql.createConnection(config)



module.exports = {
  config: {
      name: "ftop",
      aliases: [],
  },
run: async (bot, message, args, connection) => {
connection.query('SELECT * FROM data ORDER BY TotalWorth DESC', function (err, data) {
    if (err) return console.error(err);
    if (data.length > 9) {

        let top1 = data[0].FactionName
        let top2 = data[1].FactionName
        let top3 = data[2].FactionName
        let top4 = data[3].FactionName
        let top5 = data[4].FactionName
        let top6 = data[5].FactionName
        let top7 = data[6].FactionName
        let top8 = data[7].FactionName
        let top9 = data[8].FactionName
        let top10 = data[9].FactionName

        let worth1 = data[0].TotalWorth
        let worth2 = data[1].TotalWorth
        let worth3 = data[2].TotalWorth
        let worth4 = data[3].TotalWorth
        let worth5 = data[4].TotalWorth
        let worth6 = data[5].TotalWorth
        let worth7 = data[6].TotalWorth
        let worth8 = data[7].TotalWorth
        let worth9 = data[8].TotalWorth
        let worth10 = data[9].TotalWorth

        let Done = new RichEmbed()
        .setColor(`#8A2BE2`)
        .setTitle(":newspaper: **Faction TOP**")
        .addField("**Top 1**", "Faction: " + "``" + top1 + "  " + "``" + " Worth: " + "``" + worth1 + "``")
        .addField("**Top 2**", "Faction: " + "``" + top2 + "  " + "``" + " Worth: " + "``" + worth2 + "``")
        .addField("**Top 3**", "Faction: " + "``" + top3 + "  " + "``" + " Worth: " + "``" + worth3 + "``")
        .addField("**Top 4**", "Faction: " + "``" + top4 + "  " + "``" + " Worth: " + "``" + worth4 + "``")
        .addField("**Top 5**", "Faction: " + "``" + top5 + "  " + "``" + " Worth: " + "``" + worth5 + "``")
        .addField("**Top 6**", "Faction: " + "``" + top6 + "  " + "``" + " Worth: " + "``" + worth6 + "``")
        .addField("**Top 7**", "Faction: " + "``" + top7 + "  " + "``" + " Worth: " + "``" + worth7 + "``")
        .addField("**Top 8**", "Faction: " + "``" + top8 + "  " + "``" + " Worth: " + "``" + worth8 + "``")
        .addField("**Top 9**", "Faction: " + "``" + top9 + "  " + "``" + " Worth: " + "``" + worth9 + "``")
        .addField("**Top 10**", "Faction: " + "``" + top10 + "  " + "``" + " Worth: " + "``" + worth10 + "``")
        .setFooter(`Created by koko#0012`);
     message.channel.send(Done)
    } 
})

}}
