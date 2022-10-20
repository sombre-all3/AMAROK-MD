const {command} = require("../lib")

command(
  {
     pattern: "song",
     fromMe : true,
     dead: "Download music",
  },
  async (message,match) => {
   if(!message.reply_message)
   return await message.reply("Enter song name or give me video")
   await toSong(message)
 }
);
