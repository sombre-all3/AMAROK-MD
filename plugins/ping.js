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
    await message.sendMessage("```Checking speed process```");
    const end = new Date().getTime();
    return await message.sendMessage(
      "```Response in```" + (end - start) + " ᴍs"
    );
  }
);
