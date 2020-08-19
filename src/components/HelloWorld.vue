<template>
  <div >
    <span class="hello">适配移动端</span>
    <p>{{msg}}</p>
    <p class="test" @click="change">适配移动端</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props:{
    msg:String
  },
  methods:{
    change(){
      this.$emit('update:msg','78888')
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 200px;
  height: 200px;
  font-size: 36px;
  margin: 0 auto;
  box-sizing: border-box;
  border: 1px solid green;
}
.test{
    font-size: 0.48rem;
}
</style>