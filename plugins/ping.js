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
    await message.sendMessage("❰ᴄʜᴇᴄᴋɪɴɢ sᴘᴇᴇᴅ ❱");
    await message.sendMessage("❰ ᴀᴍᴀʀᴏᴋ sʜᴏᴡɪɴɢ sᴘᴇᴇᴅ ᴛᴇsᴛ ❱");
    const end = new Date().getTime();
    return await message.sendMessage(
      "*❰ ʀᴇsᴘᴏɴsᴇ ɪɴ ❱*\n ```" + (end - start) + "``` *࿋ᴍs࿋*"
    );
  }
);
