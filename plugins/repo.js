const { command, isPublic, tiny } = require("../lib/")

command(
  {      pattern: "git ?(.*)",
         fromMe: isPublic,
         type: "amarok GitHub",
  },
  async(message,match) => {
let data = await axios.get('https://api.github.com/repos/Diegoson/AMAROK-MD')
let git = `Hi ${message.pushName}` 
git+= ` *This is Amarok MD repository*\n\n*Total Stars*: ${dat.stargazers_count}\n\n*Forks* ${data.forks_count}\n\n*Repo*: _https://github.com/Diegoson/AMAROK-MD_\n\n*Whatsapp group*: _https://chat.whatsapp.com/I3aOiLY2Ydc258VkV7p0Md_\n\n*Owner*: _http://wa.me/27686881509_`,

await message.client.sendMessage(message.jid,{
video: { url: `https://i.imgur.com/0LTXiDF.mp4` },
      caption: git,
      footer: tiny(`amarok md` ),
      buttons: [
        {
        buttonId: '.owner',
        buttonText: {displayText: tiny("⫷OWNER⫸") },
        },
        {
        buttonId: '.menu',
        buttonText: {displayText: tiny("⫷MENU⫸") },
        },
      ],
    });
  }
);
