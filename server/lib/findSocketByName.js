'use strict'

module.exports.findSocketByName = function(userList, name) {
  for(let u of userList){
    if(u.info.username === name) {
      return u.socket;
    }
  }
  return null;
}