Vue.component('main-carousel',{
    template : 
    `
    <div id="carouselp">

        <div>
            <span id="uptext">01</span>  What we do  
        </div>

        <div class="mt-5">
            <v-carousel
                cycle
                height="800"
                hide-delimiter-background
                show-arrows-on-hover
                interval="6000"
            >
                <v-carousel-item
                    v-for="(slide, i) in slides"
                    :key="i"
                    :src="slide.src"
                >

                </v-carousel-item>
            </v-carousel>
        </div>
    </div>
    `,
    data : function() {
        return {
            slides: [
                {src : "./img/아파트/아파트낮01.PNG"},
                {src : "./img/아파트/아파트낮02.PNG"},
                {src : "./img/아파트/아파트낮03.PNG"},
                {src : "./img/아파트/아파트낮04.PNG"},
            ],
            
        }
    }
})