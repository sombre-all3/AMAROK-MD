const config = require('./config.js')
const gptapikey = config.GPTAPIKEY
const {
  command,
  isPrivate,
  getJson
} = require("../lib")

command({
  pattern: "got ?(.*)",	
  fromMe: isPrivate,
  type: 'misc',
}, 
async (message, match) => {
if (!match) return await message.sendMessage("_need text example ai who is diegoson_");
let response  = await getJson(`https://api-viper-x0.vercel.app/api/openai?openaiapikey=${gptapikey}&text=${match}`)

await message.reply(response.data.text);

});
