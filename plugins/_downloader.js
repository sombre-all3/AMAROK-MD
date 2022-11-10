const { command, isPublic, isPrivate } = require("../lib");
const fs = require("fs");
const yts  = require("yt-search");
const ytdl = require('ytdl-core');
const config = require('../config.js');

const getRandom = (text) => {
    return `${Math.floor(Math.random() * 10000)}${text}`
}
const mYtId = (query) => {
const ytIdRegex =
	/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/
let yturlm = query.match(ytIdRegex)
  return yturlm
}


command(
  {
    pattern: "song",
    fromMe: isPrivate,
    type: "downloader",
  },
  async (message, match) => {
    await message.reply("...ᴀᴍᴀʀᴏᴋ ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ʏᴏᴜʀ sᴏɴɢ");
    match = match || message.reply_message.text;
    if (!match) return await message.reply("_Enter Song Name_");
    //fn
    const dMp3 = async (Link ) => {
    	try{
    		await ytdl.getInfo(Link);
    		let mp3File = getRandom('.mp3') 
    		ytdl(Link, {filter: 'audioonly'})
    		.pipe(fs.createWriteStream(mp3File))
    		.on("finish", async () => {  
    			await message.sendMessage(
          fs.readFileSync(mp3File),
          { mimetype: "audio/mpeg", quoted: message.data },
          "audio"
        );
        fs.unlinkSync(mp3File)
        })       
        } catch (err){
//console.log(err)
}
}
var songId = await mYtId(match)
if (songId !== null){
	let Link = 'https://youtu.be/' + songId[1]
	dMp3(Link)
	} else {
		let search = await yts(match)  
		dMp3(search.all[0].url)
	}
}
);


/*command(
  {
    pattern: "video ?(.*)",
    fromMe: isPrivate,
    type: "downloader",
  },
  async (message, match) => {
    if (!match) return await message.reply("_Send video link_");
    match = match || message.reply_message.text;
    if (ytldRegex.test(match)) {
      ytdl(match.trim()).then(({ dl_link, title }) => {
        message.sendFromUrl(dl_link, { filename: title });
      });
    }
    search(match).then(async ({ all }) => {
      await message.reply(`🎥𝘈𝘔𝘈𝘙𝘖𝘒 𝘐𝘚 𝘋𝘖𝘞𝘕𝘓𝘖𝘈𝘋𝘐𝘕𝘎 𝘠𝘖𝘜𝘙 𝘝𝘐𝘋𝘌𝘖🎥 ${all[0].title}_`);
      ytdl(all[0].url).then(({ dl_link, title }) => {
        message.sendFromUrl(dl_link, { filename: title, quoted: message });
      });
    });
   }
 );*/

command(
  {
    pattern: "video",
    fromMe: isPrivate,
    type: "downloader",
  },
  async (message, match) => {
    await message.reply("...ᴠɪᴅᴇᴏ ɪɴ ᴘʀᴏᴄᴇss ᴡᴀɪᴛ");
    match = match || message.reply_message.text;
    if (!match) return await message.reply("_Enter Video Name_");
    //fn
    const dMp4 = async (Link ) => {
    	try{
    		await ytdl.getInfo(Link);
    		let mp4File = getRandom('.mp4') 
    		let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on("finish", async () => {    
await message.sendMessage(
          fs.readFileSync(mp4File),
          { quoted: message.data},
          "video"
        );
fs.unlinkSync(`./${mp4File}`)
        })       
        } catch (err){
//console.log(err)
}
}
var videoId = await mYtId(match)
if (videoId !== null){
	let Link = 'https://youtu.be/' + videoId[1]
	dMp4(Link)
	} else {
		let search = await yts(match)  
		dMp4(search.all[0].url)
};
let stats = fs.statSync(`./${randomName}`);
            let fileSize = stats.size;
            let fileSize = fileSize / (1034 * 1034);
            if (fileSize <= 150) {
                let buttonMessage = {
            video:fs.readFileSync(`./${randomName}`),
            mimetype: 'video/mp4',
            fileName: `¥{titleYt}.mp4`,
            caption: `🎥Title: ${titleYt}\n 🎥File Size: ${filesize} MB`,
            headerType: 2,
	}
    }
    await message.client.sendMessage(message.jid, buttonMessage)
}
);
