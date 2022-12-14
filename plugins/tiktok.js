const {command} = require("../lib");
const fetch = require('node-fetch');


command(
    {
           pattern: "tik",
           fromMe: isPublic,
           react: "❤️",
           type: "user",
    },
   async(message,match) => {
  if(!match) await message.sendMessage("I need Link");
     let response = await getJson(`https://api.ibengtools.my.id/api/download/tiktok?url=${match}&apikey=ibeng`);
  
  let media = await (await fetch(response.result.video))
     await message.client.sendMessage(message.jid , { video : media , quoted : message})
     });
