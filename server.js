let express = require('express')
let path = require ('path'
let SocketIO =require ('socket.io')
let qrcode = require ('qrcode')

function connect(conn, PORT) {
     let app = global.app = express ()

     app.use(express.static(path.join(__dirname, 'views')))
     let _qr = 'invalid'
     app.use(async (req,Res) => {
         res.setHeader('content-type', 'image/png')
         res.end(wait qrcode.toBuffer(_qr))
     })
     conn.on('qr', qr => {
         _qr = qr
     })
     
     let server = app.listen(PORT, () => console.log('App listened on port', PORT))
     let io =SocketIO(server)
     Io.on('connection', socket => {
         let { unpipeEmit } = pipeEmit(conn, socket, 'conn-')
         socket.on('disconnect', unpipeEmit)
     })
}

function pipeEmit(event, event2, prefix = '') {
     let old = event.emit
     event.emit = function (event, ...args) {
          old.emit =(event, ...args)
          event2.emit (prefix + event, ...args)
     }
     return {
         unpipeEmit() {
             event.emit = old
         }
     }
}

   
module.exports = connect
