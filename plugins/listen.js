  const {
     command,
     isPublic,
     tiny,
     clockString
  } = require("../lib")
 const config = require("../config")
const { hostname, uptime } = require("os");
  command(
     {     pattern: "menu",
           fromMe: isPublic,
           type: "user",
    },
   async(message,match) => {
 
  let sections = [
     {  
    title: "ᴀᴍᴀʀᴏᴋ ᴍᴇɴᴜ",
    rows: [
         {title: "「 ᴅᴏᴡɴʟᴏᴀᴅs 」", rowld: `downloads`, description: `ғᴇᴀᴛᴜʀᴇᴅ ʙʏ ᴀᴍᴀʀᴏᴋ`},
         {title: "「 ɢʀᴏᴜᴘ ᴍᴇɴᴜ 」", rowld: `groups`, description: `ғᴇᴀᴛᴜʀᴇᴅ ʙʏ ᴀᴍᴀʀᴏᴋ`},
         {title: "「 ʟɪsᴛ ᴍᴇɴᴜ 」", rowld: `.list`, description: `ғᴇᴀᴛᴜʀᴇᴅ ʙʏ ᴀᴍᴀʀᴏᴋ`}
    ]
 },{
     title: "ɴᴏᴛ ᴄᴏᴍᴍᴀɴᴅs",
     rows: [
           {title: "「 ᴄᴏɴᴠᴇʀᴛᴇʀ 」", rowld: `vectors`, description: `ғᴇᴀᴛᴜʀᴇᴅ ʙʏ ᴀᴍᴀʀᴏᴋ`},
           {title: "「 ᴜꜱᴇʀ ᴍᴇɴᴜ 」", rowld: `users`, description: `ғᴇᴀᴛᴜʀᴇᴅ ʙʏ ᴀᴍᴀʀᴏᴋ`},
           {title: "「 ᴛᴏᴏʟꜱ ᴍᴇɴᴜ 」", rowld: `toolz`, description: `ғᴇᴀᴛᴜʀᴇᴅ ʙʏ ᴀᴍᴀʀᴏᴋ`},
           {title: "「 ꜱᴇᴀʀᴄʜ ᴍᴇɴᴜ 」", rowld: `searchz`, description: `ғᴇᴀᴛᴜʀᴇᴅ ʙʏ ᴀᴍᴀʀᴏᴋ`}
       ]
   },
  ]
     let [date, time] = new Date()
        .toLocaleString("en-IN", { timeZone: "Africa/Johannesburg" })
        .split(",");
 const listMessage = {
    text:`*╭───────────㋰*
*│╭──[ ${config.BOT_NAME} ]──㋰*
*││ USER : ${message.pushName}*
*││ VERSION : ${require("../package.json").version}*
*│╰──㋰*
│
*│╭──[ ${config.OWNER_NAME} ]──㋰*
*││ BOTNAME : ${config.BOT_NAME}*
*││ TIME : ${time}*
*││ DATE : ${date}*
*││ OWNER : ${config.OWNER_NAME}*
*││ PREFIX : ${config.HANDLERS}*
*││ HOSTNAME : ${hostname().split("-")[0]}*
*│╰──㋰*
*╰───────────㋰*`,
    buttonText: "ꜱᴇʟᴇᴄᴛ ϻᴇnu:)",
sections 
}
return await message.client.sendMessage(message.jid, listMessage, { react: { text: "🫂", key: message.key,
  quoted: message 
 }})
});
//====================================================
//                   AMAROK LIST MENU
//====================================================

command({ pattern: "downloads", fromMe: isPublic, },
async(message,match) => {

let [date, time] = new Date()
            .toLocaleString("en-IN", {
                timeZone: "Africa/Johannesburg"
            })
            .split(",");
            let menu = `
╭──❍「 *DOWNLOAD* 」
│ *»* song
│ *»* tik
│ *»* insta
│ *»* mp3
│ *»* fetch
│ *»* img
│ *»* yts
│ *»* ytv
│ *»* yta
│ *»* play
│ *»* video
│ *»* getexif
╰─────❍`;
const buttons = [
  {buttonld: `alive`, buttonText: {displayText: "🎗ALIVE🎗"}, type:1},
  {buttonld: `menu`, buttonText: {displayText: "🎗MENU🎗"}, type:1},
 ]

let buttonMessage = {
    text: menu,
    footer: 'AlienAlfa',
    buttons: buttons,
    headerType: 1
}

message.client.sendMessage(message.jid, buttonMessage, 
{ 
 quoted: message 
 })

});
 
