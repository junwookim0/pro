Vue.component('menu-component',{
    template : 
    `

    
    <div>
        <v-container>
            <v-row>
            <v-col cols="12" sm="6"  v-for="(p, index) in pictures" :key="index">
                <v-hover v-slot="{ hover }">
                    <v-card
                        :elevation="hover ? 12 : 2"
                    >
                        <v-img :src="p.src" aspect-ratio="1.5">
                        </v-img>
                    
                        <v-fade-transition>
                            <v-overlay
                                v-if="hover"
                                absolute
                                color="#dadada"
                                >
                            <v-btn :href="p.link" > {{p.name}} See more info</v-btn>
                        </v-overlay>
                        </v-fade-transition>
                    </v-card>
                </v-hover>
            </v-col>
            </v-row>
        </v-container>
    </div>


    `,
    data : function() {
        return {
            pictures: [
                { 
                    name :" 호텔" ,
                    src : "./img/exhotel.jpg",
                    link : "../연습4/hotel.html"
                },
                {
                    name :" 주거공간" ,
                    src : "./img/아파트/렌더링/밤장면1.PNG",
                    link : "../연습4/dwelling.html"
                },
                
                {
                    name :" 카페" ,
                    src : "./img/카페/모델링/카페01 내부-낮장면00.PNG",
                    link : "../연습4/Cafe.html"
                },
                {
                    name :" 헤어샵" , 
                    src : "./img/미용실/모델링/미용실 모델링 리터치02.PNG",
                    link : "../연습4/hairshop.html"
                },
            ],
            overlay:false,
            
        }
    }
})