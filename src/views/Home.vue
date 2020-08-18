<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" style="width:10rem">
    {{msg}}
    <HelloWorld :msg.sync="msg"/>
    <p @click="emit">emit</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  created(){
    this.$on('sadasfgweewg',res=>console.log(res))
  },
  data(){
    return{
      msg:'231as561f'
    }
  },
  methods:{
    emit(){
      this.$emit('sadasfgweewg','hello')
    }
  },
  components: {
    HelloWorld
  }
}
</script>
