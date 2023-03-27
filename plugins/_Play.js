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
│🚦 Title: ${video.all[0].title}
│🚦Views : ${video.all[0].views}
│🚦 Published : ${video.all[0].ago}
│🚦 Channel : ${video.all[0].author.name}
┗──────━•\n\n`
 let buttons = [
  {buttonld: `song${video.all[0].url}`, buttonText: {displayText: 'DOWNLOAD SONG'}, type: 1},
  {buttonld: `video${video.all[0].url}`, buttonText: {displayText:' DOWNLOAD VIDEO'}, type: 1}
 ]
const buttonMessage = {
image: {url: `${video.all[0].image}` },
caption: text,
footer: `amarok`,
buttons: buttons,
headerType: 4
}
return await message.sendMessage(message.jid, buttonMessage)
})
