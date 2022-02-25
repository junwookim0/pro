const memoBoard = document.querySelector("#memo-board");

const memoForm = document.querySelector("#memo-form");
const memoInput = document.querySelector("#memo-form input");

const savememo = ["미리만들어진 메모입니다",
"미리 만들어진 메모2입니다","미리 만들어진 메모3입니다",
"미리 만들어진 메모4입니다","미리 만들어진 메모5입니다"];

for (let m of savememo){
    let memo = document.createElement("div");
    memoBoard.appendChild(memo);
    memo.innerHTML = m;
}
function memoFormSubmit(event){
    event.preventDefault();
    console.log(memoInput.value);

    //새로운 요소 (태그)를 만들어서 memo
    let memo = document.createElement("div");

    // memoBoard에 요소추가
    memoBoard.appendChild(memo); //appendChild >>메모에 추가
    //추가된 memo 요소에 html 값 추가
    memo.innerHTML = memoInput.value;  //사용자 입력값 
    memoInput.value ="";
    console.dir(memoInput);
    memoInput.autofocus = true;  //자동으로 정렬 안써도 기본설정 true
}

memoForm.addEventListener("submit", memoFormSubmit);

