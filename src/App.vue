<template>
  <div id="app">
    <router-view />

    <tabbar :current.sync='current'/>
  </div>
</template>
<script>
import tabbar from '@/components/tabbar'
export default {
  data(){
    return{
      current:0
    }
  },
  components:{
    tabbar
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
