const state= () => ({
        modulename : 'moduleA',
})

const mutations = {
    namechange(state){
        state.modulename = "값이 바뀌었습니다"
    },
}

export default {
    state,
    mutations
}