import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 번호, 제목, 내용, 클릭 횟수 > 객체
    // 여러 개 들어가 있음 > 배열
    boardlist: [
      // 객체의 특징 - 속성이름(문자열): 속성값(모든자료형)
      { id: 1, title: "첫번째 게시글입니다", memo: "내용입니다", count: 0 },
      { id: 2, title: "두번째 게시글입니다", memo: "두번째 내용입니다", count: 0 },
    ],
  },
  getters: {},
  mutations: {
    addcount(state, id) {
      // console.log(this.$store.state.boardlist[0])
      state.boardlist[id - 1].count++;
    },
    addboard(state, board) {
      const id = state.boardlist.length + 1;
      state.boardlist.push({
        id: id,
        title: board.title,
        memo: board.memo,
        count: 0,
      });
    },
  },
  actions: {},
  modules: {},
});
