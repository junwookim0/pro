new Vue({
    el : '#app',
    data : {
        id: [], 
        title : '',
        memo :'',
        memolist : [
            {id : 0 , title:"미리" , memo:"미리쓴메모0"},
            {id : 1 , title:"미리" , memo:"미리쓴메모1"},
            {id : 2 , title:"미리" , memo:"미리쓴메모2"},
        ]
    },
    methods : {
        addMemo : function(){
            this.memolist.push( {id: this.id , title: this.title ,memo: this.memo} );
            this.id++;
            this.title = '',
            this.memo="";
        },
        deleteMemo : function(id) {
            let index=0;
            this.memolist.forEach( (element, i) => {
                if(element.id ==id) {
                    index = i; 
                }
            });

            this.memolist.splice(index,1);
        },

    }

})