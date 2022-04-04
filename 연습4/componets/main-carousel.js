Vue.component('main-carousel',{
    template : 
    `
    <div>
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
            id="car"
        >
        <v-row
        class="fill-height"
        align="center"
        justify="center"
        >
        <div id="carouseltext">
        WE CREATE YOUR <br>
        <span class="ml-14">SPACE BETTER</span>
        </div>
        </v-row>

        </v-carousel-item>
    </v-carousel>
    </div>
    `,
    data : function() {
        return {
            slides: [
                {src : "./img/exhotel.jpg"},
                {src : "./img/미용실 모델링 리터치02.PNG"},
                {src : "./img/미용실 모델링 리터치03.PNG"},
                {src : "./img/미용실 모델링 리터치04.PNG"},
            ],
            
        }
    }
})