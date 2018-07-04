<template>
  <!--售后条款-->
  <div class="container" style="padding:50px 0;">
    <ol class="breadcrumb">
      <li>
        <router-link :to="{name: 'service'}"> 服务</router-link>
      </li>
      <li>
        <router-link :to="{name: 'selfHelp'}"> 自助查询</router-link>
      </li>
      <li class="active">售后条款</li>
    </ol>

    <div class="content bg-white">
      <div class="list">
        <p class="title">售后服务政策</p>
        <p class="sub-title">在报修之前，请先了解我们的售后条款，方便我们更便捷的为您服务</p>
        <ul>
          <li class="indent">
            一、深圳博悦生活用品有限公司承诺严格执行国家相关“三包”法规定，对中国大陆地区销售的任一产品进行三包服务。
          </li>
          <li class="indent">
            二、三包有效凭证为所购发票或保修卡（需盖章），保修期为自购买之日起实现一年保修（有特别说明的除外）
          </li>
          <li class="indent">
            三、产品换新服务，产品自购买日期15日内（含）出现产品质量问题，由购买经销商处进行换新，亦可寄回至我司售后服务进行更换（需要附带购机证明，寄回运费由客户承担）。
          </li>
          <li class="indent">
            四、产品联保服务，客服可持有效购机凭证到就近授权维修店进行售后维修，维修无法处理的可以通过授权维修点向我司收货部寄回修，也可以直接寄我司售后部进行维修（寄修注意事项见下）。
          </li>
          <li class="indent">
            五、为了给客户提供更便捷的服务，非保产品，超过保修期客户承担双休运费，小问题可以免费维修，其他如严重摔坏，进水等视型号及维修情况收取15~45/台维修费（含配件费）。
          </li>
          <li class="indent">
            六、如有下列情形，需酌收材料成本及维修工时直接不予维修，由售后报价给客户或通知客户报废。<br/>※超过保修期或不在保修范围的严重损坏（主板、电池、TF卡等同时多部件损坏）<br/>※擅自拆焊零部件或修改而导致不良情形※零件之自然损耗及遇不可抗拒之天灾<br/>※非经授权渠道购得此产品者或仿制品，非本公司产品
          </li>

          <div class="diliver-box">
            送修方式
          </div>

          <li>
            邮寄地址：东莞市沙田镇港口大道超达工业园A栋一楼
          </li>
          <li>
            收件人：火火兔售后部收
          </li>
          <li>
            预留电话：0769-82929490，售后服务400热线：4000-585-959
          </li>
          <li>
            工作时间：周一至周五：8:30-18:00（法定节假日休息）
          </li>
          <li>
            寄修注意事项（重要）：一般情况下由客户承担往返运费，需要在包装中内附说明包括回寄人姓名，地址，电话，机器故障及服务需求等信息。
          </li>
        </ul>
      </div>

      <div class="check-box">
        <img class="check-box-rect" src="../../assets/img/service/border_red.png" @click="onCheck()">
        <img class="check-box-hook" src="../../assets/img/service/gou.png" v-show="isCheck">
        <span v-if="isCheck">{{this.spanTxt}}</span>
        <span v-else>{{this.spanTxt}}</span>
      </div>

      <div class="title-info">
        根据您的反馈，我们为您提供了两种最优的解决办法
      </div>

      <div class="row" style="padding-left:300px;">
        <div class="service-icon" v-bind:class="{'bg-blue': isCheck, 'btn-limited': !isCheck}">
          <a @click.prevent="onJump('sendTerm')">
            <p style="font-size:22px;">寄件维修</p>
            <p style="font-size:14px;">自行寄送到售后维修</p>
          </a>
        </div>

        <div class="service-icon" v-bind:class="{'bg-green': isCheck, 'btn-limited': !isCheck}">
          <a @click.prevent="onJump('checkTerm')">
            <p style="font-size:22px;">送检维修</p>
            <p style="font-size:14px;">送到附近售后店维修(不支持寄修)</p>
          </a>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCheck: false,
      spanTxt: '同意《博悦生活售后服务条款》'
    }
  },
  methods: {
    onCheck() {
      this.isCheck = !this.isCheck;
    },
    onJump(name) {
      if (this.isCheck)
        this.$router.push({ name: name });
      return;
    }
  }
}
</script>

<style scoped>
.content {
  width: 100%;
}
.title {
  font-size: 48px;
  color: #e60012;
  margin-bottom: 20px;
}
.sub-title {
  font-size: 22px;
  color: #333333;
  margin-bottom: 60px;
}
ul {
  list-style-type: none;
  padding-left: 0;
}
ul > li {
  position: relative;
  line-height: 34px;
  font-size: 16px;
  color: #575757;
}
.indent {
  text-indent: -35px;
  margin-left: 35px;
}
.list {
  padding: 70px 150px 50px;
}
.diliver-box {
  font-size: 22px;
  color: #333333;
  margin-top: 40px;
  margin-bottom: 20px;
  padding-bottom: 4px;
  border-bottom: 1px solid #dbdbdb;
}
.check-box {
  position: relative;
  text-align: center;
  height: 30px;
  line-height: 30px;
  font-size: 18px;
  color: #333333;
  padding-bottom: 60px;
}
.check-box-rect {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 430px;
}
.check-box-hook {
  position: absolute;
  pointer-events: none;
  z-index: 999;
  top: -10px;
  left: 430px;
}
.title-info {
  text-align: center;
  font-size: 22px;
  color: #404040;
}
.service-icon {
  float: left;
  width: 250px;
  height: 64px;
  border-radius: 6px;
  margin: 22px 27px;
}
.service-icon > a {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: inline-block;
  text-align: center;
  cursor: pointer;
}
.btn-limited {
  background: #c1c1c1;
  color: #575757;
}
.btn-limited > a {
  cursor: not-allowed;
}
.bg-blue {
  background: #5ec3f7;
  color: #fff;
}
.bg-green {
  background: #4cda64;
  color: #fff;
}
p {
  margin: 0;
}
</style>