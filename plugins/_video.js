const { command, ytdl , isUrl } = require("../lib")

command(
  {
    pattern: "video ?(.*)",
    fromMe: isPrivate,
    type: "downloader",
  },
  async (message, match) => {
    if (!match) return await message.reply("_Send video link_");
    match = match || message.reply_message.text;
    if (ytdlRegex.test(match)) {
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
);
