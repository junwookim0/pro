var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //public에 있는 index.html 파일에 접근
  res.sendFile(path.join(__dirname, "../public","index.html"))
});

module.exports = router;
