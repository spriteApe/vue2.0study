<template>
  <div class="ul ignore">
    <div
      class="li"
      v-for="(_,index) in 2"
      :key="index"
      @click="change(index)"
      :class="{active:current===index}"
    >111</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["current"],
  methods: {
    change(index) {
        this.$emit('update:current',index)
      let name = "";
      switch (index) {
        case 0:
          name = "Home";
          break;
        case 1:
          name = "About";
          break;
      }
    this.$router.push({name})
    },
  },
};
</script>

<style lang="scss" scoped>
.ul {
  position: fixed;
  // bottom: 34px;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: red;
  display: flex;
  /*兼容iphoneX*/
  /*判断是否是iphoneX，使用@media 媒体查询尺寸*/

  @supports (bottom: env(safe-area-inset-bottom)) {
    bottom: env(safe-area-inset-bottom);
    background-color: #000000;
  }

  > .li {
    flex: 1;

    &.active {
      background-color: green;
    }
  }
}
</style>
