<template>
  <div id="app">
<!-- 모듈의 state값을 꺼내 올 때 : $store.state.모듈이름.값 -->
    <h3> {{$store.state.a.modulename}}</h3>
    <button @click="$store.commit('namechange')"></button>




    <h1> index.js 카운터에서 직접 가져온 값 입니다 {{$store.state.count}}</h1>
    <h1> coumputed 사용해서 카운터에서 가져온 값 입니다 {{count}}</h1>
    <button @click="$store.commit('addcount')"> 카운트 증가 </button>
    <button @click="$store.commit('removecount')"> 카운트 감소</button>
    <button @click="timer">1초 뒤 추가 appvue에서</button>
    <button @click="ntimer({count :50 ,time:1000})">50 추가 </button>

    <!-- 버튼을 누르면 1초마다 count값이 1씩 증가하는 Action을 만들어서 추가해주세요 -->
    <!-- setInterval --> 
    <button @click="timersecond">1초마다 1증가</button>
    <ul>
      <li v-for="list in $store.state.list" :key="list.id">
        {{list.memo}}
      </li>
    </ul>

    <ul>
      <li v-for="name in names" :key="name.index">
        {{ name.n }}
      </li>
    </ul>
    <ul>
      <li v-for="(t,i) in text" :key="i">
        {{t}}
      </li>
    </ul>

    <p> {{ doneTodosCount }}</p>
    <p>{{ doneTodos }} </p>

    <Hello-world/>
    <button id="btn">내용</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components : {
    HelloWorld,
  },
  computed : {
    count : function(){
      return this.$store.state.count;
    },
    names : function(){
      return this.$store.state.names;
    },
    text : function(){
      return this.$store.state.text;
    },
    doneTodosCount : function(){
      return this.$store.state.todos.filter(todo => todo.done).length;
    },
    doneTodos : function(){
      return this.$store.getters.doneTodos
    }
  },
  methods : {
    timer : function(){
      this.$store.dispatch('timer')
    },
    ntimer : function(time){
      this.$store.dispatch('ntimer' , time)
    },
    timersecond : function(){
      this.$store.dispatch('timersecond')
    },
  },
  created () {
    console.log('app-created');
  },
  mounted () { 
    // 이벤트나 타이머 등의 비동기 함수를 사용할때 사용
    console.log('app-mounted');
    this.timersecond();
    //자바스크립트를 사용해서 BOM에 접근가능
    window.alert("app-mounted")
    //자바스크립트를 사용해서 돔(DOM)에 접근가능
    const btn = document.querySelector('#btn');
    btn.innerHTML="이름 바꾸s기"
    // js모듈을 만들어서 사용해줄수도 있다.
  },
  updated () {
    console.log('app-updated');
  }
}
</script>




<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
