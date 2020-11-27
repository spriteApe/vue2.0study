<template>
  <div>
    <div class="top"></div>
    <div class="tab" ref="tab">
      <span
        v-for="(i, index) in 4"
        :key="index"
        :class="{ active: active === index }"
        @click="tabClick(index)"
        >选项{{ index }}</span
      >
    </div>

    <div
      class="swiper"
      @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd"
    >
      <div
        class="itemListWarp"
        :style="{ transform: ' translateX(' + active * -100 + '%)' }"
      >
        <div class="item">
          <div
            class="itemWarp"
            :style="{ height: active === 0 ? 'auto' : 0 }"
            v-if="list0.length"
          >
            <van-cell-group>
              <van-cell
                title="单元格"
                :value="'内容' + index"
                v-for="(_, index) in list0"
                :key="index"
              />
            </van-cell-group>
          </div>
        </div>

        <div class="item">
          <div
            class="itemWarp"
            :style="{ height: active === 1 ? 'auto' : 0 }"
            v-if="list1.length"
          >
            <van-cell-group>
              <van-cell
                title="单元格"
                :value="'内容' + index"
                v-for="(_, index) in list1"
                :key="index"
              />
            </van-cell-group>
          </div>
        </div>

        <div class="item">
          <div
            class="itemWarp"
            :style="{ height: active === 2 ? 'auto' : 0 }"
            v-if="list2.length"
          >
            <van-cell-group>
              <van-cell
                title="单元格"
                :value="'内容' + index"
                v-for="(_, index) in list2"
                :key="index"
              />
            </van-cell-group>
          </div>
        </div>

        <div class="item">
          <div
            class="itemWarp"
            :style="{ height: active === 3 ? 'auto' : 0 }"
            v-if="list3.length"
          >
            <van-cell-group>
              <van-cell
                title="单元格"
                :value="'内容' + index"
                v-for="(_, index) in list3"
                :key="index"
              />
            </van-cell-group>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var touchStartX, touchStartY, touchMoveX, touchMoveY, interval, time;
export default {
  data() {
    return {
      active: 0,
      offsetTop: 0,
      list0: Array.from(Array(20), (_, index) => index),
      list1: [],
      list2: [],
      list3: [],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.$once("hook:destroyed", () => {
      sessionStorage.removeItem("scroll0");
      sessionStorage.removeItem("scroll1");
      sessionStorage.removeItem("scroll2");
      sessionStorage.removeItem("scroll3");
      window.removeEventListener("scroll", this.handleScroll);
    });
    this.offsetTop = this.$refs.tab.offsetTop || 0;
  },
  methods: {
    //监听滚动
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop < this.offsetTop) return;
      sessionStorage.setItem("scroll" + this.active, scrollTop);
    },
    // 触摸开始事件
    touchStart: function (e) {
      touchStartX = e.touches[0].pageX; // 获取触摸时的原点
      touchStartY = e.touches[0].pageY; // 获取触摸时的原点
      // 使用js计时器记录时间
      interval = setInterval(function () {
        time++;
      }, 100);
    },
    // 触摸移动事件
    touchMove: function (e) {
      touchMoveX = e.touches[0].pageX;
      touchMoveY = e.touches[0].pageY;
    },
    // 触摸结束事件
    touchEnd: function (e) {
      var moveX = touchMoveX - touchStartX;
      var moveY = touchMoveY - touchStartY;
      if (Math.sign(moveX) == -1) {
        moveX = moveX * -1;
      }
      if (Math.sign(moveY) == -1) {
        moveY = moveY * -1;
      }
      if (moveX <= moveY) {
        // 上下
        // 向上滑动
        if (touchMoveY - touchStartY <= -30 && time < 10) {
          console.log("向上滑动");
        }
        // 向下滑动
        if (touchMoveY - touchStartY >= 30 && time < 10) {
          console.log("向下滑动 ");
        }
      } else {
        // 左右
        // 向左滑动
        if (touchMoveX - touchStartX <= -30 && time < 10) {
          console.log("左滑页面");
          if (this.active === 3) return;
          this.active++;
          this.isFirstView();
          this.scrollView();
        }
        // 向右滑动
        if (touchMoveX - touchStartX >= 30 && time < 10) {
          console.log("向右滑动");
          if (this.active === 0) return;
          this.active--;
          this.isFirstView();
          this.scrollView();
        }
      }
      clearInterval(interval); // 清除setInterval
      time = 0;
    },

    tabClick(index) {
      this.active = index;
      this.scrollView();
      this.isFirstView();
    },
    isFirstView() {
      if (!this["list" + this.active].length) {
        setTimeout(() => {
          this["list" + this.active] = Array.from(
            Array(20),
            (_, index) => index
          );
        }, 1000);
      }
    },
    scrollView() {
      let offsetTop = sessionStorage.getItem("scroll" + this.active);
      window.scroll(0, Number(offsetTop) || this.offsetTop);
    },
  },
};
</script>

<style lang='scss' scoped>
.top {
  background-color: red;
  height: 100px;
}
.tab {
  position: sticky;
  background-color: green;
  z-index: 999;
  top: 0;
  left: 0;
  display: flex;
  height: 60px;
  line-height: 60px;
  > span {
    flex: 1;
    &.active {
      color: red;
    }
  }
}
.swiper {
  width: 100%;
  overflow: hidden;
  > .itemListWarp {
    width: 100%;
    display: flex;
    transition: all 0.5s;
    .item {
      width: 100%;
      flex-shrink: 0;
    }
  }
}
</style>