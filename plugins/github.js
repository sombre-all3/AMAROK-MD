const { command, isPublic } = require("../lib")
command(
  {
    pattern: "git",
    fromMe: isPublic,
    desc: "Source code of bot",
    
  },
  async (message,match) => {
    await message.sendMessage("_https://github.com/Diegoson/AMAROK-MD_");
    return await message.sendMessage("Thanks for choosing Amarok");
  };
 }
);
