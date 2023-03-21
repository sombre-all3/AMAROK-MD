  const {
     command,
     isPublic,
     tiny
  } = require("../lib")

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
         {title: "「 GROUP 」", rowld: `groups`, description: `☆GROUPS COMMAND LIST HERE☆`}
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
 const listMessage = {
    text: "AMAROK MD",
    footer: "┏━━━━━━━━━━━━━
┫ 
┃",
    title: "┗━━━━━━━━━━━╾",
    buttonText: "《TAPE HERE》",
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

let menu=`
╭──❍「 *DOWNLOAD* 」
│ *»* ${prefix}song
│ *»* ${prefix}tik
│ *»* ${prefix}insta
│ *»* ${prefix}mp3
│ *»* ${prefix}fetch
│ *»* ${prefix}img
│ *»* ${prefix}yts
│ *»* ${prefix}ytv
│ *»* ${prefix}yta
│ *»* ${prefix}play
│ *»* ${prefix}video
│ *»* ${prefix}getexif
╰─────❍\n`
let buttons = {
  {
   buttonld: prefix + `alive`,
   buttonText: {
   displayText: "🎗ALIVE🎗"
 },
type: 1
},{
 buttonld: prefix + `list`,
 buttonText: {
 displayText: "🎗LIST🎗"
},
type: 1
}],
headerType: 1
}
return await message.client.sendMessage(message.jid, buttonMessage, { quoted: message 
})
});

  



                
