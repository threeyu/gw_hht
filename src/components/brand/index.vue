<template>
  <!-- 品牌管理 -->
  <div class="container" style="padding-top:1px;position:relative;">

    <div class="bg-white" :class="classes">
      <div class="nav-bar-warp">
        <a class="nav-opt clear" href="#about">
          <p>关于我们</p>
          <p>About us</p>
        </a>
        <a class="nav-opt" href="#growth">
          <p>发展历程</p>
          <p>Growth history</p>
        </a>
        <a class="nav-opt" href="#product">
          <p>产品品质</p>
          <p>Product quality</p>
        </a>
        <a class="nav-opt" href="#honor">
          <p>企业荣誉</p>
          <p>Our honor</p>
        </a>
        <a class="nav-opt" href="#content">
          <p>内容体系</p>
          <p>Content system</p>
        </a>
      </div>
    </div>

    <div class="brand-img">
      <img v-lazy="bannerList[0]" class="banner" alt="">
    </div>

    <div class="brand-img" v-for="(item, index) in bgList" :key="index">
      <img v-lazy="item.uri" :id=item.id alt="">
    </div>

  </div>
</template>

<script>
import { on, off } from '../../utils/dom.js'

export default {
  data() {
    return {
      bannerList: [
        require('../../assets/img/brand/banner.png')
      ],
      bgList: [
        { uri: require('../../assets/img/brand/bg-1.png'), id: 'about'},
        { uri: require('../../assets/img/brand/bg-2.png'), id: 'growth'},
        { uri: require('../../assets/img/brand/bg-3.png'), id: 'product'},
        { uri: require('../../assets/img/brand/bg-4.jpg'), id: 'honor'},
        { uri: require('../../assets/img/brand/bg-5.jpg'), id: 'content'}
      ],
      isFixed: false,
      ticking: false,
      minH: 160
    }
  },
  computed: {
    classes() {
      return [
        {
          [`nav-bar-fiexed`]: this.isFixed,
          ['nav-bar']: !this.isFixed
        }
      ];
    }
  },
  mounted() {
    on(window, 'scroll', this.handleScroll);
  },
  beforeDestroy() {
    off(window, 'scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (!this.ticking) {
        requestAnimationFrame(this.realFunc);
        this.ticking = true;
      }
    },
    realFunc() {
      this.isFixed = window.pageYOffset >= this.minH;
      this.ticking = false;
    }
  }
}
</script>

 
<style scoped>
.nav-bar {
  position: absolute;
  top: 60px;
  left: 10px;
  right: 10px;
}
.nav-bar-fiexed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.nav-bar-warp {
  width: 1200px;
  height: 100px;
  margin: 0 auto;
}
.nav-opt {
  float: left;
  width: 240px;
  text-align: center;
  margin-top: 25px;
  display: block;
}
.nav-opt > p:first-child {
  margin: 0 0 8px 0;
  font-size: 24px;
  color: #575757;
}
.nav-opt > p:last-child {
  margin: 0;
  font-size: 14px;
  color: #afafaf;
}
.brand-img {
  margin: 0;
  padding: 0;
  font-size: 0;
}
.brand-img:nth-child(2) {
  padding-top: 160px;
}
.brand-img:last-child {
  padding-bottom: 100px;
}
</style>