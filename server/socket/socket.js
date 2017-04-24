'use strict'
var userList = [];
module.exports.use = (io) => {
  io.sockets.on('connection', (socket)=>{
    userList.push({id: socket.id});
    console.log(userList);
  })
}
