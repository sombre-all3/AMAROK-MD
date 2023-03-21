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
    text: "「 WELCOME TO MENU 」",
    footer: "AMAROK-MD BOT",  
    title: "AMAROK NEW MENU",
    buttonText: "《TAPE HERE》",
sections 
}
return await message.client.sendMessage(message.jid, listMessage})
});
