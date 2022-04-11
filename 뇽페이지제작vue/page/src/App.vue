<template>
  <div id="app">
    <nav>
      <HelloWorld></HelloWorld>
    </nav>
      <MainLine></MainLine>
      <main-carousel></main-carousel>
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MainLine from './components/MainLine.vue'
import MainCarousel from './components/MainCarousel'

export default {
  name: 'App',
  components : {
      HelloWorld,
      MainLine,
      MainCarousel,

  }
}

</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300&display=swap");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body div #app {
    background-color:  rgba(32,73,105,1) ;
}
a {
    text-decoration: none;
}
/*메인 파란색*/
.original_blue_color{
    color: rgba(32,73,105,1) !important;
}
.original_blue_color--text{
    color: rgba(32,73,105,1);
}

/* 폰트 */
#appbar_font{
    font-family: 'Ubuntu', sans-serif;
    z-index: 100;
}

/*main line font */
#carouseltext{
    font-family: 'BIZ UDPMincho', serif;
    font-family: 'Playfair Display', serif;
    font-size: 80px;
    color: white;
}

/*main-carousel font*/
.textfont{
    font-family: 'Poppins', sans-serif;
}
.textfont2{
    font-family: 'Noto Sans KR', sans-serif;
    font-size: larger;
}

/*appbar logo*/
#logo {
    font-size: 25px;
    color: black;
    line-height: 10px;
    font-family: 'Playfair Display', serif;
    margin-bottom: 10px;
}

/* appbar icon color*/
#holiday_village{
    color: black;
}
#dots-vertical{
    color: black;
}


#appbar_menu{
    margin-top: 10px;
}


/* main-carousel div*/
#carouselp{
    font-size: 35px;
    margin: 170px auto;
    color: white;
}
/*main-carousel text*/
#uptext{
    vertical-align: top;
    font-size: 20px;
    line-height: 40px;
    margin-right: 20px;
    margin-left: 20px;
}
</style>
