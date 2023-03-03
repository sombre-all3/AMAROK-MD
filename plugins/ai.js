/*
 OPEN AI ARTIFICIAL INTELLIGENCE SOFTWARE BY AMAROK
*/
const { command, isPrivate } = require("../lib")

command({
  pattern: "ai",
  fromMe: isPrivate,
  desc: "Chat Gpt Chat feture",
  type: "search",

},
async (message, match, m) => {
  //if (message.fromMe || !message.reply_message) return; // use this if you dont want auto reply to every chat
  if(!match) return
    const api = new ChatGPTAPI({
      apiKey: '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'
    })
  
    const res = await api.sendMessage(match)

  
  
 return await message.client.sendMessage(message.jid, {text: res.text});



});
