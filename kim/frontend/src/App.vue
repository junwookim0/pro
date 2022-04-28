<template>
  <div id="app">
    <div class="sidebar">

        <router-link to="/">Home</router-link>
        <router-link to="/modelinghotel">HOTEL</router-link>
        <router-link to="/modelingdew">LIVING SPACE</router-link>
        <router-link to="/modelingcafe">CAFE</router-link>
        <router-link to="/modelinghairshop">HAIRSHOP</router-link>
        <router-link to="/portfolio">PORTFOLIO</router-link>
        <v-icon>mdi-thumb-up</v-icon>

    </div>
    <router-view/>
</div>
</template>

<script>

export default {
  name: 'App',
  data : () => {
    return{
      collapsed : true
    }
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
}

a {
  font-weight: bold;
  padding: 15px;
  color: bisque;
}
a:hover{
  color: black;
}
a.router-link-exact-active {
  color: white;
}

.sidebar{
  color : white;
  background-color:    #42b983;

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
  }

</style>
