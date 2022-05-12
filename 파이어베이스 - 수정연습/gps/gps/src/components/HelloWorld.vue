<template>
  <div class="hello">
    <div>
  <button @click='geofind'>위치찾기</button>
  <p> {{textContent}} </p>
</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
      return {
            latitude: '',
            longitude: '',
            textContent: ''
        }
  },
  methods: {
    geofind() {
            if(!("geolocation" in navigator)) {
            this.textContent = 'Geolocation is not available.';
            return;
            }
            this.textContent = 'Locating...'
            
            // get position
            navigator.geolocation.getCurrentPosition(pos => {
            this.latitude = pos.coords.latitude;
            this.longitude = pos.coords.longitude;
            this.textContent = '위도 : ' + this.latitude + ', 경도 : ' + this.longitude
            }, err => {
            this.textContent = err.message;
            })
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
