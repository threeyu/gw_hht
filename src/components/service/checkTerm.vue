<template>
  <!--送检维修-->
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
      <li class="active">送检维修</li>
    </ol>

    <div class="content bg-white">

      <div class="row title-info">
        注意:送检时请携带购物发票或购物单号
      </div>

      <div class="row">

        <div class="map-pos">
          <img src="../../assets/img/service/map.png" style="position:absolute;top:0;left:0;display:block;" alt="">
          <div class="map">
            <p id="新疆" style="top: 35%; left: 16%;" @click="onTest">新疆</p>
            <p id="西藏" style="top: 58%; left: 18%;" @click="onTest">西藏</p>
            <p id="青海" style="top: 48%;left: 37%;" @click="onTest">青海</p>
            <p id="内蒙古" style="top: 37%;left: 55%;" @click="onTest">内蒙古</p>
            <p id="甘肃" style="top: 48%;left: 52%;" @click="onTest">甘肃</p>
            <p id="宁夏" style="top: 42%;left: 57%;width: 20px;" @click="onTest">宁夏</p>
            <p id="四川" style="top: 63%;left: 50%;" @click="onTest">四川</p>
            <p id="云南" style="top: 81%;left: 46%;" @click="onTest">云南</p>
            <p id="陕西" style="top: 51%;left: 62%;width: 20px;" @click="onTest">陕西</p>
            <p id="重庆" style="top: 65%;left: 60%;" @click="onTest">重庆</p>
            <p id="贵州" style="top: 74%;left: 59%;" @click="onTest">贵州</p>
            <p id="广西" style="top: 83%;left: 61%;" @click="onTest">广西</p>
            <p id="山西" style="top: 41%;left: 68%;width: 20px;" @click="onTest">山西</p>
            <p id="河北" style="top: 42%;left: 73%;" @click="onTest">河北</p>
            <p id="河南" style="top: 53%;left: 70%;" @click="onTest">河南</p>
            <p id="湖北" style="top: 61%;left: 68%;" @click="onTest">湖北</p>
            <p id="湖南" style="top: 69%;left: 69%;width: 20px;" @click="onTest">湖南</p>
            <p id="广东" style="top: 82%;left: 73%;" @click="onTest">广东</p>
            <p id="海南" style="top: 95%;left: 65%;" @click="onTest">海南</p>
            <p id="黑龙江" style="top: 13%;left: 90%;" @click="onTest">黑龙江</p>
            <p id="吉林" style="top: 23%;left: 91%;" @click="onTest">吉林</p>
            <p id="辽宁" style="top: 30%;left: 85%;" @click="onTest">辽宁</p>
            <p id="北京" style="top: 35%;left: 75%;" @click="onTest">北京</p>
            <p id="天津" style="top: 39%;left: 78%;" @click="onTest">天津</p>
            <p id="山东" style="top: 46%;left: 79%;" @click="onTest">山东</p>
            <p id="安徽" style="top: 56%;left: 79%;width: 20px;" @click="onTest">安徽</p>
            <p id="江西" style="top: 69%;left: 77%;width: 20px;" @click="onTest">江西</p>
            <p id="江苏" style="top: 52%;left: 84%;width: 20px;" @click="onTest">江苏</p>
            <p id="上海" style="top: 59%;left: 87%;" @click="onTest">上海</p>
            <p id="浙江" style="top: 64%;left: 86%;width: 20px;" @click="onTest">浙江</p>
            <p id="福建" style="top: 72%;left: 83%;width: 20px;" @click="onTest">福建</p>
            <p id="台湾" style="top: 79%;left: 89%;width: 20px;" @click="onTest">台湾</p>
            <p id="香港" style="top: 85%;left: 76%;" @click="onTest">香港</p>
            <p id="澳门" style="top: 87%;left: 72%;" @click="onTest">澳门</p>
          </div>
        </div>

      </div>

      <div class="list">
        <div class="row">
          <div class="sub-title">
            <p>{{curId}}</p>
          </div>
        </div>

        <div class="row">
          <div class="table-responsive">
            <table class="table">
              <tbody v-for="(items, index) in curList" :key="index">
                <tr>
                  <td>
                    {{items[0]}}
                  </td>
                  <td>
                    {{items[3]}}
                  </td>
                  <td>
                    {{items[1]}}
                  </td>
                  <td>
                    {{items[2]}}
                  </td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

import mapData from "./data/map.js";

export default {
  name: 'checkTerm',

  data() {
    return {
      mapData: mapData,

      curId: '广东',
      curList: [
        ["广州市", "广州宝爱婴童", "020-38059399", "广州市天河区龙洞路北苑小区五巷3号101"],
        ["惠州市", "惠州童年幼教", "0752-2047666", "惠州市惠城区惠州大道义乌市场义乌公寓2430号"],
        ["深圳市", "深圳艾米达", "13076918303", "深圳市罗湖区桃园路8号仓库"]
      ]
    }
  },


  methods: {
    onTest(event) {
      let _id = event.target.id;

      if (_id === this.curId) {
        return;
      } else {

        let _hasFound = false;
        this.curId = _id;

        this.clearList();
        for (let i = 0; i < this.mapData.length; ++i) {
          if (this.mapData[i].p === _id) {
            _hasFound = true;

            for (let j = 0; j < this.mapData[i].city.length; ++j) {
              this.curList.push(this.mapData[i].city[j]);
            }
            break;
          }
        }

        if (!_hasFound) {
          this.curList = [
            ["暂无维修点", "", "", ""]
          ]
        }
      }
    },

    clearList() {
      if (this.curList.length > 0) {
        this.curList = [];
      }
    },
  }

}
</script>

<style scoped>
.content {
  width: 100%;
  min-height: 1200px;
  height: auto !important;
  height: 1200px;
}
.title-info {
  padding-top: 50px;
  padding-bottom: 50px;
  font-size: 24px;
  color: #333333;
  font-weight: bold;
  text-align: center;
}
.map-pos {
  position: relative;
  float: left;
  top: 0;
  left: 240px;
  width: 699px;
  height: 576px;
}
.map {
  position: absolute;
  top: 0;
  left: -10px;
  width: 100%;
  height: 100%;
}
.map p {
  position: absolute;
  margin: 0;
  padding: 0;
  cursor: pointer;
  font-size: 14px;
}
.map p:hover {
  color: #fff;
}
.sub-title {
  float: left;
  width: 100px;
  text-align: center;
}
.sub-title > p {
  font-size: 24px;
  font-weight: bold;
}
.list {
  padding: 0 100px 50px;
}
.table-responsive {
  min-height: 0.01%;
  overflow-x: auto;
}
.table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 20px;
  background-color: transparent;
  border-spacing: 0;
  border-collapse: collapse;
}
.table > tbody > tr > td,
.table > tbody > tr > th,
.table > tfoot > tr > td,
.table > tfoot > tr > th,
.table > thead > tr > td,
.table > thead > tr > th {
  padding: 8px;
  line-height: 1.42857143;
  vertical-align: top;
  border-top: 1px solid #ddd;
}
</style>
