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
    title: "AMAROK MENU",
    rows: [
         {title: "「 DOWNLOAD 」", rowld: `downloads`, description: `☆THIS IS THE DOWNLOAD MENU☆`},
         {title: "「 GROUP 」", rowld: `groups`, description: `☆GROUPS COMMAND LIST HERE☆`},
         {title: "「 LIST 」", rowld: `list`, description: `☆CHECK OUT THE LIST☆`}
    ]
 },{
     title: "BOT COMMANDS",
     rows: [
           {title: "「 CONVERTER 」", rowld: `vectors`, description: `☆CONVERTER TO STICKERS`},
           {title: "「 USER MENU 」", rowld: `users`, description: `☆USER MENU LIST☆`},
           {title: "「 TOOLS MENU 」", rowld: `toolz`, description: `☆TOOLS MENU LIST☆`},
           {title: "「 SEARCH MENU 」", rowld: `searchz`, description: `☆SEARCH MENU LIST☆`}
       ]
   },
  ]
     let [date, time] = new Date()
        .toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
        .split(",");
 const listMessage = {
    text:`*╭───────────㋰*
*│╭──[ ${config.BOT_NAME} ]──㋰*
*││ USER : ${message.pushName}*
*││ WORKTYPE : ${config.WORK_TYPE}*
*│╰──㋰*
*│*
*│╭──[ ${config.OWNER_NAME} ]──㋰*
*││ BOTNAME : ${config.BOT_NAME}*
*││ TIME : ${time}*
*││ DATE : ${date}*
*││ OWNER : ${config.OWNER_NAME}*
*││ PREFIX : ${config.HANDLERS}*
*││ HOSTNAME : ${hostname().split("-")[0]}*
*│╰──㋰*
*╰───────────㋰*`,
    buttonText: "COLLECT",
sections 
}
return await message.client.sendMessage(message.jid, listMessage, {
  quoted: message 
 })
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
return await message.client.sendMessage(message.jid, buttonMessage, 
{ 
 quoted: message 
 })
});
