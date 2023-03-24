const {
  command,
  isPrivate,
  getJson
} = require("../lib")
const ChatGpT = require("chatgpt")

command({
  pattern: "got ?(.*)",	
  fromMe: isPrivate,
  type: 'misc',
}, 
async (message, match) => {
if (!match) return await message.sendMessage("_need text example ai who is diegoson_");
var api = await getJson(`https://mfarels.my.id/api/openai?text=${match}`)

await message.reply(api.result);

});
