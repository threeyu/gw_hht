<template>
  <!-- 售后管理 -->
  <div class="main">
    <img :src="bannerList[0]" class="banner" alt="">

    <div class="container">
      <div class="title">
        <p>SELF-SERVICE</p>
        <p>自助服务</p>
      </div>

      <div class="row">

        <div class="service-icon">
          <router-link :to="{name: 'selfHelp'}">
            <img src="../../assets/img/service/icon1.png" alt="">
            <p>自助售后</p>
          </router-link>
        </div>

        <div class="service-icon">
          <router-link :to="{name: 'maintainCheck'}">
            <img src="../../assets/img/service/icon2.png" alt="">
            <p>维修查询</p>
          </router-link>
        </div>

        <div class="service-icon">
          <router-link :to="{name: 'dealerCheck'}">
            <img src="../../assets/img/service/icon3.png" alt="">
            <p>经销商查询</p>
          </router-link>
        </div>

        <div class="service-icon">
          <router-link :to="{name: 'fakeCheck'}">
            <img src="../../assets/img/service/icon4.png" alt="">
            <p>防伪鉴别</p>
          </router-link>
        </div>

      </div>

      <div class="title">
        <p>CONTACT INFOMATION</p>
        <p>联络信息</p>
      </div>

      <div class="row">

        <div class="service-icon">
          <router-link :to="{path: '#'}">
            <img src="../../assets/img/service/icon5.png" alt="">
            <p>售后电话<br>4000-585-959</p>
          </router-link>
        </div>

        <div class="service-icon">
          <a @click.prevent="onClickQQ()">
            <img src="../../assets/img/service/icon6.png" alt="">
            <p>售后QQ<br>工作日8:30-18:00</p>
          </a>
        </div>

        <div class="service-icon">
          <span>
            <img src="../../assets/img/service/icon7.png" alt="">
            <img src="../../assets/img/service/wx-qr.png" class="qr" alt="">
            <p>售后微信<br>工作日8:30-18:00</p>
          </span>
        </div>

        <div class="service-icon">
          <router-link :to="{name: 'networkCheck'}">
            <img src="../../assets/img/service/icon8.png" alt="">
            <p>全国售后网点表</p>
          </router-link>
        </div>

      </div>

    </div>

    <div class="bg-white" style="margin-top:114px;padding-bottom:114px;">
      <div class="title">
        <p>OUR COMMITMENT</p>
        <p>我们的承诺</p>
      </div>

      <div class="container">
        <div class="row">
          <div class="commit-list">
            <img src="../../assets/img/service/com-1.png" alt="">
            <p>便捷的售后服务</p>
          </div>

          <div class="commit-list">
            <img src="../../assets/img/service/com-2.png" alt="">
            <p>7天无理由退货</p>
          </div>

          <div class="commit-list">
            <img src="../../assets/img/service/com-3.png" alt="">
            <p>质量问题15天内包换</p>
          </div>

          <div class="commit-list">
            <img src="../../assets/img/service/com-4.png" alt="">
            <p>1年质保</p>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  data() {
    return{
      bannerList: [
        require('../../assets/img/service/banner.png')
      ]
    }
  },
  methods: {
    onClickQQ() {
      let QQnums = [1301576369, 2909988422, 1900680283];
      let ranQQ = QQnums[Math.round(Math.random() * 2)];
      window.location.href = 'tencent://message/?uin=' + ranQQ;
    }
  }
}
</script>
 
<style scoped>
.main {
  color: #404040;
}
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
}
.service-icon {
  float: left;
  width: 298px;
  height: 292px;
  text-align: center;
  background: #fff;
  border: 1px dashed #f5edf0;
  display: block;
}
.service-icon a,
span {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  color: #575757;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
}
.service-icon a:hover {
  -webkit-transition: color 0.3s cubic-bezier(0.46, 0.01, 0.55, 1);
  transition: color 0.3s cubic-bezier(0.46, 0.01, 0.55, 1);
  color: #fe330b;
}
.service-icon > span > .qr {
  position: absolute;
  top: -55px;
  left: 5px;
  width: 98%;
  opacity: 0;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}
.service-icon span:hover .qr {
  opacity: 1;
  filter: alpha(opacity=100);
}
.service-icon p {
  font-size: 18px;
  margin-top: 40px;
  line-height: 30px;
}
.commit-list {
  float: left;
  width: 24%;
  text-align: center;
  border-right: 1px solid #929292;
}
.commit-list:first-child {
  margin-left: 22px;
}
.commit-list:last-child {
  border-right: none;
}
.commit-list > p {
  float: left;
  margin: 0;
  font-size: 20px;
}
.commit-list > img {
  float: left;
  margin-left: 40px;
  margin-right: 14px;
}
</style>