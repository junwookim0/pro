Vue.component('memo-component', {
    props :['id'],
    template :
    `
    <div id="memo" v-if="checked" v-bind:class="lightgrayColor+'_style'">
    
        <h3>
            <input type="checkbox" v-model="checked">
            <slot name="titles"></slot>
            <button @click="deletememo">X</button>
        </h3>
        <slot name="memolst"></slot>
        <hr>
        <p>{{timey}} {{timem}}  {{timed}}</p>
    </div>
    <div id="memo" v-else v-bind:class="blackColor+'_style'">
    
        <h3>
            <input type="checkbox" v-model="checked">
            <slot name="titles"></slot>
            <button @click="deletememo">X</button>
        </h3>
        <slot name="memolst"></slot>
        <hr>
        <p>{{timey}} {{timem}}  {{timed}}</p>
    </div>`,
    
    data : function() {
        return  {
            timey : new Date().getFullYear()+'년',
            timem : new Date().getMonth()+'월',
            timed : new Date().getDate()+'일',
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
