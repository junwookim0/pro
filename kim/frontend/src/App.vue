<template>
  <div id="app">

    <div class="sidebar">
      <div id="logo">
      <v-icon class="mb-2" size="32px" id="holiday_village">holiday_village</v-icon>  MY <br> INTERIOR  
      </div>

        <router-link to="/"> <v-icon>home</v-icon>Home</router-link>
        <router-link to="/modelinghotel"><v-icon>apartment</v-icon> HOTEL</router-link>
        <router-link to="/modelingdew"> <v-icon>living</v-icon> LIVING SPACE</router-link>
        <router-link to="/modelingcafe"><v-icon>local_cafe</v-icon> CAFE</router-link>
        <router-link to="/modelinghairshop"><v-icon>content_cut</v-icon> HAIRSHOP</router-link>
        <router-link to="/portfolio"><v-icon>description</v-icon> PORTFOLIO</router-link>

        <div id="Menubtn">
          <button @click="Menu=!Menu"> <v-icon>keyboard_double_arrow_left</v-icon></button>
        </div>

    </div>
    <router-view/>
</div>
</template>

<script>

export default {
  name: 'App',
  data : () => {
    return{
      Menu : true
    }
  },
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.v-icon{
  margin-right: 8px;
}


a {
  font-weight: bold;
  padding: 15px;
  color: white;
}
a:hover{
  color: black;
}
a.router-link-exact-active {
  color: bisque;
}

.sidebar{
  color : white;
  background-color:  rgba(32,73,105,1);

  float: left;
  position: fixed;
  z-index: 1;
  top:0;
  left:0;
  bottom:0;
  padding: 0.5em;

  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
  text-align: start;
  }

</style>