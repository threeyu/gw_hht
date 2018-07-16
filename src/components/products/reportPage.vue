<template>
  <!--试用报告-->
  <div class="container" style="padding:50px 0;">
    <div class="row">
      <ol class="breadcrumb">
        <li>
          <router-link :to="{name: 'productDetail', query: { type: type, name: name }}">产品详情</router-link>
        </li>
        <li class="active">试用报告</li>
        <li v-if="isShowDownload">
          <router-link :to="{name: 'productDownload', query: { type: type, name: name }}">专属资源下载</router-link>
        </li>
      </ol>
    </div>

    <div class="content-top bg-white">
      <div class="title">
        试用说明
      </div>

      <div class="detail">
        <ul>
          <li>
            1.试用活动不定期举行，届时会在官方微信微博做活动。
          </li>
          <li>
            2.试用过程无须支付任何费用。
          </li>
          <li>
            3.收到货后您需如是提交真实的试用报告，无需返还试用产品。
          </li>
          <li>
            4.优秀的报告可提升您下一次申请的几率，劣质的报告将导致您被限制试用资格。
          </li>
        </ul>
      </div>

      <div class="qr">
        <div class="wx clear">
          <img src="../../assets/img/products/wxqr-download.png" alt="">
          <p>关注微信</p>
        </div>
        <div class="sina clear">
          <img src="../../assets/img/products/sinaqr-download.png" alt="">
          <p>关注微信</p>
        </div>
      </div>

    </div>

    <div class="content-bottom bg-white">

    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      type:''
    }
  },
  computed: {
    isShowDownload() {
      return this.type <= 6;
    }
  },
  created() {
    this.name = this.$route.query.name;
    this.type = this.$route.query.type;
  }
}
</script>


<style scoped>
.content-top {
  position: relative;
  height: 200px;
  margin-bottom: 46px;
  padding: 38px 0 0 50px;
}
.content-bottom {
  position: relative;
  min-height: 400px;
  height: auto !important;
  height: 400px;
  margin-bottom: 50px;
  padding: 38px 0 0 50px;
}
.breadcrumb {
  padding: 8px 15px;
  margin-bottom: 20px;
  list-style: none;
  background-color: #f5f5f5;
  border-radius: 4px;
}
.breadcrumb > li > a {
  color: #575757;
}
.breadcrumb > .active {
  color: #e60012;
}
.breadcrumb > li + li:before {
  content: "|\A0";
}
ol {
  float: right;
  margin-top: 0;
  margin-bottom: 10px;
}
.title {
  font-size: 24px;
  color: #404040;
  padding: 0 0 20px 0;
}
.detail > ul {
  margin: 0;
  padding: 0 0 40px 0;
  list-style-type: none;
}
.detail > ul > li {
  font-size: 16px;
  color: #575757;
  line-height: 25px;
}
.qr {
  position: absolute;
  top: 80px;
  right: 60px;
}
.qr p {
  margin: 0;
  font-size: 16px;
  color: #575757;
  text-align: center;
}
.qr > .wx {
  float: left;
  margin-right: 50px;
}
.qr > .sina {
  float: left;
}
</style>

