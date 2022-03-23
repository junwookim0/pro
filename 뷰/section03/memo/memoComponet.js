Vue.component('memo-component', {
    props :['id'],
    template :
    `<div class="memo">
        <h3>
            메모
            <button @click="deletememo">X</button>
        </h3>
        <slot></slot>
        <p>{{time}}</p>
        
    </div>`,
    data : function() {
        return  {
            time : new Date()
        }
    },
    methods :{
        deletememo : function(){
            this.$emit("delete", this.id );
        }
    }
})