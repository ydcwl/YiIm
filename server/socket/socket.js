'use strict'

//const findSocketByName = require('../lib/findSocketByName.js');
function findSocketByName(userList, name) {
  for(let u of userList){
    if(u.info.name === name) {
      return u.socket;
    }
  }
  return null;
}

let userList = [];
module.exports.use = (io) => {
  io.sockets.on('connection', (socket)=>{
    //记录当前连接的信息
    socket.on('login', (data) => {
      userList.push({socket: socket, info: data});
    })
    //console.log(userList);
    //单人聊天, data.type 为true则为单聊
    socket.on('chat', (data) => {
      console.log(data);
      if(data.type) {//单聊
        console.log(userList);
        let id = findSocketByName(userList, data.other.name).id;
        console.log(id);
        if(!data.img) {//文字
          socket.to(id).emit('recive', {text: data.text, user: data.self, type: 1, from: 2});
        }else{//图片
          socket.to(id).emit('recive', {img: data.img, user: data.self, type: 2, from: 2});
        }
      }else{//群聊

      }
    })


    // 当客户端双击，出发chat事件，发送自己用户名，对方用户名
    // 服务端接收到后，将自己加入房间 socket.join('房间名'),将对方加入同一房间利用 findSocketByName 找到对应的socket
    // 客户端每次发送都携带对方用户名

  })
}
