const {command} = require ("../lib")

command(
        {
           pattern: 'alive ?(.*)',
           fromMe: true,
           desc: 'amarok alive message',
           type: 'mics',
        },
        async (message,match) => {
     let user = message.participant || message.mention[0];   	
        
await message.sendMessage(`Hello  ${user} all systems are functional`)
}
)


//Tshephang+Cyber 🐤you change plugin disappeares
