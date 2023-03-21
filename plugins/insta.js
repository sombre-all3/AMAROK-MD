const { command, isPrivate, isUrl, getJson , getBuffer} = require("../lib")
  command(
    {
           pattern: "insta",
           fromMe: isPrivate,
           type: "downloader",
    },
   async(message,match) => {
  if(!match.includes("www.instagram.com")) await message.sendMessage("I need a valid Instagram Link");
     let response = await getJson(`https://api-viper-x0.vercel.app/api/insta?url=${match}`);
     await message.client.sendMessage(message.jid , { video : { url: response.media.url } , caption : response.result.decs, mimetype: "video/mp4"} , { quoted : message  })
});
