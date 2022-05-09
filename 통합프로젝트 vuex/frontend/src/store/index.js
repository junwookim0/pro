import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
// Vuex의 store에서 따로 하므로 Vue의 프로토타입에 넣지않고 사용
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: "",
    memo: {
      title: "제목",
      memo: " 내용",
    },
    memos: [
      {
        id: 1,
        writer: "익명",
        title: "확인용입니다",
      },
    ],
    comments: [
      {
        writer: "익명",
        comment: "내용",
      },
    ],
  },
  getters: {},
  mutations: {
    loginuser(state, user) {
      state.user = user;
    },
    changememolist(state, mlist) {
      state.memos = mlist;
    },
    changememo(state, memo) {
      state.memo = memo;
    },
    changecomments(state, comments) {
      state.comments = comments;
    },
  },
  actions: {
    getmemolist({ commit }) {
      axios.get("/api/memo").then((response) => {
        //가져온 response.data값을 memos에 넣어줌
        commit("changememolist", response.data);
      });
    },
    // id값은 사용하는 컴포넌트에서 전달
    getmemo({ commit }, id) {
      axios.get(`/api/memo/${id}`).then((response) => {
        //가져온 response.data값을 memo에 넣어줌
        commit("changememo", response.data);
      });
    },
    // id값은 사용하는 컴포넌트에서 전달
    getcomment({ commit }, id) {
      axios.get(`/api/comment/${id}`).then((response) => {
        //가져온 response.data값을 comments에 넣어줌
        commit("changecomments", response.data);
      });
    },
    // comment객체를 컴포넌트에서 받아옴
    postcomment({ commit }, comment) {
      axios
        .post("/api/comment", {
          data: {
            //컴포넌트에서 받아온 comment객체 추가
            comment: comment,
          },
        })
        .then((response) => {
          console.log(response.data);
          // 변경된 comments의 내용을 가져옴
          commit("changecomments", response.data);
        });
    },
  },
  modules: {},
});
