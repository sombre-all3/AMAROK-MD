const { command, sleep, isPrivate, isUrl, Bitly } = require("../lib/");
command(
  {
    pattern: "getqr ?(.*)",
    fromMe: isPrivate,
    desc: "Get connection QR",
    type: "misc",
  },
  async (message, match) => {
    for (let index = 0; index < 5; index++) {
      await sleep(30 * 1000);
      await message.sendFromUrl("https://amarok-baileyz.vercel.app/", {
        caption: "⫷𝙎𝘾𝘼𝙉 𝙒𝙄𝙏𝙃𝙄𝙉 8 𝙈𝙄𝙉𝙐𝙏𝙀𝙎⫸ ",
      });
    }
    return await message.reply("⫷𝘽𝘼𝘿𝙇𝙔 𝙔𝙊𝙐𝙍 𝙎𝙀𝙎𝙎𝙄𝙊𝙉 𝙃𝘼𝙎 𝙀𝙓𝙋𝙄𝙍𝙀𝘿 𝙍𝙀𝙉𝙀𝙒 𝙄𝙏⫸");
  }
);

