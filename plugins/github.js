const { command, isPublic } = require("../lib")
command(
  {
    pattern: "git",
    fromMe: isPublic,
    desc: "to check the bot status",
    
  },
  async (message,match) => {
    await message.sendMessage("https://Diegoson/AMAROK-MD");
    return await message.sendMessage("Thanks for choosing Amarok");
  };
 }
);
