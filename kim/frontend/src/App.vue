<template>
  <div id="app">

    <div class="sidebar" v-if="Menu">
      <div id="logo">
      <v-icon class="mb-2" size="32px" id="holiday_village">holiday_village</v-icon>  MY <br> INTERIOR  
      </div>
        <router-link to="/"> <v-icon dark>home</v-icon>Home</router-link>
        <router-link to="/modelinghotel"><v-icon  dark>apartment</v-icon> HOTEL</router-link>
        <router-link to="/modelingdew"> <v-icon  dark>living</v-icon> LIVING SPACE</router-link>
        <router-link to="/modelingcafe"><v-icon  dark>local_cafe</v-icon> CAFE</router-link>
        <router-link to="/modelinghairshop"><v-icon  dark>content_cut</v-icon> HAIRSHOP</router-link>
        <router-link to="/modelingportfolio">
        <v-icon  dark>description</v-icon> PORTFOLIO
        </router-link>
        <div id="Menubtn">
          <button @click="toggle"> <v-icon  dark>keyboard_double_arrow_right</v-icon></button>
        </div>


    </div>
    <div class="sidebar" v-else>
      <div id="logo">
      <v-icon class="mb-2" size="32px" id="holiday_village">holiday_village</v-icon>  
      </div>

      <v-tooltip right color="rgba(32,73,105,1)">
      <template v-slot:activator="{ on, attrs }">
        <router-link to="/">
        <v-icon
          dark
          v-bind="attrs"
          v-on="on"
        >
          mdi-home
        </v-icon>
        </router-link>
      </template>
      <span>Home</span>
    </v-tooltip>
    <v-tooltip right color="rgba(32,73,105,1)">
      <template v-slot:activator="{ on, attrs }">
        <router-link to="/modelinghotel">
        <v-icon
          dark
          v-bind="attrs"
          v-on="on"
        >
          apartment
        </v-icon>
        </router-link>
      </template>
      <span>Hotel</span>
    </v-tooltip>
    <v-tooltip right color="rgba(32,73,105,1)">
      <template v-slot:activator="{ on, attrs }">
        <router-link to="/modelingdew">
        <v-icon
          dark
          v-bind="attrs"
          v-on="on"
        >
          living
        </v-icon>
        </router-link>
      </template>
      <span>Living Space</span>
    </v-tooltip>
    <v-tooltip right color="rgba(32,73,105,1)">
      <template v-slot:activator="{ on, attrs }">
        <router-link to="/modelingcafe">
        <v-icon
          dark
          v-bind="attrs"
          v-on="on"
        >
          local_cafe
        </v-icon>
        </router-link>
      </template>
      <span>Living Space</span>
    </v-tooltip>
    <v-tooltip right color="rgba(32,73,105,1)">
      <template v-slot:activator="{ on, attrs }">
        <router-link to="/modelinghairshop">
        <v-icon
          dark
          v-bind="attrs"
          v-on="on"
        >
          content_cut
        </v-icon>
        </router-link>
      </template>
      <span>Hair Shop</span>
    </v-tooltip>
    <v-tooltip right color="rgba(32,73,105,1)">
      <template v-slot:activator="{ on, attrs }">
        <router-link to="/modelingportfolio">
        <v-icon
          dark
          v-bind="attrs"
          v-on="on"
        >
          description
        </v-icon>
        </router-link>
      </template>
      <span>PORTFOLIO</span>
    </v-tooltip>

        <div id="Menubtn">
          <button @click="toggle"> <v-icon  dark>keyboard_double_arrow_left</v-icon></button>
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