<template>
    <div class="living">
        
        <div>
            <v-img  height="600" src="/img/living.jpg" aspect-ratio="1.5"></v-img>
        </div>
        
        <div>
        <v-card>
            <v-card-title class="text-center justify-center py-6">
            <h1 class="font-weight-bold text-h2 original_blue_color--text">
                LIVING SPACE
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
                <v-tab  class="text-h6">
                    ISO
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

                <v-tab-item >
                <v-row class="mt-9 mb-9">
                    <v-col cols="12" sm="6" v-for="item in ISO" :key="item.name">
                    <v-hover>
                        <v-card
                        elevation="6"
                        outlined

                        >
                            <a :href="item.link" target="_blank" class="black--text">
                                <v-img :src="item.src"></v-img>
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
                    src : "./img/아파트/도면/21평 아파트 평면도.PNG",
                    link : "./popup/livingP-popup.html",
                },
                {
                    name :"평면도 컬러" ,
                    src : "./img/아파트/도면 컬러링/21평 아파트 평면도.PNG",
                    link : "./popup/livingP-popup.html",
                },
                {
                    name :"천장도" ,
                    src : "./img/아파트/도면/21평 아파트 천장도.PNG",
                    link : "./popup/livingP-popup.html",
                },
                {
                    name :"" ,
                    src : "",
                    link : "#",
                },
                {
                    name :"입면도 A,B" ,
                    src : "./img/아파트/도면/21평 아파트 입면도A,B.PNG",
                    link : "./popup/livingP-popup.html",
                },
                {
                    name :"입면도 A,B 컬러" ,
                    src : "./img/아파트/도면 컬러링/21평 아파트 입면도A,B.PNG",
                    link : "./popup/livingP-popup.html",
                },
            ],
            modelling : [
                {
                    name :"낮장면01" ,
                    src : "./img/아파트/렌더링/낮장면 카메라-01.PNG",
                    link : "./popup/livingR-popup.html",
                },
                {
                    name :"낮장면02" ,
                    src : "./img/아파트/렌더링/낮장면 카메라-02.PNG",
                    link : "./popup/livingR-popup.html",
                },
                {
                    name :"낮장면03" ,
                    src : "./img/아파트/렌더링/낮장면 카메라-03.PNG",
                    link : "./popup/livingR-popup.html",
                },
                {
                    name :"낮장면04" ,
                    src : "./img/아파트/렌더링/낮장면 카메라-04.PNG",
                    link : "./popup/livingR-popup.html",
                },
                {
                    name :"밤장면01" ,
                    src : "./img/아파트/렌더링/밤장면1.PNG",
                    link : "./popup/livingR-popup.html",
                },
                {
                    name :"밤장면02" ,
                    src : "./img/아파트/렌더링/밤장면2.PNG",
                    link : "./popup/livingR-popup.html",
                },
                {
                    name :"밤장면03" ,
                    src : "./img/아파트/렌더링/밤장면3.PNG",
                    link : "./popup/livingR-popup.html",
                },
                {
                    name :"밤장면04" ,
                    src : "./img/아파트/렌더링/밤장면4.PNG",
                    link : "./popup/livingR-popup.html",
                },
            ],
            ISO : [
                {
                    name :"1" ,
                    src : "./img/아파트/아이소/21평 아파트 ISO-01.PNG",
                    link : "./popup/livingISO-popup.html",
                },
                {
                    name :"2" ,
                    src : "./img/아파트/아이소/21평 아파트 ISO-02.PNG",
                    link : "./popup/livingISO-popup.html",
                },
                {
                    name :"3" ,
                    src : "./img/아파트/아이소/21평 아파트 ISO-03.PNG",
                    link : "./popup/livingISO-popup.html",
                },
                {
                    name :"4" ,
                    src : "./img/아파트/아이소/21평 아파트 ISO-04.PNG",
                    link : "./popup/livingISO-popup.html",
                },
            ],
        }
    }
}
</script>