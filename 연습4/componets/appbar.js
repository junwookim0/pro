Vue.component('appbar-component',{
    template : 
    `
    <div>
        <v-app-bar  app  fixed  height="100" id="appbar_font">

            <a href="../연습4/index.html" id="logo" class="ml-9" >
                <v-icon class="pr-1 mb-2" size="33px" id="holiday_village">holiday_village</v-icon>
                MY <br>
                INTERIOR
            </a>
            
            <v-spacer></v-spacer>
            
            <div class="hidden-sm-and-down">
                <v-btn text class="black--text ma-5" x-large href="../연습4/index.html" :ripple="false">
                    HOME
                </v-btn>
            
            
                <v-menu offset-y transition="slide-y-transition" open-on-hover>
                <template v-slot:activator="{ on, attrs }" >
                    <v-btn
                    text
                    v-bind="attrs"
                    v-on="on"
                    class="black--text ma-3"
                    width="150px"
                    x-large
                    :ripple="false"
                    
                    >
                    MODELING
                    </v-btn>
                </template>
        
                <v-list >
                    <v-list-item
                    v-for="(item, index) in MODELINGS"
                    :key="index"
                    :href="item.link"
                    id="appbar_font"
                    >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
                </v-menu>

            
            
                <v-menu offset-y transition="slide-y-transition" open-on-hover>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    text
                    v-bind="attrs"
                    v-on="on"
                    class="black--text ma-5"
                    width="150px"
                    x-large
                    :ripple="false"
                    >
                    PORTFOLIO
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item
                    v-for="(item, index) in PORTFOLIO"
                    :key="index"
                    id="appbar_font"
                    >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
                </v-menu>
            </div>
        
            

            <div class="hidden-md-and-up">
            
            <v-menu offset-y transition="slide-y-transition" open-on-hover>
            <template v-slot:activator="{ on, attrs }" >
            <v-btn icon v-bind="attrs"
            v-on="on">
                    <v-icon id="dots-vertical">mdi-dots-vertical</v-icon>
                </v-btn>
                </template>
        
                <v-list >
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
            

            
        </v-app-bar>
    </div>
    `,
    data : function() {
        return {
            expand : false,
            MODELINGS: [
                {
                    title:'HOTEL' , 
                    link : '../연습4/hotel.html'
                },
                {
                    title:'LIVING SPACE' , 
                    link : '../연습4/dwelling.html'},
                {
                    title:'CAFE' , 
                    link : '../연습4/Cafe.html'},
                {
                    title:'HAIRSHOP' , 
                    link : '../연습4/hairshop.html'}
            ],
            PORTFOLIO: [
                {
                    title : 'CAFE Remodeling',
                    link : '../연습4/hairshop.html'

                },

            ]
            
        }
    }
})