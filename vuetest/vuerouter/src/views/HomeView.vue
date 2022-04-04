<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo2.png">
    <HelloWorld msg="HOMEVIEW 입니다"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
