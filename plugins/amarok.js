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
            {
             buttonld: ".ping",
             buttonText: {
                    displayText: "Speed Test",
            },
          ];

    const buttonMessage = {
             image: { url: `https://i.ibb.co/HpwY58b/afa809a9756c.jpg` },
             caption: "Testing Amarok",
             footer: tiny(`menu`),
             headerType: 4,
          };
        };
     return await message.client.sendMessage(message.jid, {
    });
         

             
 
  


   

