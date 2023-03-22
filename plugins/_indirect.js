const { command, isUrl, isPrivate, findMusic } = require("../lib/");
const jimp = require("jimp");
let { unlink } = require("fs/promises");
const got = require("got");
const FormData = require("form-data");
const stream = require("stream");
const { promisify } = require("util");
const pipeline = promisify(stream.pipeline);
const fs = require("fs");

command({
    pattern: "find ?(.*)",
    fromMe: true,
    desc: "find the replied music",
    type: "tools",
  },
  async (message, match, msg) => {
    if (!message.reply_message)
      return await message.treply("_Reply to a audio or video_");
    let buff = await msg.quoted.download();
    let data = await findMusic(buff);
    if (!data.status) return message.treply(data);

    let buttonMessage = {
      text: `Title : ${data.title}            
🚦ARTIST : ${data.artists}            
🚦ALBUM : ${data.album}                     
🚦RELEASE : ${data.release_date}`,
      templateButtons: [
        {
          urlButton: {
            displayText: "YOUTUBE PLAY",
            url: data.youtube,
          },
        },
        {
          index: 1,
          urlButton: {
            displayText: "SPOTIFY PLAY",
            url: data.spotify,
          },
        },
        {
          index: 2,
          quickReplyButton: {
            displayText: "AS SONG,
            id: `${message.prefix}song ${data.song}`,
          },
        },
      ],
    };
    await message.sendMessage(buttonMessage, {}, "template");
 })
});
