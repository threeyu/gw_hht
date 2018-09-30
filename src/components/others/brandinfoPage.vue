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
        <div class="row" v-for="(item, index) in brandNewsList" :key="index">
          <div class="brand-content">
            <div class="brand-left">
              <img v-lazy="item.uri" class="banner" alt="">
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
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'brandNewsList'
    ]),
  },
  created() {
    this.$store.dispatch('getNewsList');
  },
  methods: {
    onLoadMore() {

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
  width: 688px;
  height: 136px;
  margin: 12px 0 0 50px;
}
.brand-mid > a > p {
  font-size: 16px;
  color: #929292;
  height: 24px;
  line-height: 24px;
  margin: 0;
}
.brand-mid > a > p:nth-child(1) {
  font-size: 20px;
  color: #404040;
  margin: 5px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.brand-mid > a:hover > p:nth-child(1) {
  color: #e60012;
}
.brand-mid > a > p:nth-child(3) {
  height: 72px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
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

