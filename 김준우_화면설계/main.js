new Vue({
    el : '#app',
    data : {
        id:0,
        title : '',
        memo :'',
        memolist : [
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