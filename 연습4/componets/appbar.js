Vue.component('appbar-component',{
    template : 
    `
    <div>
        <v-app-bar  app color="brown lighten-3" dark fixed>
        
            <a href="../연습4/index.html" id="logo">
                <v-icon class="pr-1 mb-2">mdi-home</v-icon>
                <span>MY</span> <br>
                INTERIOR
            </a>
            
            <v-spacer></v-spacer>
            
            
                                
            
            <v-btn color="transparent" class="white--text ma-5" href="../연습4/index.html">
                HOME
            </v-btn>
            
            <div class="text-center">
                <v-menu offset-y transition="slide-y-transition">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    color="transparent"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    class="white--text ma-5"
                    >
                    MODELING
                    </v-btn>
                </template>
        
                <v-list class="brown lighten-3">
                    <v-list-item
                    v-for="(item, index) in MODELINGS"
                    :key="index"
                    :href="item.link"
                    >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
                
                </v-menu>
            </div>
            <div class="text-center">
                <v-menu offset-y transition="slide-y-transition">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    color="transparent"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    class="white--text ma-5"
                    >
                    PORTFOLIO
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item
                    v-for="(item, index) in ORTFOLIO"
                    :key="index"
                    >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
                </v-menu>
            </div>

            
        </v-app-bar>
    </div>
    `,
    data : function() {
        return {
            expand : false,
            MODELINGS: [
                {
                    title:'호텔' , 
                    link : '../연습4/hotel.html'
                },
                {
                    title:'주거공간' , 
                    link : '../연습4/dwelling.html'},
                {
                    title:'카페' , 
                    link : '../연습4/Cafe.html'},
                {
                    title:'미용실' , 
                    link : '../연습4/hairshop.html'}
            ],
            ORTFOLIO: [
                {
                    title : '카페 리모델링',
                    link : '../연습4/hairshop.html'

                },

            ]
            
        }
    }
})