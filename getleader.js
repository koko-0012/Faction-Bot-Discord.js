const { RichEmbed } = require('discord.js');
const config = require ("../config.json");
const mysql = require('mysql');
const connection = mysql.createConnection(config)


module.exports = { 
  config: {
      name: "getleader",
      aliases: [""],
  },
run: async (bot, message, args) => {

    let Error = new RichEmbed()
    .setColor(`8A2BE2`)
    .setTitle(":negative_squared_cross_mark: Error!")
    .setDescription("Please enter the name of a faction.")

    let Error2 = new RichEmbed()
    .setColor(`8A2BE2`)
    .setTitle(":negative_squared_cross_mark: Error!")
    .setDescription("That faction don't exist.")

    let arg = args[0]
    if (arg === undefined) return message.channel.send(Error)

    let argument = arg.toUpperCase();
    connection.query('SELECT * FROM data WHERE FactionName=?', [argument], (err, data) => {
        if (err) return console.error(err);
        if (data.length > 0) {
        let leader = data[0].FactionLeader
        let Embed = new RichEmbed()
        .setColor(`8A2BE2`)
        .addField("**The leader is:**", leader)
        message.channel.send(Embed)
        }
        if (data.length < 1) {
            message.channel.send(Error2)
          }
    })

}}
