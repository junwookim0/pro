new Vue({
    el : '#app',
    data : {
        id: 0, // 메모의 개인값을 알기위함.
        memo :'',
        memolist : []
    },
    methods : {
        addMemo : function(){
            this.memolist.push( {id: this.id , memo: this.memo} );
            this.id++;
            this.memo="";
        },
        deleteMemo : function(id) {
            //memolist의 아이디를 지움
            
            let index=0;
            //forech구문 : 배열의 요소값을 하나씩 함수에 넣어서 실행
            this.memolist.forEach( (element, i) => {
                //요소의 id와 가져온 id가 동일하다면 index값 할당
                if(element.id ==id) {
                    index = i;
                }
            });
            //가져온 인덱스 값을 이용해서 삭제
            this.memolist.splice(index,1);
        }
    }

})