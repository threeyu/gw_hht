<template>
  <!--防伪鉴别-->
  <div class="container" style="padding:50px 0;">
    <ol class="breadcrumb">
      <li>
        <router-link :to="{name: 'service'}"> 服务</router-link>
      </li>
      <li class="active">防伪鉴别</li>
    </ol>

    <div class="content bg-white">
      <div class="row" style="color:#404040;font-size:25px;padding:50px 0 30px 0;text-align:center;">
        火火兔激光防伪标签辨别指南
      </div>

      <div class="row dividing-line-1"></div>

      <div class="row" style="color:#4e4e4e;padding:50px 0 50px 0;text-align:center;">
        请透过日光灯下左右轻转火火兔标签，可以看到图像的3D形态变化
      </div>

      <div class="row" style="text-align:center;">
        <img src="../../assets/img/service/light.png" alt="">
      </div>

      <div class="row">

        <div style="position:relative;color:#AFA5F9;padding-top:50px;padding-left:354px;">
          <img style="float:left;" src="../../assets/img/service/tips_1.png" alt="">

          <ul style="float:left;">
            <li>
              变化1：热气球
            </li>
            <li>
              热气球为360°全可视金属立体浮雕效果。
            </li>
            <li>
              其中变化是：
            </li>
            <li>
              火火兔logo随左右轻转标签时，耳朵摆动，火火兔逐渐曲面扩大
            </li>
          </ul>
        </div>

      </div>

      <div class="row">

        <div style="position:relative;color:#AFA5F9;padding-top:40px;padding-bottom:100px;padding-left:354px;">
          <img style="float:left;" src="../../assets/img/service/tips_2.png" alt="">

          <ul style="float:left;">
            <li>
              变化2：云朵
            </li>
            <li>
              左下云朵与右下云朵左右交叉移动
            </li>
          </ul>
        </div>

      </div>

      <div class="row dividing-line-2"></div>

      <div class="row" style="color:#959595;padding-bottom:100px;">
        <div style="text-align:center;padding-top:30px;">
          防伪标签说明
        </div>

        <p style="width:810px;margin:0 auto;line-height:30px;">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;目前火火兔防伪标签采用国际上领先的技术，具有易辨识性和难仿制性。自2014年5月起火火兔所有产品外包装盒（一般在背面的顶部）都统一粘贴此防伪标签，希望消费者在购买时应注意辨别真伪，共同制止与打击仿冒产品。
        </p>
      </div>

    </div>

  </div>
</template>

<style scoped>
.content {
  width: 100%;
  height: 1160px;
}
.dividing-line-1 {
  width: 80%;
  height: 1px;
  margin: 0 auto;
  border-top: 1px solid #dbdbdb;
}
.dividing-line-2 {
  width: 80%;
  height: 1px;
  margin: 0 auto;
  border-top: 1px dashed #dbdbdb;
}
ul {
  list-style-type: none;
  padding-left: 12px;
  margin: 0;
}
ul > li {
  display: block;
  font-size: 16px;
  line-height: 28px;
  color: #575757;
}
</style>


