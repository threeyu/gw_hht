<template>
  <div>
    <div class="bg-white">
      <img src="../../assets/img/home/banner-1.png" class="banner" alt="">
    </div>

    <div class="bg-white">
      <div class="container">

        <div class="title">
          <p>PRODUCTS CATEGORY</p>
          <p>产品类别</p>
        </div>

        <div class="row">
          <div class="product-list">
            <div v-for="(item, index) in proIcon" class="card-box" :class="item.box_color" @click="reqProData(index)" :key="index">
              <div class="inline-box">
                <p>{{item.title_cn}}</p>
                <p>{{item.title_en}}</p>
              </div>
              <img :src="item.uri" class="banner" alt="">
            </div>

          </div>
        </div>

      </div>
    </div>

    <div class="bg-grey">
      <div class="container">

        <div class="title">
          <p>NEW PRODUCTS</p>
          <p>新品速递</p>
        </div>

        <!-- swiper -->
        <swiper class="new-product" :options="productSwiper">
          <swiper-slide v-for="(item, index) in newProList" :key="index">
            <img :src="item.uri" alt="">
            <div class="new-product-title">{{item.title}}</div>
            <div class="new-product-detail">{{item.detail1}}<br>{{item.detail2}}</div>
            <button type="button" class="btn" @click="onDetail(item.name)">了解详情 ></button>
          </swiper-slide>
          <!-- <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div> -->
        </swiper>

      </div>
    </div>

    <div class="bg-white">
      <img src="../../assets/img/home/banner-3.png" class="banner" alt="">
    </div>

    <div class="bg-white" style="padding-bottom:78px;">
      <div class="container">

        <div class="title">
          <p>NEWS</p>
          <p>品牌资讯</p>
        </div>

        <div class="row" v-for="(item, index) in brandList" :key="index">
          <div class="brand-content">
            <div class="brand-left">
              <img :src="item.uri" class="banner" alt="">
            </div>

            <div class="brand-mid">
              <a>
                <p>{{item.title}}</p>
                <p>{{item.date}}</p>
                <p>{{item.txt}}</p>
              </a>
            </div>

            <div class="brand-right">
              <button type="button" class="btn" @click="onJump('brandinfo')">了解详情 ></button>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="bg-white">
      <div class="gallery">
        <img src="../../assets/img/home/banner-4.png" class="banner" alt="">
        <div class="gallery-info">
          <img src="../../assets/img/home/banner-5.png" class="banner" alt="">
          <div class="overlay" @click="onJump('brand')">
            <img src="../../assets/img/home/banner-icon.png" class="banner" alt="">
            <div class="inline-btn">
              <a>了解火火兔 ></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white">
      <div class="container">

        <div class="title">
          <p>CONTACT US</p>
          <p>联系我们</p>
        </div>

        <div class="row">
          <div class="contact-icon">
            <a href="https://hhtmy.tmall.com/view_shop.htm?spm=a220m.1000858.0.0.156117a6FTph2H&shop_id=105771901&rn=e1d7fd91d6da3bdb4defc160a86e9e36" target="_blank">
              <img src="../../assets/img/home/contact-1.png" alt="">
              <p>天猫旗舰店</p>
            </a>
          </div>

          <div class="contact-icon">
            <a href="https://mall.jd.com/index-1000086529.html" target="_blank">
              <img src="../../assets/img/home/contact-2.png" alt="">
              <p>京东旗舰店</p>
            </a>
          </div>

          <div class="contact-icon">
            <a href="https://weibo.com/u/2656308101?is_all=1" target="_blank">
              <img src="../../assets/img/home/contact-3.png" alt="">
              <p>官方微博</p>
            </a>
          </div>

          <div class="contact-icon">
            <span>
              <img src="../../assets/img/home/contact-4.png" alt="">
              <img src="../../assets/img/home/wx-qr.png" class="qr" alt="">
              <p>官方微信</p>
            </span>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>

import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

import { mapGetters } from 'vuex'

export default {
  components: {
    swiper, swiperSlide
  },

  data() {
    return {
      proIcon: [
        {
          title_cn: '全部产品',
          title_en: 'ALL PRODUCTS',
          box_color: 'bg-pink',
          uri: require('../../assets/img/home/product-1.png')
        },
        {
          title_cn: '故事机',
          title_en: 'STORYTELLER',
          box_color: 'bg-cyan-blue',
          uri: require('../../assets/img/home/product-2.png')
        },
        {
          title_cn: '视频机',
          title_en: 'VIDEO MACHINE',
          box_color: 'bg-cyan-pink',
          uri: require('../../assets/img/home/product-3.png')
        },
        {
          title_cn: '摇铃',
          title_en: 'RATTLES',
          box_color: 'bg-cyan',
          uri: require('../../assets/img/home/product-4.png')
        },
        {
          title_cn: '点读笔',
          title_en: 'GEEK TECH',
          box_color: 'bg-blue',
          uri: require('../../assets/img/home/product-7.png')
        },
        {
          title_cn: '黑科技',
          title_en: 'INTELL EDUCATION',
          box_color: 'bg-orange',
          uri: require('../../assets/img/home/product-5.png')
        },
        {
          title_cn: '智能教育',
          title_en: 'READING PEN',
          box_color: 'bg-green',
          uri: require('../../assets/img/home/product-6.png')
        },
        {
          title_cn: '周边',
          title_en: 'SURROUNDING',
          box_color: 'bg-purple',
          uri: require('../../assets/img/home/product-8.png')
        }
      ],
      newProList: [
        {
          name: 'r1',
          title: '火火兔智能摇铃R1',
          detail1: '摇响宝宝的多元认知',
          detail2: '乐感•伴眠•互动',
          uri: require('../../assets/img/home/new-product-1.png')
        },
        {
          name: 'L1',
          title: '火火兔儿童思维训练机L1',
          detail1: '逻辑力创造力 双系统训练',
          detail2: '成就科学好思维',
          uri: require('../../assets/img/home/new-product-2.png')
        },
        {
          name: 'i6s',
          title: '火火兔蓝牙视频机I6S',
          detail1: '宝宝可唱可学的智能机',
          detail2: '英语•课程•卡拉OK',
          uri: require('../../assets/img/home/new-product-3.png')
        }
      ],
      brandList: [
        {
          uri: require('../../assets/img/home/brand-1.png'),
          title: '火火兔获复星亿投资',
          date: '2017-09-03',
          txt: '火火兔正式获得了复星锐正资本的亿元融资，未来将实现智能玩教具 +IP+平台的儿童全产业链，向中国第一的儿童教育科技企业进军..'
        },
        {
          uri: require('../../assets/img/home/brand-2.png'),
          title: '火火兔武汉粉丝见面会',
          date: '2017-09-03',
          txt: '因为听到了宝宝们的呼唤，火火兔飞到了他们的身边，陪着宝宝们在 武汉一起做游戏，一起吃美味的甜品，欢乐无限。度过了快乐的一...'
        },
        {
          uri: require('../../assets/img/home/brand-3.png'),
          title: '火火兔荣获金点国际设计大奖',
          date: '2017-09-03',
          txt: '火火兔音乐拍拍鼓、智能早教魔块斩获金点设计奖。火火兔从中脱颖 而出不仅仅依靠产品外观，更是在理解市场、贴合消费者需求之上...'
        },
        {
          uri: require('../../assets/img/home/brand-4.png'),
          title: '火火兔荣获金点国际设计大奖',
          date: '2017-09-03',
          txt: '火火兔音乐拍拍鼓、智能早教魔块斩获金点设计奖。火火兔从中脱颖 而出不仅仅依靠产品外观，更是在理解市场、贴合消费者需求之上...'
        }
      ],
      productSwiper: {
        slidesPerView: 3,
        spaceBetween: 75,
        slidesPerGroup: 1,
        // loop: true,
        // loopFillGroupWithBlank: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
      }
    }
  },
  computed: {
    ...mapGetters([
      'proList',
      'proDetailList'
    ]),
  },
  watch: {
    proList() {// 暂时用watch代替回调dispatch('getConAudioList')
      if (this.proList.length > 0) {
        this.$router.push({ name: 'products' });
      }
    },
    proDetailList() {
      if (this.proDetailList.length > 0) {
        this.$router.push({ name: 'productDetail' });
      }
    }
  },
  methods: {
    reqProData(index) {
      if (index === 0) {
        this.$store.dispatch('setProData', { brandId: 0, proId: 999 });
        this.$store.dispatch('getAllProduct');
      }
      else {
        this.$store.dispatch('setProData', { brandId: 1, proId: (index - 1) });
        this.$store.dispatch('getProductByType', index);
      }
    },
    onDetail(name) {
      this.$store.dispatch('getProductDetailByName', name);
    },
    onJump(pageName) {
      this.$router.push({ name: pageName });
    }
  }

}
</script>


<style scoped>
.title {
  text-align: center;
}
.title > p:first-child {
  margin: 0;
  padding-top: 112px;
  font-size: 24px;
  color: #575757;
}
.title > p:last-child {
  margin: 0;
  padding-top: 12px;
  padding-bottom: 74px;
  font-size: 42px;
  color: #404040;
}
.product-list {
  height: 580px;
  padding: 0 88px 0;
  margin-bottom: 82px;
}
.card-box {
  position: relative;
  float: left;
  width: 220px;
  height: 270px;
  margin: 0 18px 40px;
  cursor: pointer;
}
.inline-box {
  width: 152px;
  height: 56px;
  margin: 18px auto 0;
  border: 1px solid #fff;
  text-align: center;
}
.inline-box > p {
  margin: 0;
  color: #fff;
}
.inline-box > p:first-child {
  font-size: 24px;
}
.inline-box > p:last-child {
  font-size: 14px;
}
.new-product {
  text-align: center;
}
.new-product-title {
  font-weight: bold;
  font-size: 24px;
  line-height: 48px;
  color: #404040;
  margin-top: 68px;
  text-align: left;
  margin-left: 60px;
}
.new-product-detail {
  font-size: 20px;
  color: #404040;
  text-align: left;
  margin-left: 60px;
}
.new-product .btn {
  margin: 40px 0 100px;
  width: 134px;
  height: 36px;
  border-radius: 6px;
  font-size: 20px;
  background: #e60012;
  color: #fff;
  line-height: 24px;
  cursor: pointer;
}
.swiper-slide-next > img {
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
  -webkit-transition: all 0.6s;
  transition: all 0.6s;
}
.swiper-button-prev,
.swiper-button-next {
  top: 30%;
}
.gallery {
  position: relative;
  width: 100%;
}
.gallery-info {
  position: absolute;
  top: 0;
  left: 25.2%;
  width: 24.35%;
  height: 64%;
  text-align: center;
}
.gallery-info .overlay {
  width: 100%;
  height: 99.4%;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  cursor: pointer;
  opacity: 0;
  background-color: rgba(255, 0, 0, 0.8);
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}
.gallery-info:hover .overlay {
  opacity: 1;
  filter: alpha(opacity=100);
}
.gallery-info .inline-btn {
  width: 116px;
  margin: 20px auto 0 auto;
  padding: 5px;
  border: 1px solid #fff;
  border-radius: 5px;
  color: #fff;
  overflow: hidden;
  text-align: center;
}
.gallery-info .inline-btn > a {
  display: inline-block;
  text-decoration: none;
  color: #fff;
}
.brand-content {
  width: 990px;
  height: 160px;
  margin: 0 auto;
  border-bottom: 1px solid rgba(209, 209, 209, 0.39);
}
.brand-left {
  float: left;
  width: 229px;
  height: 136px;
  margin-top: 12px;
}
.brand-mid {
  float: left;
  width: 480px;
  height: 136px;
  margin: 12px 100px 0 40px;
}
.brand-mid > a > p {
  font-size: 16px;
  color: #929292;
  line-height: 24px;
  margin: 5px 0;
}
.brand-mid > a > p:nth-child(1) {
  font-size: 20px;
  color: #404040;
  margin: 10px 0 15px;
}
.brand-mid > a:hover > p:nth-child(1) {
  color: #e60012;
}
.brand-right {
  float: right;
  margin-top: 12px;
}
.brand-right > .btn {
  margin: 60px 0;
  width: 134px;
  height: 36px;
  border-radius: 6px;
  border: 1px solid #575757;
  font-size: 20px;
  background: #fff;
  color: #575757;
  line-height: 24px;
  cursor: pointer;
}
.brand-right > .btn:hover {
  background: #e60012;
  color: #fff;
}
.contact-icon {
  float: left;
  width: 100px;
  margin: 0 100px 80px;
  text-align: center;
}
.contact-icon:first-child {
  margin-left: 88px;
}
.contact-icon:last-child {
  margin-right: 88px;
}
.contact-icon > span,
a {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}
.contact-icon > span,
a > img:first-child {
  cursor: pointer;
}
.contact-icon > span:hover .qr {
  opacity: 1;
  filter: alpha(opacity=100);
}
.contact-icon > span > .qr {
  position: absolute;
  top: -100px;
  left: 10px;
  opacity: 0;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}
.contact-icon > span,
a > p {
  font-size: 20px;
  color: #404040;
}

.bg-pink {
  background-color: #f7b0c3;
}
.bg-cyan-blue {
  background-color: #b0b5f6;
}
.bg-cyan-pink {
  background-color: #fcb7b4;
}
.bg-cyan {
  background-color: #68d0df;
}
.bg-blue {
  background-color: #93c9f6;
}
.bg-orange {
  background-color: #ffc766;
}
.bg-green {
  background-color: #7ddec9;
}
.bg-purple {
  background-color: #c9adeb;
}
</style>

