const {command, isPublic} = require("../lib")

  command(
    {
         pattern: "audio ?(.*)",
         fromMe: isPublic,
         desc: "Downloads Song",
         type: "download",
    },
    async (message, match) => {
      match = match || message.reply_message.text;
      if (ytIdRegex.test(match)) {
       yta(match.trim()).then(({ dl_link, title }) => {
        message.sendFromUrl(dl_link, { filename: title });
      });
    }
    search(match + "song").then(async ({ all }) => {
      await message.reply(`_Downloading ${all[0].title}_`);
      yta(all[0].url).then(({ dl_link, title }) => {
        message.sendFromUrl(dl_link, { filename: title, quoted: message });
      });
    });
  }
);
