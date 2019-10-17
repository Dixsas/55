const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "$";
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : Dixsas`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : Dixsas ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(` 𝙎𝙋𝙀𝘾𝙄𝘼𝙇 𝘼𝙍𝘼𝘽`,"")
client.user.setStatus("dnd")
});


client.login(NTY1MTg3MTQ5MDU0NDc2Mjk5.Xag4nQ.2-snzVyy26U-sczgzftiUzeIGbc);
