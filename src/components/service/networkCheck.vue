<template>
  <!--全国售后网点表-->
  <div class="container" style="padding:50px 0;">
    <ol class="breadcrumb">
      <li>
        <router-link :to="{name: 'service'}"> 服务</router-link>
      </li>
      <li class="active">全国售后网点表</li>
    </ol>

    <div class="row" style="color:#404040;font-size:25px;padding:0 0 30px 0;text-align:center;">
      火火兔全国售后服务网点联系表
    </div>

    <div class="content bg-white">
      <div class="row font-default" style="padding-top:20px;padding-bottom:20px; height:auto;text-align:center;color:#4e4e4e;background-color:#f6f6f6;border:1px solid #f5edf0;">
        预留电话：0769-82929490，售后服务400热线：4000-585-959，地址：东莞市沙田镇港口大道超达工业园A栋一楼。收件人：博悦售后服务部
      </div>

      <div class="row" style="text-align:center;margin: 30px auto 30px auto;">
        <img src="../../assets/img/service/form.png" alt="">
      </div>

      <div class="row" style="text-align:center;">
        注：以上网点信息可能随时变动，本公司保留修改同解释的权利，需要获取最新信息敬请向总部客服进行咨询。
      </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.content {
  width: 100%;
  min-height: 700px;
  height: auto !important;
  height: 700px;
  padding-bottom: 50px;
}
</style>


