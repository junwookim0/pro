Vue.component('main-carousel',{
    template : 
    `
    <div id="carouselp" class="textfont">

        <div>
            <span id="uptext">01</span>  What I can do  
        </div>

        <div class="mt-5">
        
            <v-carousel
                cycle
                height="600"
                
                hide-delimiter-background
                show-arrows-on-hover
                interval="6000"
            >
                <v-carousel-item
                    v-for="(slide, i) in slides"
                    :key="i"
                    :src="slide.src"
                    lazy-src
                    width="1150"
                >

                </v-carousel-item>
                
            </v-carousel>
        </div>
    </div>
    `,
    data : function() {
        return {
            slides: [
                {src : "./img/아파트/렌더링/낮장면 카메라-01.PNG"},
                {src : "./img/아파트/렌더링/낮장면 카메라-01.PNG"},
                {src : "./img/아파트/렌더링/낮장면 카메라-01.PNG"},
                {src : "./img/아파트/렌더링/낮장면 카메라-01.PNG"},
            ],
            
        }
    }
})