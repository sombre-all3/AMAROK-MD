const {command , getJson} = require("../lib");

command({
  pattern: 'ai ?(.*)',	
  fromMe: isPublic,
  type: 'misc',
}, 
async (message, match) => {

var api = await getJson(`https://mfarels.my.id/api/openai?text=${match}`)!

await message.reply(api.result);

});
