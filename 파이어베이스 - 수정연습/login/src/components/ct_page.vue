<template>
    <v-container>
            <h1 class="display-1 my-1">home page 컨텐츠</h1>
            <input type="number" id="num">
            <v-btn id="btnapi" @click="openapi">검색</v-btn>
        <v-row>
        <v-col cols="12" sm="6" md="4" lg="3" 
        v-for="n in 6" :key="n">
            <v-card
            class="mx-auto my-2"
            max-width="374"
            >
                <v-img
                    height="250"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                ></v-img>
                <v-card-title>제목</v-card-title>
                <v-card-text>
                    <div class="my-4 text-subtitle-1">작성자</div>
                    <div>내용</div>
                </v-card-text>
                <v-card-title>Tonight's availability </v-card-title>
                <v-card-actions>
                    <v-btn
                        color="deep-purple lighten-2"
                        text
                        to="/"
                    >
                        click
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
        </v-row>
    </v-container>
</template>


<script>
export default {
}
</script>