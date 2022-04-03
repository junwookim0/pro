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
            <!-- sm = tablet size  xs = phone size -->
            <v-toolbar-item class="hidden-sm-and-down">
            <v-btn text class="white--text ma-5" href="../연습4/index.html">
                HOME
            </v-btn>
            
            
                <v-menu offset-y transition="slide-y-transition">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    text
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

            
            
                <v-menu offset-y transition="slide-y-transition">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    text
                    v-bind="attrs"
                    v-on="on"
                    class="white--text ma-5"
                    >
                    PORTFOLIO
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item
                    v-for="(item, index) in PORTFOLIO"
                    :key="index"
                    >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
                </v-menu>
            
            </v-toolbar-item>

            <v-toolbar-item class="hidden-md-and-up">
            <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </v-toolbar-item>

            
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
            PORTFOLIO: [
                {
                    title : '카페 리모델링',
                    link : '../연습4/hairshop.html'

                },

            ]
            
        }
    }
})