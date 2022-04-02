Vue.component('menu-component',{
    template : 
    `
    <!--
    <div>
        <v-container>
            <v-row>
            <v-col cols="12" sm="6" v-for="(p, index) in pictures" :key="index">
                <v-img class="menu_btn" :src="p.src" aspect-ratio="1.5">
                <button id="linkbtn" :href="p.link">{{p.name}}</button>
                </v-img>
            </v-col>
            </v-row>
        </v-container>
    </div>
    -->
    <div>
        <v-container>
            <v-row>
            <v-col cols="12" sm="6">
                <a href="../연습4/hotel.html"><v-img class="menu_btn" src="./img/미용실 모델링 리터치04.PNG" aspect-ratio="1.5"></v-img> </a>
            </v-col>
            <v-col cols="12" sm="6">
                <a href="../연습4/dwelling.html"> <v-img class="menu_btn" src="./img/미용실 모델링 리터치04.PNG" aspect-ratio="1.5"></v-img> </a>
            </v-col>
            <v-col cols="12" sm="6">
                <a href="../연습4/Cafe.html"> <v-img class="menu_btn" src="./img/미용실 모델링 리터치04.PNG" aspect-ratio="1.5"></v-img> </a>
            </v-col>
            <v-col cols="12" sm="6">
                <a href="../연습4/hairshop.html"> <v-img class="menu_btn" src="./img/미용실 모델링 리터치04.PNG" aspect-ratio="1.5"></v-img> </a>
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
                    src : "./img/미용실 모델링 리터치04.PNG",
                    link : "../연습4/hotel.html"
                },
                {
                    name :" 주거공간" ,
                    src : "./img/미용실 모델링 리터치02.PNG",
                    link : "#"
                },
                
                {
                    name :" 카페" ,
                    src : "./img/미용실 모델링 리터치03.PNG",
                    link : "#"
                },
                {
                    name :" 헤어샵" , 
                    src : "./img/미용실 모델링 리터치01.PNG",
                    link : "#"
                },
                

            ],
            
        }
    }
})