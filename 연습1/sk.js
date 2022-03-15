  //pc와 태블릿으로 열었을때
$(document).on("mouseover focus",
"#gnb>ul>li>a", 
gnbPlay);

  //글로벌네비게이션바 여는 애니메이션
function gnbPlay() {
    const $ts = $(this);
      // PC와 태블릿일때
      /* 직접 작성할 공간 */
      //모든 보이는 서브메뉴를 닫는다
    $("#gnb ul ul:visible").slideUp(300);
      //현재 이벤트로 선택된 a태그(메뉴)의 형제(서브메뉴)를 보여준다
    $ts.next().stop(true,true).slideDown(300);

} 

  //pc와 태블릿으로 닫았을때
$(document).on("mouseleave",
"#gnb", gnbleave);

  //글로벌네비게이션바 닫는 애니메이션
function gnbleave() {
      /* 직접 작성할 공간 */
      // 보이는 전체 서브메뉴를 닫고
    $("#gnb ul ul:visible").slideUp(300);
}

