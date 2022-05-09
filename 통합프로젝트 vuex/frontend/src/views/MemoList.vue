<template>
    <div>
        <table>
            <tr>
                <td>아이디</td>
                <td>작성자</td>
                <td>제목</td>
            </tr>
            <tr v-for="memo in $store.state.memos" :key="memo.id">
                <td>{{memo.id}}</td>
                <td>{{memo.writer}}</td>
                <td @click="$router.push(`/list/${memo.id}`)">{{memo.title}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data () {
        return {
        }
    },
    created () {
        this.$store.dispatch('getmemolist');
    }
}
</script>