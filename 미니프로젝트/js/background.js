const bodyBackground = document.querySelector("body"); //
const images = ["1.jpg","2.jpg","3.jpg"];
// let index = Math.floor(Math.random()*images.length);
// const choseImage = images[index];

const choseImage = images[Math.floor(Math.random()*images.length)];   //배경이미지 배열에서 랜덤으로 선택해서 표시

// css style을 이용해서 bodyBackground 에 추가
bodyBackground.style.background = `url(./미니프로젝트/img/${choseImage})`; //이미지 파일이름 추가 배열로 
