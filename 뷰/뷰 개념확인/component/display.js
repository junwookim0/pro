Vue.component('display', {
    props : [],
    template : `
    <div>
    <img v-bind:src="img">
    <h3>Galaxy S22 Ultra</h3>
    <p>
        디스플레이 : 178.55mm <br>
        CPU종류 : Octa-Core
    </p>

    </div>
    `,
    data : function(){
        return{
            img : "//images.samsung.com/kdp/goods/2022/01/26/6b5a0d0f-b99d-414c-bb62-a4696d276a5a.png?$PF_PRD_KDP_PNG$",

        }
    },
    methods : {
        
        
    },
})