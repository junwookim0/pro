<template>
    <div>
        <p>{{ memo.memo }}</p>
    </div>
</template>

<script>
export default {
    created() { 
        this.$http.get(`/api/memo/${this.$route.params.id}`)
        .then((response)=>{
            console.log(response.data)
            this.memo = response.data
            })
    },
    data() {
        return {
            memo :[]
        }
    }
}
</script>