const { command ,isPrivate} = require("../lib/");

/* Copyright (C) 2022 Diegoson.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Amarok - Diegoson
*/

command(
  {
    pattern: "ping",
    fromMe: isPrivate,
    type: "user",
  },
  async (message, match) => {
    const start = new Date().getTime();
    await message.sendMessage("⫷ 𝘾𝙃𝙀𝘾𝙆𝙄𝙉𝙂 𝙎𝙋𝙀𝙀𝘿 ⫸");
    await message.sendMessage("⫷ 𝘼𝙈𝘼𝙍𝙊𝙆 𝙎𝙃𝙊𝙒𝙄𝙉𝙂 𝙎𝙋𝙀𝙀𝘿 𝙏𝙀𝙎𝙏 ⫸");
    const end = new Date().getTime();
    return await message.sendMessage(
      "*⫷ 𝙍𝙀𝙎𝙋𝙊𝙉𝙎𝙀 𝙄𝙉 ⫸*\n ```" + (end - start) + "``` *࿋𝙈𝙎࿋*"
    );
  }
);
