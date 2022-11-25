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
 
          return await message.client.sendMessage(message.jid, buttonMessage, {
             image: { url: `https://i.ibb.co/HpwY58b/afa809a9756c.jpg` },
             caption: "Testing Amarok",
             footer: tiny(`menu`),
             headerType: 4,
             buttons: [{
                 buttonld: ".ping",
                 buttonText: {
                       displayText: "Speed Test",
               },
               {
                 buttonld: ".alive",
                 buttonText: {
                        displayText: "Alive Button",
               },
             
            ], 
         });
       }
    );
         

             
 
  


   

