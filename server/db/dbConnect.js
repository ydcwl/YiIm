const mysql = require('mysql');
const config = require('./dbConfig');
let pool = mysql.createPool(config);

let query = (sql, data, cb) => {
  pool.getConnection((err, conn) => {
    if(err){
      console.log(err);
    }else{
      conn.query(sql, data, (qerr, vals, fields) => {
        conn.release();
        cb(qerr, vals, fields);
      })
    }
  })
}

module.exports.query = query;