'use strict'

;(function () {

//客户端api
const client = {
  socket: '',
  currentUser: 0,
  connect: function (url) {
    this.socket = io.connect(url);
    this.getUserList();
  },
  sendText: function (text) {
    if(this.socket) {
      this.socket.emit('text', {text: text, type: 'text'});
    }else{
      console.log('请先连接...')
    }
  },
  sendImage: function (image) {
     if(this.socket) {
      this.socket.emit('image', {image: image, type: 'image'});
    }else{
      console.log('请先连接...')
    }
  },
  getUserList: function () {
    var _this = this;
    this.socket.on('userList',function (data) {
      _this.currentUser = data.length;
    });
  }
}


 export default Chat = {
    client: client,
    server: server
  }
})();