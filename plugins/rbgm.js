   const {
   command,
   remove,
   unscreen,
   isPublic
  } = require("../lib")
  let gis = require("g-i-s")
  const fs = require("fs")
  const Config = require("../config")

 command(
   {      pattern: "rbgm",
          fromMe: isPublic,
          type: "mics",
   },	

       async (message,match) => {
       if(message.quoted.imageMessage){
       let img = await client.downloadAndSaveMediaMessage(message.quoted.imageMessage)
       let rmbgimg = await remove(fs.readFileSync(img))
       // let rmbg = await fs.writeFile('./media/rmbg/isexit.jpg', rmbgimg)
       await client.sendMessage( message.from, { image : rmbgimg, caption : Config.CAPTION }, { quoted: message })
       await fs.unlinkSync(img);//return await fs.unlinkSync(rmbg);
   }
  }
);
