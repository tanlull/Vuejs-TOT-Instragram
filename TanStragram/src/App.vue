<template>
 <div id="app">
   <MenuBar></MenuBar>
    <router-view/>
  </div>
</template>



<script>
import MenuBar from '@/components/MenuBar'

export default {
  name: 'App',
  components: {
    MenuBar
  },
  data: function() {
    return {
      contactLink: '/contact'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
