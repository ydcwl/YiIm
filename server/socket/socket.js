'use strict'

module.exports.use = (io) => {
  io.sockets.on('connection', (socket)=>{
    socket.emit('open', 'haha');
  })
}
