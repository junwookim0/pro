Vue.component('memo-component', {
    props :['id'],
    template :
    `
    <div id="memo" v-if="checked" v-bind:class="lightgrayColor+'_style'">
    
        <h3>
            <input type="checkbox" v-model="checked">
            메모
            <button @click="deletememo">X</button>
        </h3>
        <slot></slot>
        <p>{{time}}</p>
    </div>
    <div id="memo" v-else v-bind:class="blackColor+'_style'">
    
        <h3>
            <input type="checkbox" v-model="checked">
            메모
            <button @click="deletememo">X</button>
        </h3>
        <slot></slot>
        <p>{{time}}</p>
    </div>`,
    
    data : function() {
        return  {
            time : new Date(),
            checked : false,
            blackColor : "black",
            lightgrayColor : "lightgray",
        }
    },
    methods :{
        deletememo : function(){
            this.$emit("delete", this.id );
        },
        
    }
})
