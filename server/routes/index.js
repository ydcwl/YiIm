var express = require('express');
var path = require('path');
var file = require('../lib/writeFile')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.resolve(__dirname, '../../client/dist/index.html'));
});
router.post('/login', (req, res, next) => {
  //数据库查询
  res.json({name: 'cwl', id: 1, error_code: 200});
});
router.post('/register', (req, res, next) => {
  let name = req.body.name;
  let pw = req.body.pw;
  let img = req.body.img;

  file.writeFile(name, 'header.png', img).then(data=>{
    console.log(data);
  }).catch(err=>{
    console.log(err);
  })

});


module.exports = router;
