<template>
    <div>
        <p>{{ memo.memo }}</p>
    </div>
</template>

<script>
export default {
    async created() { 
        // memo의 id값을 가져오기 위해서 , route의 params 사용
        const promise = await this.$http.get(`/api/memo/${this.$route.params.id}`)
        
        const response = await promise.data;
            this.memo = response;
            
    },
    data() {
        return {
            memo :[]
        }
    }
}
</script>