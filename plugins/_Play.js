   const { command, isPrivate, isUrl } = require("../lib")
   const yts = require("yt-search")

   command(
  {
    pattern: "play",
    fromMe: isPrivate,
    desc: "Downloading songs",
    type: "downloader",
  },
  async (message, match) => {
         if (!match) return await message.reply("_ᴋᴀɴᴛɪɴɪ ʙʏ sɪʀᴛʀɪʟʟ_")
                let yts = require("youtube-yts")
                let search = await yts(match)
                let anulay = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anulay.url}`, buttonText: {displayText: 'ꜱᴏɴɢ🎵'}, type: 1},
                    {buttonId: `ytv ${anulay.url}`, buttonText: {displayText: 'ᴠɪᴅᴇᴏ🎥'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anulay.thumbnail },
                    caption: `
◑ᴛɪᴛʟᴇ  : ${anulay.title}
◑ᴀɴᴏɴʏᴍᴜs : ${anulay.videoId}
𒈒 𝑫𝑼𝑹𝑨𝑻𝑰𝑶𝑵 : ${anulay.timestamp}
◑ᴠɪᴇᴡs : ${anulay.views}
◑ᴘʟᴜsʜᴇᴅ : ${anulay.ago}
◑ᴀᴜᴛʜᴏʀ : ${anulay.author.name}
◑ᴜʀʟ : ${anulay.author.url}
◑ᴅᴇsᴄʀɪᴘᴛᴜᴏɴ : ${anulay.description}
◑ᴀ ᴜʀʟ : ${anulay.url}`,
                    footer: BOT_NAME,
                    buttons: buttons,
                    headerType: 4
                }
                message.client.sendMessage(message.jid, buttonMessage, { quoted: message });
  })
