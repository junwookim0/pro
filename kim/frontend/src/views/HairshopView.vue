<template>
    <div class="hairshop">
        <div>
            <v-img  height="600" src="/img/salon.jpg" aspect-ratio="1.5"></v-img>
        </div>
        <div>
        <v-card>
            <v-card-title class="text-center justify-center py-6">
            <h1 class="font-weight-bold text-h2 original_blue_color--text">
                HAIR SHOP
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
                    src : "./img/미용실/도면/헤어샵 평면도(작업용)-Model.PNG",
                    link : "./popup/hairshopP-popup.html",
                },
                {
                    name :"평면도 컬러" ,
                    src : "./img/미용실/도면 컬러링/헤어샵 평면도컬러링.jpg",
                    link : "./popup/hairshopP-popup.html",
                },
                {
                    name :"천장도" ,
                    src : "./img/미용실/도면/헤어샵 천장도(작업용)-Model.PNG",
                    link : "./popup/hairshopP-popup.html",
                },
                {
                },
                {
                    name :"입면도 A,B" ,
                    src : "./img/미용실/도면/헤어샵 평면도(작업용)-Model.PNG",
                    link : "./popup/hairshopP-popup.html",
                },
                {
                    name :"입면도 A,B 컬러" ,
                    src : "./img/미용실/도면 컬러링/헤어샵 입면A,B-컬러링.jpg",
                    link : "./popup/hairshopP-popup.html",
                },
                {
                    name :"입면도 C,D" ,
                    src : "./img/미용실/도면/헤어샵 입면C,D(작업용)-Model.PNG",
                    link : "./popup/hairshopP-popup.html",
                },
                {
                    name :"입면도 C,D 컬러" ,
                    src : "./img/미용실/도면 컬러링/헤어샵 입면C,D-컬러링.jpg",
                    link : "./popup/hairshopP-popup.html",
                },
            ],
            modelling : [
                {
                    name :"미용실 모델링01" ,
                    src : "./img/미용실/모델링/미용실 모델링 리터치01.PNG",
                    link : "./popup/hairshopR-popup.html",
                },
                {
                    name :"미용실 모델링02" ,
                    src : "./img/미용실/모델링/미용실 모델링 리터치02.PNG",
                    link : "./popup/hairshopR-popup.html",
                },
                {
                    name :"미용실 모델링03" ,
                    src : "./img/미용실/모델링/미용실 모델링 리터치03.PNG",
                    link : "./popup/hairshopR-popup.html",
                },
                {
                    name :"미용실 모델링04" ,
                    src : "./img/미용실/모델링/미용실 모델링 리터치04.PNG",
                    link : "./popup/hairshopR-popup.html",
                },
            ],
        }
    }
}
</script>