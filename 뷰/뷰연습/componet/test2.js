Vue.component('show1-picture',{
    template :
    `
    <div>
        <slot  name="cat" v-bind:catsname="catname"></slot>
    </div>
    `,
    data : function(){
        return {
            //1.속성의 값을 객체의 배열로 전달했을때 이름 출력하기
            //2. 부모에서 이미지 태그에 src값을 넣어 이미지 출력하기
            catname : [
                { name:'이름 : 모모' , src:"../img/cat2.jpg",explanation:"설명"}
            ],
        }
    },
})