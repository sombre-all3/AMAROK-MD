const {command, isPublic} = require("../lib")

command(
  {
         pattern: "leave",
         fromMe: isPublic,
         type: "mics",
  },
  async(message,match) => {
if(!match) await sock.groupLeave("abcd-xyz@g.us");
await message.reply `${message.pushName} left the group`;
if(!match) await message.sendMessage("_This command is for group only_");
},
);
