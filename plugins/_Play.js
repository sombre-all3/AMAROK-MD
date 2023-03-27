   const { command, isPrivate, isUrl } = require("../lib")
   const yts = require("yt-search")

   command(
     {       pattern: "play",
             fromMe: isPrivate,
             type: "downloads",
    },
    async(message,match) => {
    if (!match) return await message.sendMessage("_give song name_");
    const videos = await yts(match)
    const text = `
     ╭──────━•
│🚦 Title: ${videos.all[0].title}
│🚦Views : ${videos.all[0].views}
│🚦 Published : ${videos.all[0].ago}
│🚦 Channel : ${videos.all[0].author.name}
┗──────━•\n\n`
 let buttons = [
  {buttonld: `song${videos.all[0].url}`, buttonText: {displayText: 'DOWNLOAD SONG'}, type: 1},
  {buttonld: `video${videos.all[0].url}`, buttonText: {displayText:' DOWNLOAD VIDEO'}, type: 1}
 ]
const buttonMessage = {
image: {url: `${videos.all[0].image}` },
caption: text,
footer: `amarok`,
buttons: buttons,
headerType: 2
}
return await message.sendMessage(message.jid, buttonMessage)
})
