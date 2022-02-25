// getElementById를 이용하면 HTML의 아이디 값을 가져올수 있다
const loginForm = document.getElementById("login-form");
// 쿼리셀릭터는 CSS선택자를 이용해서 요소의 첫번째 태그를 선택할수있다 


//버튼을 눌렀을때  input 값 가져오기
//이벤트 리스너 : 이벤트가 발생하는지 듣고 있는 메소드 

const loginInput = document.querySelector("#login-form input");              
const loginBtn = document.querySelector("#login-form input[type='button']") 
const greeting = document.querySelector("#greeting");                       
const memoFormShow = document.querySelector("#memo-form");                 

//input 값 가져오는함수
function onLoginSumit(event){
    //loginput에서 value 값
    event.preventDefault(); //이벤트를 막는다

    //console.log(loginInput.value); //loginInput 안에 있는 속성값을 확인
    const username = loginInput.value;
    greeting.innerHTML = `반갑습니다. ${username}님`;
    /*let nik = document.getElementById("Nick").value;
    nik = "안녕하세요 "+nik+"님";
    document.getElementById("greeting").innerHTML = nik;*/
    loginForm.classList.add("hidden");  // loginform 에 css의 hidden 을 html에 추가해준다
    memoFormShow.classList.remove("hidden");   //메모장 숨김을 제거함 
}

loginForm.addEventListener("submit",onLoginSumit);

