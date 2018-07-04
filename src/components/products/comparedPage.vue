<template>
  <!--产品对比-->
  <div class="container" style="padding:50px 0;">
    <ol class="breadcrumb">
      <li>
        <router-link :to="{name: 'products'}">产品</router-link>
      </li>
      <li class="active">对比结果</li>
    </ol>

    <div class="bg-white">
      <div class="content">
        <div class="row">
          <div class="btn-back">
            <router-link :to="{name: 'products'}">{{btnTxt}}</router-link>
          </div>
        </div>

        <div class="row">
          <div class="product-img" v-for="(item, index) in proCompList" :key="index">
            <img :src="item.uri" class="banner" alt="">
          </div>
        </div>

        <div :class="classes">
          <div class="title">
            型号
          </div>

          <div class="product-detail" v-for="(item, index) in proCompList" :key="index">
            <p v-html="item.name"></p>
          </div>
        </div>

        <div class="empty" ref="emptyBar"></div>

        <div class="row">
          <div class="title">
            颜色
          </div>

          <div class="product-detail" v-for="(item, index) in proCompList" :key="index">
            <p v-html="item.color"></p>
          </div>
        </div>

        <div class="row">
          <div class="title">
            产品尺寸（cm）
          </div>

          <div class="product-detail" v-for="(item, index) in proCompList" :key="index">
            <p v-html="item.size"></p>
          </div>
        </div>

        <div class="row">
          <div class="title">
            音质
          </div>

          <div class="product-detail" v-for="(item, index) in proCompList" :key="index">
            <p v-html="item.toneQuality"></p>
          </div>
        </div>

        <div class="row">
          <div class="title">
            录音
          </div>

          <div class="product-detail" v-for="(item, index) in proCompList" :key="index">
            <p v-html="item.record"></p>
          </div>
        </div>

        <div class="row">
          <div class="title">
            单曲循环
          </div>

          <div class="product-detail" v-for="(item, index) in proCompList" :key="index">
            <p v-html="item.singleCycle"></p>
          </div>
        </div>

        <div class="row">
          <div class="title">
            遥控器
          </div>

          <div class="product-detail" v-for="(item, index) in proCompList" :key="index">
            <p v-html="item.remoteController"></p>
          </div>
        </div>

        <div class="row">
          <div class="title">
            屏幕
          </div>

          <div class="product-detail" v-for="(item, index) in proCompList" :key="index">
            <p v-html="item.screen"></p>
          </div>
        </div>

        <div class="row">
          <div class="title">
            内存
          </div>

          <div class="product-detail" v-for="(item, index) in proCompList" :key="index">
            <p v-html="item.memory"></p>
          </div>
        </div>

        <div class="row">
          <div class="title">
            童锁
          </div>

          <div class="product-detail" v-for="(item, index) in proCompList" :key="index">
            <p v-html="item.childLock"></p>
          </div>
        </div>

        <div class="row">
          <div class="title">
            电池
          </div>

          <div class="product-detail" v-for="(item, index) in proCompList" :key="index">
            <p v-html="item.cell"></p>
          </div>
        </div>

        <div class="row">
          <div class="title">
            下载
          </div>

          <div class="product-detail" v-for="(item, index) in proCompList" :key="index">
            <p v-html="item.download"></p>
          </div>
        </div>

        <div class="row">
          <div class="title">
            开关位置
          </div>

          <div class="product-detail" v-for="(item, index) in proCompList" :key="index">
            <p v-html="item.onoff"></p>
          </div>
        </div>

        <div class="row">
          <div class="title">
            个性特点
          </div>

          <div class="product-detail" v-for="(item, index) in proCompList" :key="index">
            <p v-html="item.specialty"></p>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import { on, off } from '../../utils/dom.js'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      reqData: '',
      btnTxt: '< 返回',

      isFixed: false,
      ticking: false,
      minH: 710
    }
  },
  computed: {
    ...mapGetters([
      'proCompList'
    ]),
    classes() {
      return [
        {
          [`nav-bar-fiexed`]: this.isFixed,
          ['nav-bar']: !this.isFixed
        }
      ];
    }
  },
  created() {
    this.reqData = this.$route.query.names;
    let str = this.reqData.replace(/&/g, ',')
    console.log(str);

    this.$store.dispatch('getProductComp', str);
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
.content {
  position: relative;
  min-height: 1200px;
  height: auto !important;
  height: 1200px;
  padding: 50px;
}
.btn-back > a {
  font-size: 18px;
  color: #404040;
}
.btn-back > a:hover {
  color: #eb0012;
}
.product-img {
  float: left;
  width: 260px;
  height: 346px;
  margin: 50px 5px;
}
.product-img > .banner {
  width: 100%;
  height: 100%;
}
.title {
  font-size: 24px;
  color: #333333;
  font-weight: bold;
  height: 34px;
  padding: 0 10px;
  border-bottom: 1px solid #dbdbdb;
}
.product-detail {
  float: left;
  width: 260px;
  height: 125px;
  margin: 0 5px;
  padding-top: 20px;
  font-size: 18px;
  color: #404040;
  word-wrap: break-word;
  overflow: hidden;
}
.product-detail p {
  margin: 0;
}
.nav-bar {
  position: absolute;
  top: 520px;
  width: 1100px;
  background: #fff;
}
.nav-bar-fiexed {
  position: fixed;
  top: 0;
  width: 1100px;
  background: #fff;
}
.empty {
  height: 180px;
}
</style>

