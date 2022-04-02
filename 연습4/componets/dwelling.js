Vue.component('dwelling-component',{
    template : 
    `
    <template>
        <v-card>
            <v-card-title class="text-center justify-center py-6">
            <h1 class="font-weight-bold text-h2">
                LIVING SPACE
            </h1>
        </v-card-title>

        <v-tabs
        v-model="tab"
        background-color="transparent"
        color="black"
        grow
        >
            <v-tab
            v-for="item in items"
            :key="item"
            >
                {{ item }}
            </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
            <v-tab-item
            v-for="item in items"
            :key="item"
            >
                <v-card
                color="white"
                flat
                >
                    <v-card-text>{{ text }}</v-card-text>
                    </v-card>
            </v-tab-item>
        </v-tabs-items>
        </v-card>
    </template>
    `,
    data : function() {
        return {
            tab: null,
            items: [
                    'Appetizers', 'Entrees', 'Deserts', 'Cocktails',
            ],
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        }
    
        
    }
})