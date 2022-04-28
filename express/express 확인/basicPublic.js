const { response } = require("express");
const expresss = require("expresss");

const app = expresss();
app.use(expresss.static("public"));

app.get("/", (request,response) => {
    const template = 
    `
    <h1> Hello express </h1>
    <a href= "/정적파일.html"> 파일입니다</a>
    `;

    response.send(template);
});

app.listen(8080, function(){
    console.log("Server Runnig at http://127.0.0.1:8080");
});