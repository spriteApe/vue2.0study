<template>
  <div class="home">
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <img alt="Vue logo" src="../assets/logo.png" style="width:10rem" />
    {{msg}}
    <p @click="emit">emit</p>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  created() {
    this.$on("sadasfgweewg", (res) => console.log(res));
  },
  data() {
    return {
      msg: "231as561f",
    };
  },
  methods: {
    emit() {
      this.$emit("sadasfgweewg", "hello");
    },
  },
};
</script>
<style lang="scss" scoped >
::v-deep .van-button--danger {
  background-color: #3a2f08;
}
</style>
