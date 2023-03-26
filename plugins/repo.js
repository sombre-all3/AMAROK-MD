const { command, isPublic } = require("../lib")
 const axios = require("axios")

command({ pattern: "git", fromMe: isPublic, type: "search",}, async(message,match) => {
let { data } = await axios.get(`https://api.github.com/repos/Diegoson/AMAROK-MD`)
let buttons = [
   {buttonld: `menu`, buttonText: {displayText: tiny('MENU')}, type: 1},
   {buttonld: `list`, buttonText: {ddisplayText: tiny('LIST')}, type: 1}
]
let buttonMessage = {
  image: {url: `https://telegra.ph/file/6086f101a36f7fc14bff6.png` },
  caption: tiny(`Amarok\n\n🌟Start: ${data.stargazers_count\n\n🚦Forks: ${data.forks_count}\n\n👀Views: ${data.watchers_count}\n\n📑Language: ${data.language}\n\n🌲Branch: ${data.default_branch}\n\n💡Created At: ${data.created_at}\n\n💈Last Update: ${data.updated_at}\n\n👁️Mode: public\n\n🔗Git Link: https://github.com/Diegoson/AMAROK-MD`),
  footer: tiny(`amarok md`),  
  footer: tiny(`team toxic`),
  buttons: buttons,
  headerType: 4
}
return await message.client.sendMessage(message.jid, buttonMessage)
const reactionMessage = {
     react: {
     text: "😎",
     key: message.key
   }
 }
return await message.client.sendMessage(message.jid, reactionMessage, {
 quoted: message 
 })
});
