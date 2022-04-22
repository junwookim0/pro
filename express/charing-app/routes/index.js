var express = require('express');
var router = express.Router();
var path = require('path');
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('유저가 / 으로 접속하였습니다.');
  //res.sendFile(path.join(__dirname, "../public" , "index.html"));
  fs.readFile(path.join(__dirname, "../public" , "index.html"),
  function (err , data){
    if(err){
      res.send('에러')
    }else{
      res.writeHead(200, {'Content-Type' : 'text/html'});
      res.write(data);
      res.end(); //끝맺음
    }
  });
  //res.send('채팅서버에 접속하였습니다.')
});

module.exports = router;
