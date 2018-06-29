<template>
  <div id="nav-foot">
    <div class="top-bg">
      <div class="container">
        <div class="row">
          <div class="top">

            <div class="nav-list">
              <p>
                关于我们
              </p>
              <ul class="list-unstyled ">
                <li>
                  <router-link :to="{name: 'brand'}">关于火火兔</router-link>
                </li>
                <li>
                  <router-link :to="{name: 'brandinfo'}">品牌资讯</router-link>
                </li>
                <li>
                  <router-link :to="{name: 'contact'}">联系我们</router-link>
                </li>
              </ul>
            </div>

            <div class="nav-list">
              <p>
                服务支持
              </p>
              <ul class="list-unstyled ">
                <li>
                  <a href="http://www.alilo.com.cn/down/huohuotuPC_V1.31.exe" target="_blank">资源下载</a>
                </li>
                <li>
                  <router-link :to="{name: 'networkCheck'}">全国售后网点</router-link>
                </li>
                <li>
                  <router-link :to="{name: 'service'}">在线服务</router-link>
                </li>
                <li>
                  <router-link :to="{name: 'selfHelp'}">自助售后</router-link>
                </li>
                <li>
                  <router-link :to="{name: 'dealerCheck'}">授权查询</router-link>
                </li>
              </ul>
            </div>

            <div class="nav-list">
              <p>
                反馈中心
              </p>
              <ul class="list-unstyled ">
                <li>
                  <router-link :to="{name: 'feedback'}">问题反馈</router-link>
                </li>
              </ul>
            </div>

            <div class="nav-list">
              <p>
                关于版权
              </p>
              <ul class="list-unstyled ">
                <li>
                  <router-link :to="{name: 'copyright'}">版权声明</router-link>
                </li>
              </ul>
            </div>

            <div class="nav-list">
              <p>
                国外官网
              </p>
              <ul class="list-unstyled ">
                <li>
                  <a href="http://www.alilo-world.com" target="_blank">alilo-world</a>
                </li>
                <li>
                  <a href="http://www.alilotoy.com" target="_blank">alilotoy</a>
                </li>
              </ul>
            </div>

            <div class="nav-list">
              <p>
                博悦旗下品牌
              </p>
              <ul class="list-unstyled ">
                <li>
                  <img src="../../assets/img/icon-1.png">
                </li>
                <li>
                  <img src="../../assets/img/icon-2.png">
                  <img src="../../assets/img/icon-3.png">
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>

    <div class="mid-bg">
      <div class="container">
        <div class="row">
          <div class="mid">

            <div class="address-list">
              <div style="display:inline-block;height:29px;line-height:29px;">
                <img style="float:left;" src="../../assets/img/icon-4.png">
                <span style="float:left;padding:0 0 0 10px;color:#989898;font-size:14px;">公司名称：深圳市博悦生活用品有限公司</span>
              </div>
            </div>

            <div class="address-list">
              <div style="display:inline-block;height:29px;line-height:29px;">
                <img style="float:left;" src="../../assets/img/icon-5.png">
                <span style="float:left;padding:0 0 0 10px;color:#989898;font-size:14px;">联系地址：深圳市南山区科技南十二路18号长虹科技大厦9楼07单元</span>
              </div>
            </div>

            <div class="address-list">
              <div style="display:inline-block;height:29px;line-height:29px;">
                <img style="float:left;" src="../../assets/img/icon-6.png">
                <span style="float:left;padding:0 0 0 10px;color:#989898;font-size:14px;">联系电话：0755-86699253</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <div class="bottom-bg">
      <div class="container">
        <div class="row">
          <div class="bottom">
            <a target="_blank" href="http://szcert.ebs.org.cn/dfbdae64-a488-4984-aca1-22abe3dfdb79" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
              <img style="float:left;" src="http://szcert.ebs.org.cn/Images/govIcon.gif" width="26" height="36">
              <span style="float:left;color:#000;padding:0 0 0 20px;">2010-2017深圳市博悦生活用品有限公司版权所有，并保留所有权利 <br>ICP备案证书号：粤ICP备14010229-1　公安机关备案号：44030502000626</span>
            </a>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
 
<style scoped>
#nav-foot {
  position: absolute; /*position: absolute;z-index: -1;为了让footer不挡住其他div*/
  z-index: -1;
  width: 100%;
}
.top {
  width: 100%;
  height: 218px;
  margin: 0;
  background: #474747;
}
.top-bg {
  background: #474747;
}
.mid {
  width: 100%;
  height: 68px;
  margin: 0 10px 0;
  background: #404040;
}
.mid-bg {
  background: #404040;
}
.bottom {
  width: 100%;
  height: 100px;
  margin: 0 10px 0;
  background: #fff;
  line-height: 60px;
  text-align: center;
  font-size: 14px;
}
.bottom-bg {
  background: #fff;
}
ul {
  list-style-type: none;
}
ul > li {
  position: relative;
  font-size: 16px;
  margin-bottom: 8px;
  clear: both;
}
a {
  color: #989898;
}
a:hover {
  color: #fff;
}
.list-unstyled {
  padding: 0;
  margin: 0;
}
.nav-list {
  position: relative;
  float: left;
  color: #fff;
  font-size: 20px;
  margin: 0 60px;
}
.nav-list:first-child {
  margin-left: 0;
}
.nav-list:last-child {
  margin-right: 0;
}
.nav-list > p:first-child {
  color: #efefef;
  margin-top: 24px;
  margin-bottom: 16px;
}
.address-list {
  position: relative;
  float: left;
  margin: 20px 41px 0;
}
.address-list:first-child {
  margin-left: 10px;
}
</style>