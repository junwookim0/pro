Vue.component('cafe-component',{
    template : 
    `
    <div>
        <v-card>
            <v-card-title class="text-center justify-center py-6">
            <h1 class="font-weight-bold text-h2 original_blue_color--text">
                CAFE
            </h1>
            </v-card-title>

            <v-tabs
            v-model="tab"
            background-color="transparent"
            color="original_blue_color"
            grow
            >
                <v-tab>
                    plan
                </v-tab>
                <v-tab>
                    modelling
                </v-tab>
            
                <v-tab-item>
                <v-row class="mt-9 mb-9">
                    <v-col cols="12" sm="6" v-for="item in plan" :key="item.name">
                    <v-hover v-slot="{ hover }">
                        <v-card
                        elevation="6"
                        outlined
                        class="pa-5"
                        :elevation="hover ? 12: 2"
                        >
                            <a :href="item.link" target="_blank" class="black--text">
                                <v-img :src="item.src"></v-img>
                                <v-card-title class="title"> {{ item.name }} </v-card-title>
                            </a>    
                        </v-card>
                        </v-hover>
                    </v-col>
                </v-row>
                </v-tab-item>

                <v-tab-item>
                <v-row class="mt-9 mb-9">
                    <v-col cols="12" sm="6" v-for="item in modelling" :key="item.name">
                    <v-hover v-slot="{ hover }">
                        <v-card
                        elevation="6"
                        outlined
                        class="pa-5"
                        :elevation="hover ? 12: 2"
                        >
                        <a :href="item.link" target="_blank" class="black--text">
                            <v-img :src="item.src"></v-img>
                            <v-card-title class="title"> {{ item.name }} </v-card-title>
                        </a>
                        </v-card>
                        </v-hover>
                    </v-col>
                </v-row>
                </v-tab-item>
                
            </v-tabs>
        </v-card>
    </div>
    `,
    data : function() {
        return {
            tab: null,
            plan : [
                {
                    name :"평면도" ,
                    src : "./img/카페/도면/카페01-평면도.PNG",
                    link : "./popup/cafeP-popup.html",
                },
                {
                    name :"평면도 컬러" ,
                    src : "./img/카페/도면 컬러링/카페 컬러링 1.PNG",
                    link : "./popup/cafeP-popup.html",
                },
                {
                    name :"천장도" ,
                    src : "./img/카페/도면/카페01-천장도.PNG",
                    link : "./popup/cafeP-popup.html",
                },
                {
                    
                },
                {
                    name :"입면도 A,B" ,
                    src : "./img/카페/도면/카페01-입면A,B.PNG",
                    link : "./popup/cafeP-popup.html",
                },
                {
                    name :"입면도 A,B 컬러" ,
                    src : "./img/카페/도면 컬러링/카페 컬러링 2.PNG",
                    link : "./popup/cafeP-popup.html",
                },
                {
                    name :"입면도 C,D" ,
                    src : "./img/카페/도면/카페01-입면C,D.PNG",
                    link : "./popup/cafeP-popup.html",
                },
                {
                    name :"입면도 C,D 컬러" ,
                    src : "./img/카페/도면 컬러링/카페 컬러링 3.PNG",
                    link : "./popup/cafeP-popup.html",
                },
            ],
            modelling : [
                {
                    name :"낮 내부 장면01" ,
                    src : "./img/카페/모델링/카페01 내부-낮장면00.PNG",
                    link : "./popup/cafeR-popup.html",
                },
                {
                    name :"낮 내부 장면02" ,
                    src : "./img/카페/모델링/카페01 내부-낮장면01 .PNG",
                    link : "./popup/cafeR-popup.html",
                },
                {
                    name :"낮 외부 장면01" ,
                    src : "./img/카페/모델링/카페01 외부-낮00.PNG",
                    link : "./popup/cafeR-popup.html",
                },
                {
                    name :"낮 외부 장면02" ,
                    src : "./img/카페/모델링/카페01 외부-낮01.PNG",
                    link : "./popup/cafeR-popup.html",
                },
                {
                    name :"낮 외부 장면03" ,
                    src : "./img/카페/모델링/카페01 외부-낮02.PNG",
                    link : "./popup/cafeR-popup.html",
                },
                {
                    name :"밤 내부 장면01" ,
                    src : "./img/카페/모델링/카페01 내부-밤장면00.PNG",
                    link : "./popup/cafeR-popup.html",
                },
                {
                    name :"밤 내부 장면02" ,
                    src : "./img/카페/모델링/카페01 내부-밤장면01.PNG",
                    link : "./popup/cafeR-popup.html",
                },
                {
                    name :"밤 내부 장면03" ,
                    src : "./img/카페/모델링/카페01 내부-밤장면02.PNG",
                    link : "./popup/cafeR-popup.html",
                },
                {
                    name :"밤 외부 장면01" ,
                    src : "./img/카페/모델링/카페01 외부-밤00.PNG",
                    link : "./popup/cafeR-popup.html",
                },
                {
                    name :"밤 외부 장면02" ,
                    src : "./img/카페/모델링/카페01 내부-밤장면01.PNG",
                    link : "./popup/cafeR-popup.html",
                },
            ],
        }
    }
})