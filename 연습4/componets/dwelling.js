Vue.component('dwelling-component',{
    template : 
    `
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
                <v-tab>
                    plan
                </v-tab>
                <v-tab>
                    modelling
                </v-tab>
                <v-tab>
                    ISO
                </v-tab>
            
                <v-tab-item>
                <v-row class="mt-9 mb-9">
                    <v-col cols="12" sm="6" v-for="item in plan" :key="item.name">
                    <v-hover v-slot="{ hover }">
                        <v-card
                        elevation="6"
                        outlined
                        class="pa-5"
                        color="grey lighten-1"
                        :elevation="hover ? 12: 2"
                        >
                            <v-img :src="item.src"></v-img>
                            <v-card-title class="title"> {{ item.name }} </v-card-title>
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
                        color="grey lighten-1"
                        :elevation="hover ? 12: 2"
                        >
                            <v-img :src="item.src"></v-img>
                            <v-card-title class="title"> {{ item.name }} </v-card-title>
                        </v-card>
                        </v-hover>
                    </v-col>
                </v-row>
                </v-tab-item>

                <v-tab-item >
                <v-row class="mt-9 mb-9">
                    <v-col cols="12" sm="6" v-for="item in ISO" :key="item.name">
                    <v-hover v-slot="{ hover }">
                        <v-card
                        elevation="6"
                        outlined
                        color="grey lighten-1"
                        :elevation="hover ? 12: 2"
                        >
                            <v-img :src="item.src"></v-img>
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
                    src : "./img/아파트/도면/21평 아파트 평면도.PNG",
                },
                {
                    name :"천장도" ,
                    src : "./img/아파트/도면/21평 아파트 천장도.PNG",
                },
                {
                    name :"입면도 A,B" ,
                    src : "./img/아파트/도면/21평 아파트 입면도A,B.PNG",
                },
            ],
            modelling : [
                {
                    name :"낮장면01" ,
                    src : "./img/아파트/렌더링/낮장면 카메라-01.PNG",
                },
                {
                    name :"낮장면02" ,
                    src : "./img/아파트/렌더링/낮장면 카메라-02.PNG",
                },
                {
                    name :"낮장면03" ,
                    src : "./img/아파트/렌더링/낮장면 카메라-03.PNG",
                },
                {
                    name :"낮장면04" ,
                    src : "./img/아파트/렌더링/낮장면 카메라-04.PNG",
                },
                {
                    name :"밤장면01" ,
                    src : "./img/아파트/렌더링/밤장면1.PNG",
                },
                {
                    name :"밤장면02" ,
                    src : "./img/아파트/렌더링/밤장면2.PNG",
                },
                {
                    name :"밤장면03" ,
                    src : "./img/아파트/렌더링/밤장면3.PNG",
                },
                {
                    name :"밤장면04" ,
                    src : "./img/아파트/렌더링/밤장면4.PNG",
                },
            ],
            ISO : [
                {
                    name :"1" ,
                    src : "./img/아파트/아이소/21평 아파트 ISO-01.PNG",
                },
                {
                    name :"2" ,
                    src : "./img/아파트/아이소/21평 아파트 ISO-02.PNG",
                },
                {
                    name :"3" ,
                    src : "./img/아파트/아이소/21평 아파트 ISO-03.PNG",
                },
                {
                    name :"4" ,
                    src : "./img/아파트/아이소/21평 아파트 ISO-04.PNG",
                },
            ],
        }
    
        
    }
})