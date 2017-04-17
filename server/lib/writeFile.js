const fs = require('fs');
const path = require('path');

let writeFile = (userName, type, data) => {
  return new Promise( (res, rej) => {
    let imgPath = path.resolve(__dirname, '../public/upload/'+userName+'/'+type);
    fs.writeFile(imgPath, data, 'base64', (err) => {
      if(err){
        rej(err)
      }else{
        let str = '/upload/'+userName+'/'+type;
        res(str);
      }
    })
  })
}

module.exports.writeFile = writeFile;