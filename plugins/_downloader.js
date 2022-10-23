/*Copyrights (©)2022 AMAROK MD.
By TOXIC KICHU.
*/

const { command, isPublic, isPrivate } = require("../lib");
const { yta, ytIdRegex, ytv } = require("../lib/yotube");

command(
  {
    pattern: "song",
    fromMe: isPrivate,
    desc: "Downloads Song",
    type: "downloader",
  },
  async (message, match) => {
    if (!(match || message.reply_message.text))
      return await message.reply("_Enter Song Name_");
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
        );
      });
    });
  }
);
