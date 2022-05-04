<template>
    <div class="hotel">
        <div>
            <v-img  height="600" src="/img/exhotel.jpg" aspect-ratio="1.5"></v-img>
        </div>
        
        <div>
            <v-app>
        <v-card>
            <v-card-title class="text-center justify-center py-6">
            <h1 class="font-weight-bold text-h2 original_blue_color--text">
                HOTEL
            </h1>
            </v-card-title>

            <v-tabs
            v-model="tab"
            background-color="transparent"
            color="original_blue_color"
            grow
            >
                <v-tab  class="text-h6">
                    plan
                </v-tab>
                <v-tab  class="text-h6">
                    modelling
                </v-tab>
            
                <v-tab-item>
                <v-row class="mt-9 mb-9">
                    <v-col cols="12" sm="6" v-for="item in plan" :key="item.name">
                    <v-hover >
                        <v-card
                        elevation="6"
                        outlined
                        class="pa-5"
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
                    <v-hover>
                        <v-card
                        elevation="6"
                        outlined
                        class="pa-5"
                        
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
    </v-app>
    </div>
    </div>
</template>

<script>
export default {
    data : function() {
        return {
            tab: null,
            plan : [
                {
                    name :"평면도" ,
                    src : "./img/호텔/도면/호텔 평면도.PNG",
                    link : "./popup/hotelP-popup.html",
                },
                {
                    name :"평면도 컬러" ,
                    src : "./img/호텔/도면 컬러링/평면도 컬러링.PNG",
                    link : "./popup/hotelP-popup.html",
                },
                {
                    name :"천장도" ,
                    src : "./img/호텔/도면/호텔 천장도.PNG",
                    link : "./popup/hotelP-popup.html",
                },
                {
                },
                {
                    name :"호텔 입면도 A,B" ,
                    src : "./img/호텔/도면/호텔 입면도A,B.PNG",
                    link : "./popup/hotelP-popup.html",
                },
                {
                    name :"호텔 입면도 A,B 컬러" ,
                    src : "./img/호텔/도면 컬러링/입면AB 컬러링.PNG",
                    link : "./popup/hotelP-popup.html",
                },
                {
                    name :"호텔 입면도 C,D" ,
                    src : "./img/호텔/도면/호텔 입면도C,D.PNG",
                    link : "./popup/hotelP-popup.html",
                },
                {
                    name :"호텔 입면도 C,D 컬러" ,
                    src : "./img/호텔/도면 컬러링/입면CD 컬러링.PNG",
                    link : "./popup/hotelP-popup.html",
                },
            ],
            modelling : [
                {
                    name :"낮장면01" ,
                    src : "./img/호텔/렌더링/낮장면-01.PNG",
                    link : "./popup/hotelR-popup.html",
                },
                {
                    name :"낮장면02" ,
                    src : "./img/호텔/렌더링/낮장면-02.PNG",
                    link : "./popup/hotelR-popup.html",
                },
                {
                    name :"낮장면03" ,
                    src : "./img/호텔/렌더링/낮장면-03.PNG",
                    link : "./popup/hotelR-popup.html",
                },
                {
                    name :"낮장면04" ,
                    src : "./img/호텔/렌더링/낮장면-04.PNG",
                    link : "./popup/hotelR-popup.html",
                },
                {
                    name :"밤장면01" ,
                    src : "./img/호텔/렌더링/밤장면-01.PNG",
                    link : "./popup/hotelR-popup.html",
                },
                {
                    name :"밤장면02" ,
                    src : "./img/호텔/렌더링/밤장면-02.PNG",
                    link : "./popup/hotelR-popup.html",
                },
                {
                    name :"밤장면03" ,
                    src : "./img/호텔/렌더링/밤장면-03.PNG",
                    link : "./popup/hotelR-popup.html",
                },
                {
                    name :"밤장면04" ,
                    src : "./img/호텔/렌더링/밤장면-04.PNG",
                    link : "./popup/hotelR-popup.html",
                },
            ],
        }
    },
}
</script>

<style>

</style>
