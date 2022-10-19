conts {command} = require('../lib')

command(
  {
     pattern: 'owner',
     fromMe: true,
     desc: 'Amarok owner',
  },
async (message,metch) => {
await message.sendMessage('Hello this is my owner +27686882509');
return await message.sendMessage('Dont spam this message powered by amarok');
}
)
