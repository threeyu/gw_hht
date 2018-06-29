<template>
  <!--经销商查询-->
  <div class="container" style="padding:50px 0;">
    <ol class="breadcrumb">
      <li>
        <router-link :to="{name: 'service'}"> 服务</router-link>
      </li>
      <li class="active">经销商查询</li>
    </ol>

    <div class="content bg-white">
      <div class="row">
        <div class="search-left">
          <input type="text" class="input-content" placeholder="请输入经销商授权编号查询" v-model="inputTxt">
        </div>

        <div class="search-right">
          <img src="../../assets/img/service/search-icon.png" alt="">
          <button class="btn btn-search" @click="onSearch()">查询</button>
        </div>

      </div>

      <div class="row tips-info" v-if="isError">
        <img src="../../assets/img/service/dealer-warn.png" alt=""> {{resultInfo}}
      </div>
      <div class="row tips-info-blank" v-else>
        <p v-html="tipsInfo"></p>
      </div>

      <div v-show="isResult">
        <div class="row result-info">
          <img src="../../assets/img/service/dealer-check.png" alt="">
          <p>恭喜您，您所购买的产品是正品可享受正规的售后服务哦~</p>
        </div>

        <div class="row result-info">
          <p>感谢您购买阿李罗产品，您所查询的经销商信息如下：</p>
        </div>

        <div class="row" v-for="(item, index) in agencyList" :key="index">
          <div class="result-content">
            <ul>
              <li>
                授权证书编号:
              </li>
              <li>
                授权经销商:
              </li>
              <li>
                授权销售所在的商城：
              </li>
              <li>
                授权销售商城注册用户名：
              </li>
              <li>
                授权经销的商品：
              </li>
              <li>
                授权使用的商城网址：
              </li>
              <li>
                授权证书有效期：
              </li>
            </ul>
          </div>

          <div class="result-content">
            <ul>
              <li>
                {{item.authorizeId}}
              </li>
              <li>
                {{item.authorizeCompany}}
              </li>
              <li>
                {{item.authorizeMall}}
              </li>
              <li>
                {{item.authorizeName}}
              </li>
              <li>
                {{item.authorizeModel}}
              </li>
              <li>
                {{item.authorizeUrl}}
              </li>
              <li>
                {{item.effectDate}}
              </li>
            </ul>
          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<script>
import { dealerApi } from '../../api/index'

export default {
  data() {
    return {
      inputTxt: '',
      isError: false,
      resultInfo: '',
      isResult: false,
      tipsInfo: '搜索说明: <br/>输入编号查询即可查询到该授权经销商的信息(如输入:BY0317015) <br/>如果不存在该经销商，则搜索结果为空。 <br/>为保障阁下的权益，请认准授权经销商购买产品。',
      agencyList: [
        {
          authorizeId: '',      // 授权编号
          authorizeCompany: '', // 授权经销商
          authorizeMall: '',    // 授权商场
          authorizeName: '',    // 授权用户名
          authorizeModel: '',   // 授权商品
          authorizeUrl: '',     // 授权商场网址
          effectDate: ''        // 授权有效期
        }
      ]
    }
  },

  methods: {
    onSearch() {
      let _sellerid = this.trimStr(this.inputTxt, "g");
      _sellerid = (/^[A-Za-z0-9]+$/).test(_sellerid) ? _sellerid : '';
      this.clearList();
      if (_sellerid == '') {
        this.resultInfo = '请输入经销商编号进行查询。';
        this.isError = true;
        this.showResultInfo();
      } else {

        let param = {
          sellerid: _sellerid
        }
        dealerApi.getList(param).then((res) => {
          let _data = res.content;
          let _result = _data.result;

          if (_result == 0) {
            let _agency = _data.agency;
            let _id = _agency.authorizeNumber;
            let _com = _agency.authorizeCompany;
            let _mall = _agency.authorizeMall;
            let _name = _agency.authorizeName;
            let _model = _agency.authorizeModel;
            let _url = _agency.authorizeUrl;
            let _date = _agency.effectiveDate;

            this.agencyList.push({
              authorizeId: _id,       // 授权编号
              authorizeCompany: _com, // 授权经销商
              authorizeMall: _mall,   // 授权商场
              authorizeName: _name,   // 授权用户名
              authorizeModel: _model, // 授权商品
              authorizeUrl: _url,     // 授权商场网址
              effectDate: _date       // 授权有效期
            });

            this.resultInfo = '';
            this.tipsInfo = '';
            this.isError = false;
          } else {
            this.resultInfo = '很遗憾，您所购买的产品并非正品，为保障您的权益，请认准授权经销商购买产品！';
            this.isError = true;
          }

          this.showResultInfo();

        }).catch(() => {
          console.log('--- failed');
          console.log(error);
        });
      }

    },

    trimStr(str, is_global) {
      let result;
      result = str.replace(/(^\s+)|(\s+$)/g, "");
      if (is_global.toLowerCase() == "g") {
        result = result.replace(/\s/g, "");
      }
      return result;
    },

    clearList() {
      if (this.agencyList.length > 0) {
        this.agencyList = [];
      }
    },

    showResultInfo() {
      this.isResult = !this.isError && !(this.agencyList.length === 0);
    }
  }
}
</script>

<style scoped>
.content {
  width: 100%;
  min-height: 780px;
  height: auto !important;
  height: 780px;
}
.search-left {
  float: left;
  width: 320px;
  margin-top: 90px;
  margin-left: 388px;
}
.search-right {
  position: relative;
  float: left;
  margin-top: 90px;
  margin-left: 20px;
  cursor: pointer;
}
.search-right > img {
  position: absolute;
  top: 20%;
  left: 10%;
}
.input-content {
  width: 100%;
  height: 36px;
  line-height: 36px;
  font-size: 16px;
  padding-left: 5px;
}
.btn-search {
  width: 94px;
  height: 40px;
  font-size: 20px;
  background-color: #e60012;
  color: #fff;
  padding-left: 40px;
}
.tips-info {
  position: relative;
  margin: 20px 0 20px 470px;
  width: 318px;
  line-height: 28px;
  text-align: left;
  color: #e60012;
}
.tips-info > img {
  position: absolute;
  top: 5px;
  left: -60px;
}
.tips-info-blank {
  margin-top: 20px;
  margin-bottom: 20px;
  height: 20px;
}
.tips-info-blank > p {
  margin-left: 400px;
  font-size: 14px;
}
.result-info {
  position: relative;
  margin-top: 25px;
  margin-bottom: 20px;
  text-align: center;
}
.result-info > img {
  position: absolute;
  top: 5px;
  left: 440px;
}
.result-info:first-child {
  margin-top: -20px;
}
.result-info:first-child > p {
  width: 234px;
  margin-left: 500px;
  color: #77ca67;
  text-align: left;
}
.result-content {
  float: left;
  width: 350px;
  background: #f6f6f6;
  border: 1px solid #f0f0f0;
  padding: 36px 0;
}
.result-content:first-child {
  border-right: none;
  margin-left: 240px;
}
.result-content:last-child {
  border-left: none;
}
ul {
  list-style-type: none;
  padding-left: 86px;
}
ul > li {
  position: relative;
  font-size: 14px;
  margin-bottom: 26px;
  color: #575757;
  display: block;
}
p {
  font-size: 16px;
  color: #575757;
  line-height: 28px;
  margin: 0;
}
</style>


