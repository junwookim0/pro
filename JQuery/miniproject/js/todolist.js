const todoInput = document.querySelector("#memo-form input");
const todoButton = document.querySelector("#todo-button");
const todoBoard = document.querySelector("#todo-board");


$("#todo-button").on("click",function(){
    const checkbox = $("<input>").prop("type","checkbox");
    checkbox.on("click",function(event){
        if(event.target.checked){
            checkbox.parent().css("color","lightgray");
        }
        else{
            checkbox.parent().css("color","black");
        }
});

//button 요소에 img 을 추가하여 버튼으로 사용
const button =$("<img>").attr("src","../img/del.png");  
location.origin + "http://127.0.0.1:5500/JQuery/miniproject/img/iconx.png"; 
button.on("click",function(event){
    event.target.parentNode.remove();
    /*  // event 대신에 제리쿼리 객체인 this를 통해서 현재 실행된 DOM을 가져올 수 있다 
    on("click",function(){
        $(this).parent().remove();
    })
    */
});
// 투두 리스트에 들어갈 내용을 input의 value 값을 prop으로 받아옴 
const todo = $("#memo-form input:first").prop("value")+"&nbsp;";
// append 를 사용 li 와 각각의 요소를 추가 해줌 (화면에 나타냄)
$("#todo-board").append($("<li>").append(checkbox)
.html(todo).append(button));
//html()을  사용하면 "<br>" 과 같은 html요소를 사용할수 있다
});