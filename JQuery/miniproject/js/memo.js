const memoBoard = document.querySelector("#memo-board");

const savememo = ["미리만들어진 메모입니다",
"미리 만들어진 메모2입니다"];

for (let m of savememo){
    let memo = document.createElement("div");
    memoBoard.appendChild(memo);
    memo.innerHTML = m;
}


$("#memo-form").on("submit",function(e){
    e.preventDefault();

    const memo = $("#memo-form input:first").prop("value")+"<br>"+getClock();

    $("#memo-board").append(
        $("<div>").html(memo)
        );
    $("#memo-form input:first").prop("value"," ");
});

function delDiv(){
    let memo1 = document.getElementById("memo-board");
    let last = memo1.lastChild;
    last.remove();
}
