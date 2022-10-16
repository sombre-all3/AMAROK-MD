const {command} = require ("../lib")

command(
        {
           pattern: 'dead ?(.*)',
           fromMe: true,
           desc: 'amarok alive message',
           type: 'mics',
        },
        async (message,match) => {
      	
        
await message.sendMessage(`Hello  all systems are functional`)
}

)
