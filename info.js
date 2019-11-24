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

  message.delete();

  let Error = new RichEmbed()
  .setColor(`8A2BE2`)
  .setTitle(":negative_squared_cross_mark: Error!")
  .setDescription("Please enter the name of a faction.")
  

  let Error2 = new RichEmbed()
  .setColor(`8A2BE2`)
  .setTitle(":negative_squared_cross_mark: Error!")
  .setDescription("That faction don't exist.")
  
  
  let dato = args[0]
  if (dato === undefined) return message.channel.send(Error)

  let argument = dato.toUpperCase();
  connection.query('SELECT * FROM data WHERE FactionName=?', [argument], (err, data) => {
    if (err) return console.error(err);
    if (data.length > 0) {
    let leader = data[0].FactionLeader;
    let name = data[0].FactionName;
    let totalworth = data[0].TotalWorthFormatted;
    let richestbalance = data[0].RichestMemberBalanceFormatted;
    let spawners = data[0].SpawnerWorthFormatted;
    let blaze = data[0].BlazeSpawner;
    let richest = data[0].RichestMember
    let silverfish = data[0].SilverFishSpawner;
    let irongolem = data[0].IronGolemSpawner;
    let creeper = data[0].CreeperSpawner;
    let enderman = data[0].EndermanSpawner;
    let skeleton = data[0].SkeletonSpawner;
    let zombie = data[0].ZombieSpawner;
      let Embed = new RichEmbed()
      .setColor(`8A2BE2`)
      .setTitle("**ServerName | Faction Data**")
      .addField("**Faction:**","**" + name + "**")
      .addField("**Leader:**", "**" + leader + "**")
      .addField("Richest member", "**" + richest + "**")
      .addField("Money of the richest member", "**" + richestbalance + "**")
      .addField("Total worth", "**" + totalworth + "**")
      .addField("Spawners worth", "**" + spawners + "**")
      .addField("SilverFish:", "**x" + silverfish + "**")
      .addField("Iron Golem:", "**x" + irongolem + "**")
      .addField("Creeper:", "**x" + creeper + "**")
      .addField("Blaze:", "**x" + blaze + "**")
      .addField("Enderman:", "**x" + enderman + "**")
      .addField("Skeleton:", "**x" + skeleton + "**")
      .addField("Zombies:", "**x" + zombie + "**")
      .setThumbnail("https://minotar.net/body/" + leader + "/500.png")
      message.channel.send(Embed)
    }
    if (data.length < 1) {
      message.channel.send(Error2)
    }
  })
}}
