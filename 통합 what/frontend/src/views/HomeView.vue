<template>
  <div class="home">
    <v-app>
      <h1>API로 값 가져오기</h1>
  <input type="number" id="num">
  <button id="btnapi">확인</button>
  <p id="apitext"></p>
      
    </v-app>
  </div>
</template>


<script>

export default {
  name: 'HomeView',
  computed: {

    }
}
</script>

<style>
p {
  color: black;
}
</style>