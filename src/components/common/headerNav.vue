<template>
  <div id="nav-top">
    <div class="container">
      <div class="left">
        <a id="top-logo" href="#"> <img src="../../assets/img/logo.png" alt=""> </a>
        <router-link class="nav-top-opt" :to="{name: 'home'}">首页</router-link>
        <router-link class="nav-top-opt" :to="{name: 'products'}">产品</router-link>
        <router-link class="nav-top-opt" :to="{name: 'content'}">内容</router-link>
        <router-link class="nav-top-opt" :to="{name: 'brand'}">品牌</router-link>
        <router-link class="nav-top-opt" :to="{name: 'service'}">售后</router-link>
      </div>

      <div class="right">
        <input type="text" v-model="sTxt" class="index-seach-text" placeholder="搜索" onfocus="this.placeholder=''" onblur="this.placeholder='搜索'" @keyup.13="onSearch()" />
        <div class="index-seach-btn" @click.prevent="onSearch()"><img src="../../assets/img/search.png" alt=""></div>

        <!-- <div class="other">
          <div class="bubble"></div>
          <a href="http://www.alilo.com.cn/" target="_blank">返回旧版</a>
        </div> -->
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sTxt: ''
    }
  },
  methods: {
    onSearch() {
      if (this.sTxt === '') {
        return;
      }
      this.$router.push({ name: 'searchpage', query: { s: this.sTxt } });
      this.sTxt = '';
    }
  }
}
</script>


<style scoped>
#top-logo {
  position: relative;
  float: left;
  width: 128px;
  height: 120px;
}
#top-logo img {
  width: 100%;
}
#nav-top {
  /* position: fixed; */
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  min-width: 1200px;
  width: auto !important;
  width: 100%;
  height: 100px;
  line-height: 70px;
  background: #fff;
  color: #fff;
  box-shadow: 1px 1px 3px 0 #e4e4e4;
}
#nav-top a {
  color: #222;
  cursor: pointer;
  border: 1px solid #fff;
}
#nav-top .left a:first-child {
  padding-left: 0;
  margin-right: 105px;
  width: 128px;
  height: 120px;
  border: none;
}
#nav-top .left .nav-top-opt {
  margin: 35px 30px 0;
  font-weight: 500;
  display: block;
  font-size: 18px;
  float: left;
  width: 54px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  padding: 0;
}
#nav-top .left .nav-top-opt:hover {
  color: #fff;
  background: #e60012;
  border: 1px solid #e60012;
}
#nav-top .left .router-link-active,
#nav-top .left .router-link-exact-active {
  color: #eb0012;
}
#nav-top .left .router-link-active:hover,
#nav-top .left .router-link-exact-active:hover {
  color: #fff;
}
#nav-top .right {
  position: relative;
  float: right;
  width: 192px;
  height: 34px;
  margin-top: 30px;
}
#nav-top .right .index-seach-text {
  position: absolute;
  top: 0;
  left: 0;
  width: 144px;
  height: 100%;
  font-size: 16px;
  color: #bababa;
  padding-left: 5px;
  border: 1px solid #929292;
}
#nav-top .right .index-seach-text:focus {
  outline: 0;
}
#nav-top .right .index-seach-btn {
  position: absolute;
  top: 0;
  right: 0;
  width: 42px;
  height: 36px;
  background: #e60012;
  border: 1px solid #e60012;
  cursor: pointer;
}
#nav-top .right .index-seach-btn > img {
  position: absolute;
  top: 5px;
  left: 8px;
}
/* #nav-top .right .other {
  position: absolute;
  top: 0;
  right: -110px;
  color: #222;
  width: 90px;
  height: 30px;
}
#nav-top .right .other > a {
  position: absolute;
  top: 0;
  right: 0;
  height: 32px;
  line-height: 32px;
}
#nav-top .right .other > .bubble {
  position: absolute;
  width: 18px;
  height: 16px;
  top: 10px;
  left: 0;
  background: url(../../assets/img/switch.png);
  background-repeat: no-repeat;
}
#nav-top .right .other:hover > a {
  color: #e60012;
}
#nav-top .right .other:hover > .bubble {
  background: url(../../assets/img/switch-hover.png);
} */
</style>