const { command, isPrivate, tiny } = require('../lib')
const { WORK_TYPE, HANDLERS, BOT_NAME, OWNER_NAME } = require('../config.js')

command({
            pattern: "menu"
            , fromMe: isPrivate
            , dontAddCommandList: true
        , }
        , async (message, match, m) => {

            let [date, time] = new Date()
                .toLocaleString("en-IN", {
                    timeZone: "Africa/Johannesburg"
                })
                .split(",");
            let menu = `
    ╭───────────㋰
    │╭──[ ${BOT_NAME} ]──㋰
    ││USER :  ${message.pushName}
    ││NUMBER :  ${m.sender.split("@")[0]}
    ││WORKTYPE : ${WORK_TYPE}
    │╰──㋰
    │
    │╭──[ "INFO BOT"]──㋰
    ││BOTNAME : ${BOT_NAME}
    ││TIME : ${time}
    ││DATE : ${date}
    ││OWNER : ${OWNER_NAME}
    ││PREFIX : ${HANDLERS}
    ││HOSTNAME : ${hostname().split("-")[0]}
    │╰──㋰
    ╰───────────㋰\n`

            let buttons = [
                {
                    buttonId: "ping"
                    , buttonText: {
                        displayText: tiny("SPEED")
                    }
      , }
                , {
                    buttonId: "list"
                    , buttonText: {
                        displayText: tiny("LIST")
                    }
      , }
    ]
            let contextInfo = {
                externalAdReply: {
                    title: "AMAROK-MD"
                    , body: "TOXIC-TEAM"
                    , mediaType: 2
                    , thumbnail: 'https://telegra.ph/file/6086f101a36f7fc14bff6.png'
                    , mediaUrl: 'https://amarok-deploy.vercel.app'
                    , sourceUrl: 'https://amarok-deploy.vercel.app'
                    , showAdAttribution: true
                }
            }

            const listMessage = {
                image: {
                    url: 'https://telegra.ph/file/6086f101a36f7fc14bff6.png'
                , }
                , caption: tiny(menu)
                , footer: "amarok"
                , buttons: buttons
                , contextInfo: contextInfo
            }

            return await message.client.sendMessage(message.jid,
                listMessage, {
                    quoted: message
                })
        })
