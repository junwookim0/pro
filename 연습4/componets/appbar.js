Vue.component('appbar-component',{
    template : 
    `
    <div>
        <v-app-bar  app color="black" dark fixed>
            <a href="../연습4/index.html" id="logo">
                <v-icon class="pr-1 mb-2">mdi-home</v-icon>
                <span>MY</span> <br>
                INTERIOR
            </a>
            
            <v-tabs  right color="brown lighten-3">
                <v-tab>HOME</v-tab>
                <v-tab>MODELING</v-tab>
                <v-tab>PORTFOLIO</v-tab>
            </v-tabs>
            
        </v-app-bar>
    </div>
    `,
    data : function() {
        return {
            
    
            
        }
    }
})