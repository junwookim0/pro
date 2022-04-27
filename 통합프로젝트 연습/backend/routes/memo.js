//4. 새로운 라우터 생성
//memo와 관련된 모든 주소를 작성하기위함
var express = require('express');
var router = express.Router();
//5. DB대신 사용하기 위한 JSON 데이터 드록옴
const memos = require('../memo.json');

// "/" 주소로 되어있지만 실제 주소는 "/api/memo"
// > app.js 에서 라우터를 가져올 때 앞에 붙을 주소를 정해줌 

router.get("/", function (req, res, next) {
    // 6. 가져온 memos를 콘솔에 출력하고 res.send를 통해 보냄
    console.log(memos);
    res.send(memos);
    /**
     * (4) AboutView에서 axios로 보낸 request를 받고
     * (5) memos의 값을 response 를 통해 보내줌
     */
});
router.post("/", function(req, res, next) {
    console.log(req.body);
    const title = req.body.data.title;
    const memo = req.body.data.memo;
    const writer = req.body.data.writer;
    const id = memos.length //메모가 삭제되지않을 경우 사용 가능 
    const memoboard = {
        id: id+1,
        title : title,
        memo : memo,
        writer : writer
    }

    memos.push(memoboard);
    res.send('ok');

});

// /api/memo/:id (:id 와 같은 : 콜론 기호를 붙이는 곳은 라우터에서만)
/*
    동일한 id값을 받아왔다면 id값과 같은 memo만 res통해서 보내주고
    filter 또는 인덱스값을 이용해서 원하는값 표시 
*/
router.get('/:id', function(req, res, next) {
    //6. 가져온 memos를 콘솔에 출력하고 res.send를 통해 보냄
    const m = memos.filter( memo => memo.id == req.params.id);
    // 필터를 통해 memos의 배열의 값을 memo에 넣어서
    // memo의 id값과 req.params.id 값이 같을떄(true) m배열에 넣어줌 
    res.send(m[0]);

    /*
        [4] AboutView에서 axios로 보낸 request를 받고
        [5] memos의 값을 response 를 통해 보내줌 
    */
});

module.exports = router;
