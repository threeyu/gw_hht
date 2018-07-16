<template>
  <!--专属资源下载-->
  <div class="container" style="padding:50px 0;">
    <div class="row">
      <ol class="breadcrumb">
        <li>
          <router-link :to="{name: 'productDetail', query: { type: type, name: name }}">产品详情</router-link>
        </li>
        <!-- <li>
          <router-link :to="{name: 'productReport', query: { type: type, name: name }}">试用报告</router-link>
        </li> -->
        <li class="active">专属资源下载</li>
      </ol>
    </div>

    <div class="content-top bg-white">
      <div class="title">
        说明
      </div>

      <div class="detail">
        <ul>
          <li>
            1.如果您不小心将内存资料删除，您可以通过下载下列内容进行恢复。
          </li>
          <li>
            2.如果您想了解更多内容，您可以关注我们的微信或APP。
          </li>
        </ul>
      </div>

      <div class="title">
        恢复步骤
      </div>

      <div class="detail">
        <ul>
          <li>
            1.通过USB线把火火兔连接电脑。
          </li>
          <li>
            2.在我的电脑中找到对应的可移动磁盘。
          </li>
          <li>
            3.下载一下内容，负责到对应的歌曲文件夹即可。
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
          <p>关注微博</p>
        </div>
      </div>

    </div>

    <div class="content-bottom bg-white">
      <div class="title">
        专属资源
      </div>

      <div class="row">
        <div class="icon" v-for="(item, index) in resourceList" :key="index">
          <img :src="item.uri" alt="">
          <p>{{item.title}}</p>
          <button type="button" class="btn" @click.prevent="onDownload()">打包下载</button>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      name: '',
      type:'',
      resourceList: [
        { title: '  ', uri: require('../../assets/img/products/download-icon-1.png') }
      ]
    }
  },
  created() {
    this.name = this.$route.query.name;
    this.type = this.$route.query.type;
  },
  methods: {
    onDownload() {
      let p = this.name;
      let _str = "https://pan.baidu.com/s/1k5k2QOf7JTVdCpA0vn7ibgs";
      if (p === "g6s" || p === "G6S") {
        _str = "https://pan.baidu.com/s/16BVNGBa3vSJvMMKKj2iJCw";
      }
      if (p === "j1" || p === "J1") {
        _str = "https://pan.baidu.com/s/13X_8EJ7jc4HYbDTOJeAHxw";
      }
      if (p === "c6" || p === "C6") {
        _str = "https://pan.baidu.com/s/12KJ0wTCnN0gtd4y_LEkuiA";
      }
      if (p === "f6s" || p === "F6s") {
        _str = "https://pan.baidu.com/s/17hmaB1S23yMDFEFsVtWBVA";
      }
      if (p === "g6" || p === "G6") {
        _str = "https://pan.baidu.com/s/12OLrHZIlUd18y3vihhz-aw";
      }
      if (p === "g6bt" || p === "G6BT") {
        _str = "https://pan.baidu.com/s/1xDXuucBP4y-gXMNQH7VBdw";
      }
      if (p === "g63" || p === "G63") {
        _str = "https://pan.baidu.com/s/1Uqq-R-_WdlA7v8D8YpT-Og";
      }
      if (p === "g7" || p === "G7") {
        _str = "https://pan.baidu.com/s/1kulzXMieF4p6IJZiireUhA";
      }
      if (p === "f1" || p === "F1") {
        _str = "https://pan.baidu.com/s/1otpkD15KAYGsBPUmzMoMUA";
      }
      if (p === "f3" || p === "F3") {
        _str = "https://pan.baidu.com/s/1rEmjPb1lNzIEh1ddS5RjbA";
      }
      if (p === "f6" || p === "F6") {
        _str = "https://pan.baidu.com/s/1B2s7xPy50U48AosqKvIxTg";
      }
      if (p === "f7" || p === "F7") {
        _str = "https://pan.baidu.com/s/167buTBSEbwUK_INJ2bq5xA";
      }
      if (p === "tb" || p === "TB") {
        _str = "https://pan.baidu.com/s/1tlbvUahsN_VCMin8azCAbQ";
      }
      if (p === "i7" || p === "I7") {
        _str = "https://pan.baidu.com/s/1--4tR0muG-9SrJQ-YtG_7A";
      }
      if (p === "i6" || p === "I6") {
        _str = "https://pan.baidu.com/s/1FIsNCfvtZCE9kicZC_c0_A";
      }
      if (p === "i6s" || p === "I6S") {
        _str = "https://pan.baidu.com/s/1rLJOomUREkZ2b4xUC0jT3Q";
      }
      if (p === "d6" || p === "D6") {
        _str = "https://pan.baidu.com/s/1h69Z9OoM9KHLUNBCZGG0Cw";
      }
      if (p === "d7" || p === "D7") {
        _str = "https://pan.baidu.com/s/1sATvf8tW5W8kucdtboymgw";
      }
      if (p === "m6" || p === "M6") {
        _str = "https://pan.baidu.com/s/15lNotEBB5FG3jF2CVMWNVA";
      }
      if (p === "p3" || p === "P3") {
        _str = "https://pan.baidu.com/s/1SiBGyaNmrVNtJeLpkchmgw";
      }
      if (p === "j6" || p === "J6") {
        _str = "https://pan.baidu.com/s/1sG_h1MBG2JZFDxlp_Jb73w";
      }
      if (p === "p2" || p === "P2") {
        _str = "https://pan.baidu.com/s/1z74RYv7CNY7-yg_ssu4-2g";
      }
      if (p === "p2" || p === "P2") {
        _str = "https://pan.baidu.com/s/1WdfgbWvsb0y88n66u_dF6A";
      }
      if (p === "g7bt" || p === "G7BT") {
        _str = "https://pan.baidu.com/s/1Lca4BpzgK6KVrpSZmLLNLw";
      }
      if (p === "f6s-tm" || p === "F6S-TM") {
        _str = "https://pan.baidu.com/s/1k5k2QOf7JTVdCpA0vn7ibg";
      }

      window.open(_str, '_blank');
    }

  }
}
</script>


<style scoped>
.content-top {
  position: relative;
  height: 322px;
  margin-bottom: 46px;
  padding: 38px 0 0 50px;
}
.content-bottom {
  position: relative;
  height: 300px;
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
  top: 134px;
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
.icon {
  text-align: center;
  width: 176px;
  height: 180px;
  margin: 0 auto;
}
.icon p {
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  color: #575757;
}
.btn {
  width: 100px;
  height: 24px;
  line-height: 12px;
  border-radius: 6px;
  border: 1px solid #e60012;
  font-size: 16px;
  background: #e60012;
  color: #fff;
}
</style>

