<template>
  <!--问题反馈-->
  <div class="container" style="padding:50px 0;">
    <ol class="breadcrumb">
      <li>
        <router-link :to="{name: 'home'}">首页</router-link>
      </li>
      <li class="active">反馈中心</li>
      <li class="active">问题反馈</li>
    </ol>

    <div class="bg-white">
      <img src="../../assets/img/others/feed-banner.png" class="banner" alt="">

      <div class="content">
        <div class="row">
          <p class="title">火火兔对您给的意见和建议，深表感谢！</p>
        </div>

        <div class="row">
          <div class="que-left">
            <div class="question-info">
              {{this.btnList[this.btnVal].txt}}
            </div>
          </div>

          <div class="que-right">
            <div class="btn-toolbar" role="toolbar">
              <div class="btn-group" v-for="(item, index) in btnList" :key="index">
                <button type="button" class="btn" :class="item.classObj" @click="onClick(index)">{{item.txt}}</button>
              </div>
            </div>
          </div>
        </div>

        <div class="row per-row-pos">
          <textarea class="txtarea-custom" placeholder="请在这输入您的问题~" v-model="faultDescr"></textarea>
        </div>

        <div class="row" v-show="errorList.faultDescr">
          <div class="error-content" style="margin:-25px 0;">
            <p>{{errorList.faultDescr}}</p>
          </div>
        </div>

        <div class="row per-row-pos">
          <div class="tel-left">
            <input type="text" class="input-content" placeholder="请输入您的手机号码" v-model="telNum">
          </div>

          <div class="error-content" v-show="errorList.telNum">
            <p>{{errorList.telNum}}</p>
          </div>
        </div>

        <div class="row per-row-pos">
          <div class="code-left">
            <input type="text" class="input-content" placeholder="请输入验证码" v-model="verifyCode">
          </div>

          <div class="code-box">
            {{verifyQues}}
          </div>

          <div class="code-reset" @click="onRandom()"></div>

          <div class="error-content" v-show="verifyCode!==verifyAns">
            <p>请输入正确的验证码</p>
          </div>
        </div>

        <div class="row">
          <div class="submit-pos">
            <button class="btn btn-submit" @click="onSubmit()">提交问题</button>
          </div>
        </div>

      </div>
    </div>

    <toast v-model="isToast">
      <div class="row">
        <p style="text-align:center;font-size:24px;color:#575757;">提交成功谢谢你的反馈</p>
      </div>

      <div class="row">
        <div class="ok-pos">
          <button class="btn btn-submit" @click="onJump()">确定</button>
        </div>
      </div>
    </toast>

  </div>
</template>

<script>
import { feedbackApi } from '../../api/index'

import Toast from './ui/toast.vue'

export default {
  components: {
    Toast
  },
  data() {
    return {
      isToast: false,
      btnVal: '0',// 选择第几个按钮
      btnList: [
        { txt: '问题反馈', classObj: { 'btn-pink': true } },
        { txt: '有错别字', classObj: { 'btn-light-blue': true } },
        { txt: '歌曲无法播放', classObj: { 'btn-deep-blue': true } },
        { txt: '视频无法播放', classObj: { 'btn-orange': true } },
        { txt: '链接失败', classObj: { 'btn-grey': true } },
        { txt: '产品问题', classObj: { 'btn-yellow': true } },
        { txt: '其他问题', classObj: { 'btn-red': true } }
      ],

      faultDescr: '',//问题说明
      telNum: '',// 手机号码
      verifyCode: '',// 验证码
      verifyQues: '',// 验证问题
      verifyAns: ''// 验证答案
    }
  },
  vuerify: {
    faultDescr: {
      test: /\S+/,
      message: '问题说明不能为空'
    },
    telNum: {
      test: /^1(3|4|5|7|8)\d{9}$/,
      message: '请输入正确的电话号码'
    },
  },
  created() {
    this.onRandom();
  },
  computed: {
    errorList() {
      return this.$vuerify.$errors;
    },

    invalid() {
      return this.$vuerify.invalid;
    }
  },
  methods: {
    onClick(index) {
      this.btnVal = index;
    },
    onRandom() {
      let a = Math.round(Math.random() * 5);
      let b = Math.round(Math.random() * 5);

      this.verifyAns = a + b + "";
      this.verifyQues = a + '+' + b + '=?';
    },
    onSubmit() {
      if (this.$vuerify.check() && (this.verifyCode === this.verifyAns)) {
        let _title = this.btnList[this.btnVal].txt;
        let _content = this.faultDescr;
        let _url = this.telNum;

        let param = {
          title: _title,
          content: _content,
          url: _url
        }
        feedbackApi.submit(param).then((res) => {

          this.isToast = true;
        }).catch((error) => {
          console.log('--- failed');
          console.log(error);
        });
      }
    },
    onJump() {
      this.$router.push({ name: 'home' });
    },
  }
}
</script>


<style scoped>
.content {
  width: 100%;
  height: 828px;
}
.row {
  margin: 0 100px;
}
.title {
  margin: 60px 0 30px;
  font-size: 24px;
  color: #575757;
}
.que-left {
  width: 210px;
  float: left;
}
.que-right {
  float: right;
}
.btn {
  height: 44px;
  font-size: 16px;
}
.btn-group {
  margin-left: 12px;
}
.question-info {
  height: 44px;
  line-height: 44px;
  text-align: left;
  padding: 0 0 0 10px;
  color: #ee5561;
  border: 1px solid #ee5561;
}
.per-row-pos {
  margin-top: 25px;
  margin-bottom: 25px;
}
.txtarea-custom {
  width: 100%;
  height: 130px;
  resize: none;
  font-size: 16px;
  padding: 10px;
  overflow: auto;
}
.tel-left {
  float: left;
  width: 320px;
  margin-right: 20px;
}
.error-content {
  float: left;
  width: 320px;
  display: block;
}
.error-content > p {
  width: 100%;
  height: 50px;
  font-size: 16px;
  line-height: 50px;
  margin: 1px 0;
  color: #ee5561;
}
.input-content {
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  padding-left: 5px;
}
.code-left {
  float: left;
  width: 210px;
  margin-right: 20px;
}
.code-box {
  float: left;
  width: 94px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  padding: 0;
  margin: 10px 16px 0 0;
  border: 1px solid #ee5561;
  color: #929292;
}
.code-reset {
  float: left;
  width: 12px;
  height: 12px;
  background: url(../../assets/img/others/reset.png) center center no-repeat;
  cursor: pointer;
  margin: 22px 20px 0 0;
}
.code-reset:hover {
  background: url(../../assets/img/others/reset-hover.png) center center
    no-repeat;
}
.btn-submit {
  width: 160px;
  height: 42px;
  background-color: #e60012;
  color: #fff;
}
.submit-pos {
  margin-top: 100px;
  display: block;
  text-align: center;
}
.ok-pos {
  margin-top: 50px;
  display: block;
  text-align: center;
}
.btn-pink {
  background-color: #ffa3bb;
  color: #fff;
}
.btn-light-blue {
  background-color: #95caff;
  color: #fff;
}
.btn-deep-blue {
  background-color: #a7b1ff;
  color: #fff;
}
.btn-orange {
  background-color: #ffb46b;
  color: #fff;
}
.btn-grey {
  background-color: #4be1d5;
  color: #fff;
}
.btn-yellow {
  background-color: #ffb369;
  color: #fff;
}
.btn-red {
  background-color: #ff9696;
  color: #fff;
}
</style>


