//사용할 변수
let ran = 0;
let count = 0;

//윈도우가 로드된 후 실행하기위함.
$( function () {
    $("#start_button").on("click",function(){
        ran = Math.floor(Math.random()*100+1);
        $("#game_form").children().prop("disabled",false);
        $("#explan").text("게임이 시작되었습니다. 1~100사이의 수를 입력하세요");
        const r  =Math.floor(Math.random()*256);
        const g  =Math.floor(Math.random()*256);
        const b  =Math.floor(Math.random()*256);
        $("#start_button").css("backgroundColor", `rgb(${r},${g},${b})`)
    });

    $("#game_form").on("submit",function(e){
        e.preventDefault();
        //DOM값 들고오기
        count++;
        const userNumV = $("#user_num").prop("value");
        console.log("userNumV")
    
        //if문으로 이용해서 비교 
        if( userNumV< ran){
            $("#explan").text(`${userNumV}보다 up`);
            
        }
        else if(userNumV > ran ){
            $("#explan").text(`${userNumV}보다 down`);
            
        }
        else if(userNumV == ran){
            $("#explan").text(`${userNumV}정답입니다`);
            $("#game_form").children().prop("disabled",true);
            let name = prompt("이름을 입력해주세요");
            $("#log").append($("<li>").text(`${name}님 ${count}회 성공`));
        }
        else {
            alert("잘못된 값을 입력하셨습니다");
        }
        $("#result").text(`시도횟수는 ${count}`);
        $("#user_num").prop("value","");
    });
    $("#game_form").children().prop("disabled",true);
    $("#reset_button").on("click",reset);
});
    /*
    // 원하는 객체 불러오기
    const startButton = document.querySelector("#start_button");
    const resetButton = document.querySelector("#reset_button");
    const gameForm = document.querySelector("#game_form");
    gameForm.firstElementChild.disabled = true;
    gameForm.lastElementChild.disabled = true;

    // 원하는 객체에 이벤트 리스너 호출
    startButton.addEventListener('click', gameStart);
    gameForm.addEventListener('submit', gameCheck);
    resetButton.addEventListener('click', reset);
    */






// 게임 시작
// 랜덤 숫자를 할당하고 count값 및 창의 내용 초기화
function gameStart () {
    ran = Math.floor(Math.random()*100+1);
    //입력받는 fomr(submit)
    const gameForm = document.querySelector("#game_form");
    gameForm.firstElementChild.disabled = false;
    gameForm.lastElementChild.disabled = false;
    
    //explan의 내용 수정
    const explan = document.querySelector("#explan");
    explan.textContent = "게임이 시작되었습니다. 1~100사이의 수를 입력하세요"
    
    
}

//랜덤 숫자와 입력된 값 확인
function gameCheck(e) {
    //submit 으로 들고오면 창 새로고침이 발생
    e.preventDefault();
    //DOM값 들고오기
    const explan = document.querySelector("#explan");
    const userNum = document.querySelector("#user_num");
    const result = document.querySelector("#result");
    count++;

    //DOM 값으로 ran 값 비교 
    let userNumV = userNum.value;

    //if문으로 이용해서 비교 
    if( userNumV< ran){
        ("#explan").text(`${userNumV}보다 up`);
        
    }
    else if(userNumV > ran ){
        
        explan.textContent =`${userNumV}보다 down`;
    }
    else if(userNumV == ran){
        explan.textContent =`${userNumV}정답입니다`;
        userNum.disabled = true;             
        userNum.nextSibling.disabled =true;

        let name = prompt("이름을 입력해주세요");

        const li = document.createElement("li");
        document.querySelector("#log").appendChild(li);
        li.textContent =`${name}님 ${count}회 성공`

        
    }
    else {
        alert("잘못된 값을 입력하셨습니다");
    }

    result.textContent = `시도횟수는 ${count}`;
}
function reset(){
    const explan = document.querySelector("#explan");
    const result = document.querySelector("#result");
    count=0;
    ran = Math.floor(Math.random()*100+1);
    result.textContent = `시도횟수는 ${count}`;
    explan.textContent = "재시작";
}

