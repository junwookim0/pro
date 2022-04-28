<template>
  <div id="app">
    <nav >
        <router-link to="/">Home</router-link>
        <router-link to="/modelinghotel">HOTEL</router-link>
        <router-link to="/modelingdew">LIVING SPACE</router-link>
        <router-link to="/modelingcafe">CAFE</router-link>
        <router-link to="/modelinghairshop">HAIRSHOP</router-link>
        <router-link to="/portfolio">PORTFOLIO</router-link>
    </nav>
    <router-view/>
</div>
</template>

<script>

export default {
  name: 'App',

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

nav {
  padding: 30px;
  display: grid;
  float: left;
  font-weight: bold;
  height: 950px;
}

nav a {
  padding: 0;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #368D9C;
}
</style>
