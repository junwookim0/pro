<template>
    <div>
        <h3>글을 쓰는 공간입니다</h3>
        <input type="text" size="28" v-model="title"> <br>
        <textarea cols="30" rows="10" v-model="memo"></textarea> <br>
        <button @click="addboard">입력</button>
    </div>    
</template>

<script>
export default {
    data : () => ({
        title : '',
        memo : ''
    }),
    methods : {
        addboard() {
            const board = {title : this.title, memo : this.memo}
            this.$store.commit('addboard',board);
            this.$router.push('/');
        }
    }
}

</script>