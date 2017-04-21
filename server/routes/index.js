var express = require('express');
var path = require('path');
var file = require('../lib/writeFile')
var db = require('../db/dbConnect');

var router = express.Router();

const SUCCESS = 200; //成功
const DB_ERROR = 500; //数据库操作失败
const FIEL_ERROR = 400; //文件操作失败


/* GET home page. */
router.get('/', function (req, res, next) {
  res.sendFile(path.resolve(__dirname, '../../client/dist/index.html'));
});

//登录
router.post('/login', (req, res, next) => {

  let name = req.body.name;
  let pw = req.body.pw;

  //数据库查询
  db.query('SELECT * FROM yuser WHERE username = ? AND password = ?', [name, pw], (err, val) => {
    if(err){
      console.log(err)
      res.json({code: DB_ERROR, userInfo: ''});
    }else{
      let userInfo = {
        id: val[0].id,
        name: val[0].username,
        image: val[0].userImage
      }
      res.json({code: SUCCESS, userInfo: userInfo});
    }
  })
});

//注册
router.post('/register', (req, res, next) => {
  let name = req.body.name;
  let pw = req.body.pw;
  let img = req.body.img;

  file.writeFile(name, 'header.png', img).then(data => {
    db.query('INSERT INTO yuser (username, password, userImage) VALUES (?,?,?)', [name, pw, data], (err, val) => {
      if (err) {
        res.json({code: DB_ERROR, id: ''});
      } else {
        res.json({code: SUCCESS, id: val.insertId});
      }
    })
  }).catch(err => {
    res.json({code: FIEL_ERROR, id: ''});
  })

});

//以id获取用户信息
router.get('/userInfo', (req, res, next) => {
  let id = req.query.id;
  //数据库查询
  db.query('SELECT * FROM yuser WHERE id = ?', [id], (err, val) => {
    if(err){
      console.log(err)
      res.json({code: DB_ERROR, userInfo: ''});
    }else{
      let userInfo = {
        id: val[0].id,
        name: val[0].username,
        image: val[0].userImage
      }
      res.json({code: SUCCESS, userInfo: userInfo});
    }
  })
})

//获取朋友列表
router.get('/friendList', (req, res, next) => {
  let id = req.query.id;

})


module.exports = router;