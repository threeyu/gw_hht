<template>
  <!-- 产品管理 -->
  <div class="content" ref="content">

    <router-link :to="{name: 'productDetail', query: { name: 'J7' }}">
      <img :src="bannerList[0]" class="banner" alt="">
    </router-link>

    <div class="container">
      <div class="row brand-nav">
        <div class="left">
          <div class="bg">
            <img :src="brandList[proData.brandId].uri" alt="">
          </div>
          <select class="sel-detail" v-model="proData.brandId" @change="onChange()">
            <option :value="index" v-for="(item, index) in brandList" :key="index">{{item.name}}</option>
          </select>
        </div>

        <div class="right bg-white">
          <div class="product-icon" :class="{'btn-checked':index === proData.proId}" v-for="(item, index) in curBrandList" :key="index" @click="onProSelect(index, item.id)">
            <img :src="item.uri" alt="">
            <p>{{item.title}}</p>
          </div>
        </div>

      </div>

      <div class="row product-title">
        <p>{{curProTitle}}</p>
      </div>

      <div class="row" v-if="proList.length > 0">
        <div class="product-list" v-for="(item, index) in loopPage" :key="index">
          <img v-show="proList[index + ptrList[curPage - 1]].wifi" src="../../assets/img/products/wifi.png" class="wifi" alt="">
          <img v-lazy="proList[index + ptrList[curPage - 1]].uri" :key="proList[index + ptrList[curPage - 1]].uri" class="banner" alt="" @click="onDetail(proList[index + ptrList[curPage - 1]])">
          <p class="title">{{proList[index + ptrList[curPage - 1]].title}}</p>
          <p class="detail">{{proList[index + ptrList[curPage - 1]].detail}}</p>
          <div v-show="proList[index + ptrList[curPage - 1]].isShowCom" class="compared" @click="onReload(index + ptrList[curPage - 1])">
            <p>对比</p>
            <img v-if="proList[index + ptrList[curPage - 1]].isCom" src="../../assets/img/products/compared-info.png" alt="">
            <img v-else src="../../assets/img/products/compared-bg.png" alt="">
          </div>
        </div>
      </div>

      <div class="row">
        <pagination style="text-align:center;" v-model="pageList" :curPage=pageList.curPage :pageItem=pageList.pageItem :totalPage=pageList.totalPage></pagination>
      </div>
    </div>

    <div class="compared-bar bg-white" :class="classes" v-if="comparedList.length > 0">
      <div class="container">
        <div class="row">
          <div class="product-card" v-for="(item, index) in comparedList" :key="index">
            <img :src="proList[item].uri" class="banner" alt="">
            <p>{{proList[item].title}}</p>
            <div class="btn-close" @click="onReload(item)">X</div>
          </div>

          <button type="button" class="btn btn-pos" @click="onCompared()" v-if="comparedList.length > 0">对比 ></button>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { on, off } from '../../utils/dom.js'
import Pagination from '../ui/pagination'
import { mapGetters } from 'vuex'

export default {
  components: {
    Pagination,
  },
  data() {
    return {
      bannerList: [
        require('../../assets/img/products/banner.jpg')
      ],
      isFixed: false,
      ticking: false,
      minH: 100,
      comparedList: [],
      /**********************************/
      pageList: {
        curPage: 1,
        pageItem: 3,
        totalPage: 13
      },
      perPage: 12,
      extra: 0,
      ptrList: [],
      /**********************************/
      curBrandList: '',
      curProTitle: ''
    }
  },
  created() {
    this.curBrandList = this.proIconList.hht;
    this.pageList.curPage = 1;


    if (this.proList.length === 0) {
      this.reqAll();
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (this.proData.proId === 999) {
        this.curProTitle = '所有产品';
      } else {
        this.curProTitle = this.curBrandList[this.proData.proId].title;
      }
    });

    on(window, 'scroll', this.handleScroll);
  },
  beforeDestroy() {
    this.clearList();
    this.$store.dispatch('clearProList');

    off(window, 'scroll', this.handleScroll);
  },
  computed: {
    ...mapGetters([
      'proList',

      /*************** */
      'proData',
      'brandList',
      'proIconList'
    ]),
    classes() {
      return [
        {
          [`compared-bar-fiexed`]: this.isFixed,
          ['compared-bar-normal']: !this.isFixed
        }
      ];
    },
    loopPage() {
      this.ptrList = [];
      let pLen = this.proList.length;
      let len = Math.ceil(pLen / this.perPage);
      for (let i = 0; i < len; ++i) {
        this.ptrList.push(i * this.perPage);
      }
      this.extra = pLen % this.perPage;
      this.pageList.totalPage = len;

      let tmp = this.extra;
      if (tmp === 0) {
        tmp = this.perPage;
      }
      return this.pageList.curPage != this.pageList.totalPage ? this.perPage : tmp;
    },
    curPage() {
      return this.pageList.curPage;
    }
  },
  methods: {
    reqAll() {
      this.$store.dispatch('setProData', { brandId: 1, proId: 999 });
      this.$store.dispatch('getProductByBrand', 1);
    },
    onCompared() {
      let str = "";
      this.comparedList.forEach((val, idx) => {
        str += this.proList[val].name + '&';
      });
      str = str.slice(0, str.length - 1);

      this.$router.push({ name: 'productCompared', query: { names: str } });
    },
    onChange() {
      this.$store.dispatch('setProData', { brandId: this.proData.brandId, proId: 999 });// reset
      switch (this.proData.brandId) {
        case 1:
          this.curBrandList = this.proIconList.hht;
          this.curProTitle = '所有产品';
          this.clearList();
          this.pageList.curPage = 1;
          this.$store.dispatch('getProductByBrand', 1);
          break;
        case 2:
          this.curBrandList = this.proIconList.alilo;
          this.curProTitle = '所有产品';
          this.clearList();
          this.pageList.curPage = 1;
          this.$store.dispatch('getProductByBrand', 2);
          break;
        case 3:
          this.curBrandList = this.proIconList.xht;
          this.curProTitle = '所有产品';
          this.clearList();
          this.pageList.curPage = 1;
          this.$store.dispatch('getProductByBrand', 3);
          break;
        default:
          this.curBrandList = this.proIconList.hht;
          break;
      }
    },
    onProSelect(index, id) {
      this.curProTitle = this.curBrandList[index].title;

      this.$store.dispatch('setProData', { brandId: this.proData.brandId, proId: index });// reset

      this.clearList();
      this.pageList.curPage = 1;
      this.$store.dispatch('getProductByType', id);
    },
    onDetail(obj) {
      let name = obj.name;
      let type = obj.type;
      this.$router.push({ name: 'productDetail', query: { type: type, name: name } });
    },
    onReload(index) {
      if (this.proList[index].isCom) {
        let _idx = this.comparedList.indexOf(index);
        this.comparedList.splice(_idx, 1);
      } else {
        if (this.comparedList.length > 3) {
          return;
        }
        this.comparedList.push(index);
      }
      this.proList[index].isCom = !this.proList[index].isCom;
    },
    clearList() {
      if (this.comparedList.length > 0) {
        this.comparedList = [];
      }
    },
    handleScroll() {
      if (!this.ticking) {
        requestAnimationFrame(this.realFunc);
        this.ticking = true;
      }
    },
    realFunc() {

      // todo something
      let _staticH = this.$refs.content.clientHeight + 100;
      // console.log('-----------:  ' + _staticH);

      let _syncH = window.innerHeight + window.pageYOffset;
      // console.log('===========:  ' + _syncH);

      this.isFixed = _staticH >= _syncH;

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
  padding-bottom: 180px;
}
.brand-nav {
  width: 100%;
  height: 156px;
  margin: 52px 0;
}
.brand-nav > .left {
  position: relative;
  float: left;
  width: 180px;
  height: 100%;
  background: #e60012;
  text-align: center;
}
.brand-nav > .left > .bg {
  position: absolute;
  top: 16px;
  left: 26px;
  width: 128px;
  height: 74px;
}
.sel-detail {
  position: absolute;
  top: 100px;
  left: 40px;
  width: 100px;
  height: 30px;
  font-size: 18px;
  color: #e60012;
  text-align-last: center;
  outline: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.sel-detail,
.sel-detail:hover,
.sel-detail:focus {
  border: none;
}
.brand-nav > .right {
  float: left;
  width: 1010px;
  height: 100%;
  margin-left: 10px;
  /* overflow-x: scroll;// 如果水平中超过7个则使用
  overflow-y: hidden;
  white-space: nowrap; */
}
.product-icon {
  width: 82px;
  height: 100px;
  text-align: center;
  margin: 34px 20px 0;
  cursor: pointer;
  display: inline-block;
}
.product-icon:first-child {
  margin-left: 82px;
}
.product-icon > p {
  margin: 10px 0 0 0;
  font-size: 18px;
  color: #575757;
}
.btn-checked > p {
  background: #e60012;
  color: #fff;
}
.product-title > p {
  margin-top: 0;
  margin-bottom: 12px;
  font-size: 24px;
  color: #575757;
}
.product-list {
  position: relative;
  float: left;
  width: 292px; /* w/h = 0.768 */
  height: 412px;
  margin: 15px 4px;
  text-align: center;
  background: #fff;
}
.product-list p {
  position: absolute;
  margin: 0;
  width: 100%;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.product-list > .banner {
  cursor: pointer;
}
.product-list > .title {
  top: 340px;
  font-size: 20px;
  color: #404040;
}
.product-list > .detail {
  top: 372px;
  font-size: 16px;
  color: #929292;
}
.product-list > .wifi {
  position: absolute;
  top: 20px;
  left: 20px;
}
.product-list > .compared {
  position: absolute;
  width: 100px;
  height: 40px;
  bottom: 80px;
  right: 0;
  cursor: pointer;
}
.product-list > .compared > img {
  position: relative;
  top: 50%;
  right: -30%;
  transform: translateY(-50%);
}
.product-list > .compared > p {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  font-size: 14px;
  color: #999999;
}
.compared-bar {
  height: 180px;
  bottom: 0;
  left: 0;
  right: 0;
}
.compared-bar-fiexed {
  position: fixed;
}
.compared-bar-normal {
  position: absolute;
}
.product-card {
  position: relative;
  margin: 20px;
  float: left;
  width: 140px;
  height: 140px;
  border: 1px solid #c6bfbf;
  text-align: center;
  overflow: hidden;
}
.product-card:first-child {
  margin-left: 220px;
}
.product-card > .banner {
  width: 80%;
}
.product-card > p {
  position: absolute;
  margin: 0;
  bottom: 5px;
  width: 100%;
  font-size: 14px;
  color: #404040;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.btn-close {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 5px;
  right: 5px;
  color: #fff;
  background: #e60012;
  border-radius: 50%;
  cursor: pointer;
}
.btn {
  width: 120px;
  height: 36px;
  line-height: 24px;
  border-radius: 6px;
  border: 1px solid #e60012;
  font-size: 20px;
  background: #e60012;
  color: #fff;
}
.btn-pos {
  margin: 72px 0 0 40px;
}
</style>