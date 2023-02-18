/* Copyright (C) 2022 Amarok-MD.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Diegoson - Amarok-MD
*/

const { command ,isPrivate} = require("../lib/");

command(
  {
    pattern: "ping",
    fromMe: isPrivate,
    desc: "To check ping",
    type: "user",
  },
  async (message, match) => {
    const start = new Date().getTime();
    await message.sendMessage("ᴘɪɴɢ!");
    const end = new Date().getTime();
    return await message.sendMessage(
      "ᴘᴏɴɢ! " + (end - start) + " ᴍs"
    );
  }
);
