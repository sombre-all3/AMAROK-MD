const { command, isPublic } = require("../lib")

command(
  {
        pattern: "git ?(.*)",
        fromMe: isPublic,
        type: "mics",
  },
  async(message,match) => {

 const buttonMessage = {
   image: { url: `https://i.ibb.co/PGr0KHx/89cdfb2b6adf.jpg` },
   caption: `Hi ${message.pushName}\n*This is Amarok MD repo\n\n*Repo*: https://github.com/Diegoson/AMAROK-MD`,
   footer: 'by amarok',
   buttons: buttons,
   headerType: 1
          }

  const buttons = [
         {
         buttonld: '.arise',
         buttonText: {displayText: tiny("ALIVE") },
         },
         {
         buttonld: '.help',
         buttonText: {displayText: tiny("HELP") },
       },
    ],
  }
);
  
