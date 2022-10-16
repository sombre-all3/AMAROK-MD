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
    desc: "To check ping",
    type: "user",
  },
  async (message, match) => {
    const start = new Date().getTime();
    await message.sendMessage("⫷ 𝘾𝙃𝙀𝘾𝙆𝙄𝙉𝙂 𝙋𝙄𝙉𝙂 ⫸");
    const end = new Date().getTime();
    return await message.sendMessage(
      "*𝙍𝙀𝙎𝙋𝙊𝙉𝙎𝙀 𝙄𝙉 !*\n ```" + (end - start) + "``` *࿋𝙈𝙎࿋*"
    );
  }
);
