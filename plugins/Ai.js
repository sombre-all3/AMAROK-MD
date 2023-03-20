/*
   CREATED BY TOXIC CHAOS 
 */
const {command , getJson} = require("../lib");

command({
  pattern: 'ai ?(.*)',	
  fromMe: isPrivate,
  type: 'misc',
}, 
async (message, match) => {

var api = await getJson(`https://mfarels.my.id/api/openai?text=${match}`)!

await message.reply(api.result);

});
