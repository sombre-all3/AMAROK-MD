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
      {buttonId: "ytmp3", buttonText: {displayText: 'ꜱᴏɴɢ🎵', }, type: 1, url: anulay.url},
      {buttonId: "ytv", buttonText: {displayText: 'ᴠɪᴅᴇᴏ🎥', }, type: 1, url: anulay.url},
    ]
    let buttonMessage = {
      image: { url: anulay.thumbnail },
      caption: ◑ᴛɪᴛʟᴇ  : ${anulay.title}n◑ᴀɴᴏɴʏᴍᴜs : ${anulay.videoId}n𒈒 𝑫𝑼𝑹𝑨𝑻𝑰𝑶𝑵 : ${anulay.timestamp}n◑ᴠɪᴇᴡs : ${anulay.views}n◑ᴘʟᴜsʜᴇᴅ : ${anulay.ago}n◑ᴀᴜᴛʜᴏʀ : ${anulay.author.name}n◑ᴜʀʟ : ${anulay.author.url}n◑ᴅᴇsᴄʀɪᴘᴛᴜᴏɴ : ${anulay.description}n◑ᴀ ᴜʀʟ : ${anulay.url},
      footer: "BOT_NAME",
      buttons: buttons,
      headerType: 4
    }
    message.client.sendMessage(message.jid, buttonMessage, { quoted: message });
  }
);
