      const {
        command,
        isPublic,
        tiny
      } = require("../lib")

  command(
    {
           pattern: "amarok",
           fromMe: isPublic,
           type: "user",
    },
    async(message,match) => {
 
   const buttons = [{
             buttonld: ".list",
             buttonText: {
                    displayText: "Menu List",
            },
            type: 1
            },
            {
             buttonld: ".ping",
             buttonText: {
                    displayText: "Speed Test",
            },
            type: 1
            },
          ];

    const buttonMessage = {
             image: { url: `https://i.ibb.co/HpwY58b/afa809a9756c.jpg` },
             caption: "Testing Amarok",
             footer: tiny(`menu`),
             headerType: 4,
          }
     return await message.client.sendMessage(message.jid, {
    })
         

             
 
  


   

