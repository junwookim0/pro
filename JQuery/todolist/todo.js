let count ;             //$("li").length;  새로생성되는 li에는 적용 안됨 

$("#todolistBtn").on("click",function(){
    const checkbox = $("<input>").prop("type","checkbox");
    count = $("li").length+1;
    $("#listsum").text(`남은일 : ${count}`);


    checkbox.on("click",function(event){
        if(event.target.checked){
            checkbox.parent().css("color","lightgray");
            count--;
        }
        else{
            checkbox.parent().css("color","black");
            count++;
        }
        $("#listsum").text(`남은일 : ${count}`);
       // document.querySelector("#listsum").textContent = `남은일 :${count}`;
    });
    
    const button =$("<button>").text("x");
    button.on("click",function(event) {
        checkbox.parent().remove();
        if(event.target.checked){
            count = count+2;
        }
        else{
            count--;
        }
        $("#listsum").text(`남은일 : ${count}`);
    });
    
    
const todo = $("#todo-form input:first").prop("value");
$("#todolistboard").append($("<li>").append(checkbox)
.append(todo).append(button));

});