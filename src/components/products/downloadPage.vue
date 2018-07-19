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
            3.选择下方的打包下载，将下载好的内容放入故事机对应的文件夹即可。（不必全部替换，选择自己喜欢的即可）
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
        <div class="icon" v-for="(item, index) in iconList" :key="index" v-if="downLink !== ''">
          <img :src="item.uri" alt="">
          <p>{{item.title}}</p>
          <button type="button" class="btn" @click.prevent="onDownload()">打包下载</button>
        </div>
        <div class="detail" v-else>
          暂无资源下载
        </div>

      </div>

    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import resourceList from './data/model.js'

export default {
  data() {
    return {
      name: '',
      type: '',
      downLink: '',
      iconList: [
        { title: '  ', uri: require('../../assets/img/products/download-icon-1.png') }
      ]
    }
  },
  created() {
    this.name = this.$route.query.name;
    this.type = this.$route.query.type;
  },
  mounted() {
    this.$nextTick(() => {
      let p = this.name;
      let lowStr = p.toLowerCase();
      let upStr = p.toUpperCase();
      resourceList.forEach(item => {
        if (item.name === lowStr || item.name === upStr) {
          if (item.uri === '') {
            this.downLink = '';
          } else {
            this.downLink = item.uri;
          }
          return;
        }
      });
    });
  },
  methods: {
    onDownload() {
      window.open(this.downLink, '_blank');
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
.detail {
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

