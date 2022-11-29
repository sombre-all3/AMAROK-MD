const {command , isPrivate } = require("../lib/");
const yts = require("yt-search");

command(
{
pattern : "play",
fromMe: isPrivate,
desc : "yts player",
type : "music",
 },
 
 async (message, match) => {
 	if(!match) return await message.reply("_enter the song name_");
 const videos = await yts(match);
    let  text = `
╭━━〘  𝗔𝗠𝗔𝗥𝗢𝗞 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥  〙━━──⊷
┃ 
┠ 🎶Title : ${videos.all[0].title}
┠ 🧭Publish date: ${videos.all[0].ago}
┠ 🎥Channel : ${videos.all[0].author.name}
┃ 
╰━━━━━━━━━━━──⊷`

const buttons = [
  {buttonId: `.song ${videos.all[0].url}`, buttonText: {displayText: 'play me'}, type: 1},
]

const buttonMessage = {
    image : {url: `${videos.all[0].image}`},
    caption: text,
    footer : "𝗔𝗠𝗔𝗥𝗢𝗞",
    buttons:buttons,
    headerType: 1
}

return await message.client.sendMessage(message.jid, buttonMessage);

  })
