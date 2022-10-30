const { command, isPublic, tiny } = require("../lib")

command(
  {      pattern: "git ?(.*)",
         fromMe: isPublic,
         type: "amarok GitHub",
  },
  async(message,match) => {

let git = `Hi ${message.pushName}` 
git+= ` *This is Amarok MD repo\n\n*Repo*: _https://github.com/Diegoson/AMAROK-MD_ `;

await message.client.sendMessage(message.jid,{
video: { url: `https://i.imgur.com/0LTXiDF.mp4` },
      caption: tiny(git),
      footer: tiny(`amarok md` ),
      buttons: [
        {
        buttonId: '.owner',
        buttonText: {displayText: tiny("OWNER") },
        },
        {
        buttonId: '.menu',
        buttonText: {displayText: tiny("MENU") },
        },
      ],
    });
  }
);
