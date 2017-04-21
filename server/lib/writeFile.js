const fs = require('fs');
const path = require('path');

let url = path.resolve(__dirname, '../public/upload'); //缓存当前路径

let writeFile = (username, type, data) => {
  return new Promise((resolve, reject) => {
    let base64 = new Buffer(data, 'base64');
    fs.writeFile(url + '/' + username + '/' + type, base64, function (err) {
      if (err) {
        fs.mkdir(url + '/' + username, (err) => {
          if (err) console.log(err);
          writeFile(username, type, data).then(data=>resolve(data));
        })
      } else {
        resolve('/upload/' + username + '/' + type);
      }
    })
  });
}



module.exports.writeFile = writeFile;