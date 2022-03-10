const todoBoard = document.querySelector("#todolistboard");
const todoBtn = document.querySelector("#todolistBtn");
const todoInput = document.querySelector("#todo-form input")
const p =document.querySelector("p");

todoBtn.addEventListener("click",todoB);

function todoB(){
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("click", todocheck);
    checkbox.addEventListener("click", ckd);

    const text = document.createTextNode(todoInput.value);

    const button = document.createElement("button");
    button.textContent = "x";
    button.addEventListener("click",del);
    function del(){
        li.remove()
        if(checkbox.checked){
            count--;
        }
        p.textContent=`오늘완료한일 : ${count}`;
    }


    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(button);
    todoBoard.appendChild(li);
    todoInput.value = "";
}
function todocheck(event){
    const checkbox = event.target;
    if(checkbox.checked){
        checkbox.parentNode.style.color = "gray";
    }else{
        checkbox.parentNode.style.color = "black";
    } 
}

let count =0;
function ckd(event){
    //count++;
    let p =document.querySelector("p");
    const checkbox = event.target;
    if(checkbox.checked){
        count++;   
    }
    else{
        count = count-1; //count = count-2;
    }
    p.textContent = `오늘완료한일 : ${count}`;
}