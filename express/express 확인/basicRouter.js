

const express = require("express");
const app = express();

app.get('/',function(request, response){
    response.send("router");
});

//params 값으로 페이지 생성
app.get("/page/:id",function(request,response){
    const id = request.params.id;
    response.send(`<h1>${request.params.id} page </h1>`);
});
//쿼리값으로 들고옴
app.get("/user", function(request, response){
    const user = request.query.user;
    response.send(`<h1>${user}page</h1>`);
});
//주소 /user/:id 를 이용하여 화면출력
app.get("/user/:id",function(request,response){
    const id = request.params.id;
    response.send(`<h1>${request.params.id} user page </h1>`);
});
//주소 /board 에 쿼리로
app.get("/board", function(request, response){
    const id = request.query.id;
    response.send(`<h1>${id} </h1>`);
});

//post : 값을 전달할 때 사용 > body

app.post("/user1", function(request,response){
    const user = request.body.user;
    console.log("post에 접근했습니다");
    response.send(`<h1> post ${user1} </h1>`);
});
app.put('/user', function(request,response){
    console.log("put으로 접근했습니다.");
    response.send("put으로 접근했습니다.")
});

app.delete('/user',function(request,response){
    console.log("delete로 접근했습니다");
    response.send("delete로 하였습니다");
});

app.listen(8080, function(){
    console.log("Server Runnig at http://127.0.0.1:8080");
});

