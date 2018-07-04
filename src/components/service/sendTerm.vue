<template>
  <!--寄件维修-->
  <div class="container" style="padding:50px 0;">
    <ol class="breadcrumb">
      <li>
        <router-link :to="{name: 'service'}"> 服务</router-link>
      </li>
      <li>
        <router-link :to="{name: 'selfHelp'}"> 自助查询</router-link>
      </li>
      <li>
        <router-link :to="{name: 'saleTerm'}"> 售后条款</router-link>
      </li>
      <li class="active">寄件维修</li>
    </ol>

    <div class="content bg-white">

      <div class="row title-info">
        请预先将设备寄往售后处
      </div>

      <div class="row box-card">
        <div class="box-card-content">
          <ul>
            <li>
              邮寄地址 : 东莞市沙田镇港口大道超达工业园A栋一楼
            </li>
            <li>
              收件人 : 火火兔售后部收
            </li>
            <li>
              预留电话：0769-82929490，售后服务400热线：4000-585-959
            </li>
          </ul>
        </div>
      </div>

      <div class="list">

        <div class="row detail-form">
          <div class="col-md-1 sub-title">
            <p>寄件信息</p>
          </div>
        </div>

        <div class="row">

          <div class="col-md-1">
            <p class="detail-title">购买渠道</p>
          </div>

          <div class="col-md-3">
            <select v-model="channelId" class="detail-info">
              <option v-for="option in channelList" :value="option.value" :key="option.txt">
                {{ option.txt }}
              </option>
            </select>
          </div>

          <div class="col-md-1 col-md-offset-1">
            <p class="detail-title">订单号</p>
          </div>

          <div class="col-md-2">
            <input type="text" class="detail-info" placeholder="请输入购买订单号" v-model="orderId">
          </div>

        </div>

        <div class="row">

          <div class="col-md-1">
            <p class="detail-title">快递公司</p>
          </div>

          <div class="col-md-3">
            <select v-model="expressComId" class="detail-info">
              <option v-for="option in expressComList" :value="option.value" :key="option.txt">
                {{ option.txt }}
              </option>
            </select>
          </div>

        </div>

        <div class="row">

          <div class="col-md-1">
            <p class="detail-title">快递单号</p>
          </div>

          <div class="col-md-4">
            <input type="text" class="detail-info border-red" placeholder="请输入快递到售后的单号" v-model="expressId">
          </div>

          <div class="col-md-6">
            <p class="detail-title font-red">{{errorList.expressId}}</p>
          </div>

        </div>

        <div class="row">

          <div class="col-md-1">
            <p class="detail-title">故障说明</p>
          </div>

          <div class="col-md-7">
            <textarea class="txtarea-custom border-red" v-model="faultDescr"></textarea>
          </div>

          <div class="col-md-2">
            <p class="detail-title font-red">{{errorList.faultDescr}}</p>
          </div>

        </div>

        <div class="row">

          <div class="col-md-1">
            <p class="detail-title">回寄地址</p>
          </div>

          <city-select v-model="address"></city-select>

          <div class="col-md-2">
            <input type="text" class="detail-info border-red" placeholder="具体到街道单元房号" v-model="addressDetail">
          </div>

          <div class="col-md-2">
            <p class="detail-title font-red">{{errorList.addressDetail}}</p>
          </div>

        </div>

        <div class="row detail-form">
          <div class="col-md-1 sub-title">
            <p>用户信息</p>
          </div>
        </div>

        <div class="row">

          <div class="col-md-1">
            <p class="detail-title">姓名</p>
          </div>

          <div class="col-md-4">
            <input type="text" class="detail-info border-red" placeholder="请输入姓名" v-model="username">
          </div>

          <div class="col-md-6">
            <p class="detail-title font-red">{{errorList.username}}</p>
          </div>

        </div>

        <div class="row">

          <div class="col-md-1">
            <p class="detail-title">手机号码</p>
          </div>

          <div class="col-md-4">
            <input type="text" class="detail-info border-red" placeholder="请输入手机号" v-model="telNum">
          </div>

          <div class="col-md-6">
            <p class="detail-title font-red">{{errorList.telNum}}</p>
          </div>

        </div>

        <div class="row">

          <div class="col-md-1">
            <p class="detail-title">验证码</p>
          </div>

          <div class="col-md-2">
            <input type="text" class="detail-info" v-model="verifyCode">
          </div>

          <div class="col-md-2 btn-pos">
            <button class="btn-custom btn-get" :class="{'font-white':canGet,'bg-blue':canGet,'btn-forbid':!canGet}" :disabled=!canGet @click="onGetVeriCode()">{{btnGetTxt}}</button>
          </div>

        </div>

        <div class="row">

          <div class="col-md-2 col-md-offset-4 btn-pos">
            <button class="btn-custom btn-submit bg-red font-white" @click="onSubmit()">提交</button>
          </div>

        </div>

      </div>

      <toast v-model="isToast">
        <div class="row">
          <div class="col-md-12">
            <img src="../../assets/img/service/success.png" style="margin:0 auto;display:block;" alt="">
          </div>
        </div>
        <div class="row btn-pos">
          <div class="col-md-12">
            <p class="toast-title">售后申请资料提交成功</p>
          </div>
        </div>
        <div class="row btn-pos">
          <div class="col-md-12">
            <p class="toast-title">您可以通过手机号或快递单号查询维修状态</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-md-offset-4 btn-pos">
            <button class="btn-custom btn-submit bg-red font-white" @click="onJump()">维修查询</button>
          </div>
        </div>
      </toast>

    </div>
  </div>
</template>

<script>
import { sendTermApi } from '../../api/index'

import Toast from './ui/toast.vue'
import CitySelect from './ui/citySelect.vue'

export default {
  name: 'sendTerm',

  components: {
    CitySelect, Toast
  },

  data() {
    return {
      isToast: false,
      btnGetTxt: '获取',
      canGet: true,

      orderId: '',// 订单号
      expressId: '',// 快递单号
      faultDescr: '',//故障说明
      address: '',// 省市县
      addressDetail: '',// 寄回地址
      username: '',// 用户姓名
      telNum: '',// 手机号码
      verifyCode: '',// 验证码

      channelId: '',
      channelList: [
        {
          txt: '',// channelId
          value: '',// channelName
        }
      ],
      expressComId: '',
      expressComList: [
        {
          txt: '',// expressComId
          value: '',// expressComName
        }
      ],

    }
  },

  vuerify: {
    expressId: {
      test: /\S+/,
      message: '快递单号不能为空'
    },
    faultDescr: {
      test: /\S+/,
      message: '故障说明不能为空'
    },
    addressDetail: {
      test: /\S+/,
      message: '回寄地址不能为空'
    },
    username: {
      test: /\S+/,
      message: '姓名不能为空'
    },
    telNum: {
      test: /^1(3|4|5|7|8)\d{9}$/,
      message: '请输入正确的电话号码'
    },
  },

  created() {
    this.initData();
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
    initData() {
      this.getList();
    },

    getList() {
      sendTermApi.getList().then((res) => {
        let _data = res;
        let _chList = _data.content.channelList;
        let _exList = _data.content.expressList;

        this.clearList();
        for (let i = 0; i < _chList.length; ++i) {
          let _id = _chList[i].id;
          let _title = _chList[i].title;

          this.channelList.push({
            txt: _title,
            value: _id
          });
        }
        for (let j = 0; j < _exList.length; ++j) {
          let _id = _exList[j].id;
          let _title = _exList[j].title;

          this.expressComList.push({
            txt: _title,
            value: _id
          });
        }
        this.channelId = this.channelList[0].value;
        this.expressComId = this.expressComList[0].value;
      }).catch((error) => {
        console.log('--- failed');
        console.log(error);
      })
    },

    onJump() {
      this.$router.push({ name: 'maintainCheck' });
    },

    onSubmit() {
      if (this.$vuerify.check()) {
        let _name = this.username || null;
        let _phone = this.telNum || null;
        let _code = this.verifyCode || null;
        let _channel = this.channelId;
        let _orderNumber = this.orderId || null;
        let _express = this.expressComId;
        let _expressNumber = this.expressId || null;
        let _instruction = this.faultDescr || null;
        let _address = this.address.pro.name + '-' + this.address.city.name + '-' + this.address.county.name + '-' + this.addressDetail;

        let param = {
          name: _name,
          phone: _phone,
          code: _code,
          channel: _channel,
          orderNumber: _orderNumber,
          express: _express,
          expressNumber: _expressNumber,
          instruction: _instruction,
          address: _address
        }
        sendTermApi.submit(param).then((res) => {
          let _data = res;

          if (_data.ret === '1') {
            this.isToast = true;
          } else {
            alert(_data.msg);
          }
        }).catch((error) => {
          console.log('--- failed');
          console.log(error);
        });
      }
    },

    onGetVeriCode() {
      let tel = this.telNum;
      let reg = /^1(3|4|5|7|8)\d{9}$/;
      let _flag = true;

      if (tel.length === 0) {
        _flag = false;
      }
      if (!reg.test(tel)) {
        _flag = false;
      }

      if (_flag) {
        let param = {
          phone: tel
        }
        sendTermApi.getCode(param).then((res) => {
          let _data = res;

          if (_data.ret == '0') {
            alert("手机号获取验证码超过次数，请明日再来提交");
          } else {
            this.canGet = false;
            this.btnGetTxt = '60s';

            let _cnt = 60;
            let _tid = setInterval(() => {
              this.btnGetTxt = --_cnt + 's';
              if (_cnt == 0) {
                this.canGet = true;
                this.btnGetTxt = '获取';

                clearInterval(_tid);
                _tid = null;
              }
            }, 1000);
          }
        }).catch((error) => {
          console.log('--- failed');
          console.log(error);
        });
      }

    },

    clearList() {
      if (this.channelList.length > 0) {
        this.channelList = [];
      }

      if (this.expressComList.length > 0) {
        this.expressComList = [];
      }
    },

  }
}
</script>

<style scoped>
.content {
  width: 100%;
}
.title-info {
  padding-top: 50px;
  padding-bottom: 50px;
  font-size: 24px;
  color: #333333;
  font-weight: bold;
  text-align: center;
}
.box-card {
  width: 90%;
  margin: 0 auto 50px auto;
  border-radius: 10px;
  -moz-border-radius: 10px;
  border: 4px solid #5ec3f7;
}
.box-card-content {
  margin: 50px 30px 50px 30px;
}
ul {
  list-style-type: none;
  padding-left: 0;
}
ul > li {
  position: relative;
  margin-bottom: 10px;
  clear: both;
  line-height: 30px;
  font-size: 18px;
  color: #333333;
}
.list {
  padding-left: 60px;
  padding-bottom: 50px;
  font-size: 20px;
}
p {
  margin-top: 0;
}
.toast-title {
  font-size: 30px;
  text-align: center;
}
/**/
.detail-form {
  margin-top: 20px;
  margin-bottom: 20px;
}
.sub-title {
  padding-left: 0;
  padding-right: 0;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  border-bottom: 1px solid #000;
}
.sub-title > p {
  font-weight: bold;
  font-size: 16px;
}
.detail-title {
  width: 100%;
  height: 50px;
  font-size: 16px;
  line-height: 50px;
}
.detail-info {
  width: 100%;
  height: 50px;
  font-size: 16px;
  padding-left: 5px;
}
.txtarea-custom {
  width: 100%;
  height: 130px;
  resize: none;
  padding: 10px;
  font-size: 16px;
}
.btn-get {
  width: 50%;
  height: 30px;
}
.btn-submit {
  width: 80%;
  height: 40px;
  font-size: 18px;
}
.btn-pos {
  padding-top: 10px;
}
.btn-custom {
  text-align: center;
  border: 0;
  cursor: pointer;
}
.btn-forbid {
  color: #656b79;
  background-color: #c1c1c1;
  box-shadow: 0 0 1px #b8bbbf;
  cursor: not-allowed;
}
.bg-red {
  background-color: #ff054d;
}
.bg-blue {
  background-color: #5ec3f7;
}
.font-white {
  color: #fff;
}
.font-red {
  color: #e60012;
}
.border-red {
  border: 1px solid #e60012;
}
/**/
.col-md-1,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-7,
.col-md-12 {
  float: left;
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}
.col-md-12 {
  width: 100%;
}
.col-md-7 {
  width: 59.66666667%;
}
.col-md-5 {
  width: 41.66666667%;
}
.col-md-4 {
  width: 33.33333333%;
}
.col-md-3 {
  width: 25%;
}
.col-md-2 {
  width: 16.66666667%;
}
.col-md-1 {
  width: 8.33333333%;
}
.col-md-offset-1 {
  margin-left: 5.33333333%;
}
.col-md-offset-4 {
  margin-left: 35.33333333%;
}
</style>
