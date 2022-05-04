<template>
  <div id="app">

        <router-link to="/"> <v-icon dark>home</v-icon>Home</router-link>
        <router-link to="/modelinghotel"><v-icon  dark>apartment</v-icon> HOTEL</router-link>
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
  methods : {
    toggle(){
      this.Menu = !this.Menu
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