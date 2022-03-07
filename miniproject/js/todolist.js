const todoInput = document.querySelector("#memo-form input");
const todoButton = document.querySelector("#todo-button");
const todoBoard = document.querySelector("#todo-board");

todoButton.addEventListener("click",todoFormButton);


function todoFormButton(event){
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("click",todocheck);
    //내용
    const text = document.createTextNode(todoInput.value);

   
    
    /*  //x버튼 (아래에 appendChild 같이 활성화 해야함)
    const button = document.createElement("button");
    button.textContent = "x";
    button.addEventListener("click",del);
    function del(event){
        li.remove()
    }*/
    const img = document.createElement("img");
    location.origin + "http://127.0.0.1:5500/miniproject/img/iconx.png";   // location.origin 으로 주소값을 가져와야됨 임의로 할당
    img.src ="./miniproject/img/iconx.png";
    img.addEventListener("click",dele);
    function dele(){
        li.remove()
    }
    
    //li에 체크박스와 내용 x버튼 추가
    li.appendChild(checkbox);
    li.appendChild(text);
   // li.appendChild(button);  //x버튼 
    li.appendChild(img);
    
    
    //ul에 li추가
    todoBoard.appendChild(li);
    todoInput.value = "";
}

function todocheck(event){
    const checkbox = event.target;
    if(checkbox.checked){
        //체크박스가 checked되면 li의 색을 lightgray로 바꿈
        checkbox.parentNode.style.color = "gray";
    }else{
        checkbox.parentNode.style.color = "black";
    } 
    //체크박스가 false면 li 의 색을 black으로 바꿈
}

