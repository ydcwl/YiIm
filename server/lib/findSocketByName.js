'use strict'

module.exports.findSocketByName = (userList, name) => {
  for(let u of userList){
    if(u.info.username === name) {
      return u.socket;
    }
  }
  return null;
}