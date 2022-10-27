const { command, isPublic, isUrl } = require("../lib")

command(
  {
        pattern: "xnxx",
        fromMe: isPublic,
        type: "xnxx",
  },
async (message,match) => {
match = isUrl(match || message.reply_message.text)
await message.sendFromUrl("www.xnxx.com");
await message.sendMessage("Downloading");
return message await("Enter a name of porn video");
},
)
