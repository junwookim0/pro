<template>
  <div id="app">
        <router-link to="/"> <v-icon dark>home</v-icon>Home</router-link>
        <router-link to="/modelinghotel"><v-icon  dark>apartment</v-icon> HOTEL</router-link>
        <HelloWorld/>
    <router-view/>
</div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue"

export default {
  name: 'App',
  components : {
    HelloWorld,
  },
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

</style>