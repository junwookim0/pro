
new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: () => ({
                    slides: [
                        {
                        title: 'Slide #1',
                        content: 'Slide content.'
                        }
                    ]
        })
        
    })

    import { VueperSlides, VueperSlide } from 'vueperslides'
    import 'vueperslides/dist/vueperslides.css'
    export default {
    components: { VueperSlides, VueperSlide },
    }
