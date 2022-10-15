const {amarok, aliveMessage} = require ('../lib')

amarok(
        {
           pattern: 'alive ?(.*)',
           fromMe: true,
           desc: 'amarok alive message',
           type: 'mics',
        },
        async (message,match) ==> {
await message.sendMessage('Hello user lm alive ${user}')
}
)
