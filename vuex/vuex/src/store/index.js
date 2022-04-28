import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count : 12,
    list  :[
      {id : 1, memo : "hi"},
      {id : 2, memo : "hi1"},
      {id : 3, memo : "hi2"},
    ],
    names : [
      {n : '홍길동'}, 
      {n : '성춘향'}, 
      {n : '김삿갓'}
    ],
    text : ['홍길동','성춘향','김삿갓'],
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters: {
    doneTodos (state) {
      return state.todos.filter(todo => todo.done).length
    },
    doneTodosR (state){
      return state.todos.reverse()
    },
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    }
  },
  mutations: {  //app.vue 버튼에 click 메소드에 직접 commit이용해서 사용가능
    addcount : function(state){
      state.count++;
    }, //methods로 사용가능 helloworld.vue 참고 
    removecount : function(state){
      state.count--;
    },
    ncount : function(state , n){
      state.count += n;
    }

  },
  actions: {//비동기적으로 실행
    addcount : function(context){
      context.commit('addcount')
    },
    timer : function(context){
      setTimeout(function(){
        context.commit('addcount');
      },1000)
    },
    ntimer : function(context,time){
      setTimeout(function(){
        context.commit('ncount', time.count);
      }, time.time)
    },
    timersecond : function(context) {
      setInterval(function(){
        context.commit('addcount');
      }, 1000)
    },
  },
  modules: {
  }
})
