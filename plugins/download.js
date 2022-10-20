const {command} = require("../lib")

command(
  {
     pattern: "song",
     fromMe : true,
     dead: "Download music",
  },
  async (message,match) => {
   if(!message.reply_message)
   return await message.reply("Enter song name or give me video")
   await toSong(message)
match = match || message.reply_message.text;
    if (ytIdRegex.test(match)) {
      yta(match.trim()).then(async ({ dl_link, title, thumb }) => {
        let buff = await AddMp3Meta(dl_link, thumb, {
          title,
        });
        message.sendMessage(
          buff,
          { mimetype: "audio/mpeg", quoted: message.data },
          "audio"
        );
      });
    }
    search(match + "song").then(async ({ videos }) => {
      await message.reply(`_Downloading ${videos[0].title}_`);
      yta(videos[0].url).then(async ({ dl_link, title, thumb }) => {
        let buff = await AddMp3Meta(dl_link, thumb, {
          title,
          artist: [videos[0].author],
        });
        message.sendMessage(
          buff,
          { mimetype: "audio/mpeg", quoted: message.data },
          "audio"
  }

)
