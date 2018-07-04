<template>
  <!--品牌资讯-->
  <div class="container" style="padding:50px 0;">
    <ol class="breadcrumb">
      <li>
        <router-link :to="{name: 'home'}">首页</router-link>
      </li>
      <li class="active">关于我们</li>
      <li class="active">品牌资讯</li>
    </ol>

    <div class="bg-white">
      <img src="../../assets/img/others/brand-banner.png" class="banner" alt="">

      <div class="content" style="padding: 60px 0;">
        <div class="row" v-for="(item, index) in tarList" :key="index">
          <div class="brand-content">
            <div class="brand-left">
              <img :src="item.uri" class="banner" alt="">
            </div>

            <div class="brand-mid">
              <a :href="item.link" target="_blank">
                <p>{{item.title}}</p>
                <p>{{item.date}}</p>
                <p>{{item.txt}}</p>
              </a>
            </div>

            <div class="brand-right">
              <div class="inline-btn">
                <a :href="item.link" target="_blank">了解详情 ></a>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="load-more">
            <!-- <span @click="onLoadMore()">点击加载更多..</span> -->
            <span>没有更多内容了</span>
          </div>
        </div>

      </div>
    </div>

    <div class="qr">
      <img src="../../assets/img/others/wx-qr.png" alt="">
      <p>扫码有惊喜<br>关注送福利</p>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      tarList: [],
      brandList: [
        {
          uri: require('../../assets/img/home/brand-1.png'),
          title: '火火兔获复星亿投资',
          date: '2017-09-03',
          txt: '火火兔正式获得了复星锐正资本的亿元融资，未来将实现智能玩教具 +IP+平台的儿童全产业链，向中国第一的儿童教育科技企业进军..',
          link: 'https://mp.weixin.qq.com/s/m-l89g6axOSxhT6lxE5nVg'
        },
        {
          uri: require('../../assets/img/home/brand-2.png'),
          title: '火火兔武汉粉丝见面会',
          date: '2017-09-03',
          txt: '因为听到了宝宝们的呼唤，火火兔飞到了他们的身边，陪着宝宝们在 武汉一起做游戏，一起吃美味的甜品，欢乐无限。度过了快乐的一...',
          link: 'https://mp.weixin.qq.com/s/xi33k56Otue9oDMUibt6mA'
        },
        {
          uri: require('../../assets/img/home/brand-3.png'),
          title: '火火兔荣获金点国际设计大奖',
          date: '2017-09-03',
          txt: '火火兔音乐拍拍鼓、智能早教魔块斩获金点设计奖。火火兔从中脱颖 而出不仅仅依靠产品外观，更是在理解市场、贴合消费者需求之上...',
          link: 'https://mp.weixin.qq.com/s/MVCHRc_2jUE0TR65qIp1_g'
        },
        {
          uri: require('../../assets/img/home/brand-4.png'),
          title: '开发大脑智力，培养艺术情操！',
          date: '2017-09-03',
          txt: '如果有款电子产品，既能寓教于乐，培养孩子学习能力，又能安全护眼，保护孩子视力，那爸爸妈妈们就更放心啦！',
          link: 'https://mp.weixin.qq.com/s/mS0f4aPqqWS_GDBuYmllAQ'
        }
      ],
    }
  },
  created() {
    this.tarList = this.brandList;
  },
  methods: {
    onLoadMore() {
      this.tarList = this.tarList.concat(this.brandList);
    }
  }
}
</script>


<style scoped>
.content {
  position: relative;
  width: 100%;
  min-height: 1200px;
  height: auto !important;
  height: 1200px;
  padding-bottom: 50px;
}
.brand-content {
  width: 1120px;
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
  width: 588px;
  height: 136px;
  margin: 12px 0 0 50px;
}
.brand-mid > a {
  cursor: pointer;
}
.brand-mid > a > p {
  font-size: 14px;
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
.brand-right .inline-btn {
  width: 100px;
  margin: 20px auto 0 auto;
  padding: 5px 0;
  border: 1px solid #575757;
  border-radius: 6px;
  color: #575757;
  text-align: center;
  cursor: pointer;
}
.brand-right .inline-btn:hover {
  background: #e60012;
  color: #fff;
}
.brand-right .inline-btn:hover a {
  color: #fff;
}
a {
  text-decoration: none;
  color: #575757;
}
.load-more {
  font-size: 16px;
  color: #979797;
  margin-top: 32px;
  text-align: center;
}
.load-more > span {
  cursor: pointer;
}
.qr {
  position: absolute;
  top: 900px;
  right: -140px;
}
.qr > p {
  margin: 0;
  font-size: 16px;
  color: #575757;
  text-align: center;
}
</style>

