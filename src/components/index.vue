<template>
  <div class="page">
    <header-nav></header-nav>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <div id="main" class="bg-grey">
      <router-view></router-view>
    </div>

    <back-top :timing="'ease'"></back-top>

    <footer-nav></footer-nav>

  </div>
</template>
 
<script>
import HeaderNav from './common/headerNav.vue'
import FooterNav from './common/footerNav.vue'
import BackTop from './ui/backtop'

export default {
  components: {
    HeaderNav, FooterNav, BackTop
  }
}
</script>
 
<style>
body {
  margin: 0;
  font-family: "SimHei";
}
.page {
  height: 100%;
}
.container {
  width: 1200px;
  padding: 0 10px;
}
#main,
.container {
  margin: 0 auto;
  position: relative;
}
#main {
  min-width: 1200px;
  width: auto !important;
  width: 100%;
  margin: 100px 0 0;
  padding: 0;
  min-height: 100%;
  box-sizing: border-box;
}
/****************************/
.breadcrumb {
  padding: 8px 15px;
  margin-bottom: 20px;
  list-style: none;
  background-color: #f5f5f5;
  border-radius: 4px;
}
.breadcrumb > li {
  display: inline-block;
  font-size: 18px;
}
.breadcrumb > li > a {
  color: #337ab7;
}
.breadcrumb > .active {
  color: #777;
}
.breadcrumb > li + li:before {
  padding: 0 5px;
  color: #ccc;
  content: "/\A0";
}
ol {
  margin-top: 0;
  margin-bottom: 10px;
}
.btn-toolbar {
  margin-left: -5px;
}
.btn-toolbar > .btn-group {
  margin-left: 5px;
}
.btn-toolbar,
.btn-group {
  float: left;
}
.btn-group {
  position: relative;
  display: inline-block;
  vertical-align: middle;
}
.btn-group > .btn:first-child {
  margin-left: 0;
}
.btn {
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}
/********************************/
a {
  text-decoration: none;
}
.bg-grey {
  background: #f6f6f6;
}
.bg-white {
  background: #fff;
}
.banner {
  width: 100%;
  margin: 0;
  padding: 0;
  font-size: 0;
}
/** before after**/
.btn-toolbar:before,
.row:before {
  display: table;
  content: " ";
}
.btn-toolbar:after,
.row:after {
  display: table;
  content: " ";
  clear: both;
}
.page:after,
#main:after,
.clear:after,
.container:after {
  content: "";
  display: block;
  height: 0;
  width: 0;
  clear: both;
  zoom: 1;
}
:after,
:before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
</style>