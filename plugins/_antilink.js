const { command, isPublic } = require("../lib")

command(
  {
         pattern: "antilink",
         fromMe: isPublic,
         type: "antilink on and off",
  },
  async(message,match) => {
const buttonMessage = {
   text: "❛ ━━━━━━･❪ ANTILINK ❫ ･━━━━━━ ❜",
   templateButtons: {
   {
       index: 1,
       urlButton: {
       displayText: "AMAROK",
       url: 'https://github.com/Diegoson/AMAROK-MD',
    },
   },
   {
       index: 2,
       quickreplyButton: {
       displayText: "ON",
       id: '.menu',
   },
  },
  {
       index: 2,
       quickreplyButton: {
       displayText: "OFF",
       id: '.menu',
   },
  },
  ],
 );
  await message.sendMessage(buttonMessage, {}, "template");
 }
);
    
    

  
   
