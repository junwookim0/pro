
const express = require("express");
const app = express();

app.get('*',(request, response) => {
    //응답코드값 > 200 : ok, 404: 페이지 x 
    
    response.type("text/plain")
    response.set('methodA','abcd');
    response.send('임의로 바꾼 설정 입니다');
});

app.get("/redirect", (request, response) => {
    response.redirect("http://naver.com");
});

app.get("/", (request, response) => {
    // npm istall -g nodemon 으로 노드몬 설치 
    //현재폴더에서 바로 있다면  노드몬을 실행할js파일 nodemon reponse.js
    response.send('노드몬으로 실행한 결과입니다');
});


app.listen(8081, function(){
    console.log("Server Runnig at http://127.0.0.1:8081");
});

