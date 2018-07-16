<template>
  <!--自助售后-->
  <div class="container" style="padding:50px 0;">
    <ol class="breadcrumb">
      <li>
        <router-link :to="{name: 'service'}"> 服务</router-link>
      </li>
      <li class="active">自助售后</li>
    </ol>

    <div class="content bg-white">
      <div class="row">
        <div class="type-icon">
          <type-radio class="radio" v-model="typeVal" value="1" txt="故事机" :imgList=imgSrc_1 :checked="ischecked"></type-radio>
        </div>

        <div class="type-icon">
          <type-radio class="radio" v-model="typeVal" value="2" txt="视频机" :imgList=imgSrc_2></type-radio>
        </div>

      </div>

      <div class="row">
        <div class="que-left">
          <p>常见问题</p>
        </div>

        <div class="que-right">
          <type-btn v-model="btnVal" :btnList=btnList></type-btn>
        </div>

      </div>

      <div class="row dividing-line"></div>

      <div class="row">
        <div class="detail-info">
          <ul>
            <li v-for="(item, index) in showList" :key="index" :class="item.isRemark? 'imRemark':'imNotRemark'">
              {{item.msg}}
            </li>
          </ul>
        </div>
      </div>

      <div class="row">
        <p style="text-align:center;color:#404040;">依旧没有解决我的问题，
          <router-link :to="{name: 'saleTerm'}" style="color:#e60012;cursor:pointer;text-decoration:underline;">我要报修</router-link>
        </p>
      </div>

    </div>

  </div>
</template>

<script>

import TypeRadio from './ui/typeRadio.vue'
import pic_1_default from '@/assets/img/service/1_1.png'
import pic_2_default from '@/assets/img/service/1_2.png'
import pic_3_default from '@/assets/img/service/2_1.png'
import pic_4_default from '@/assets/img/service/2_2.png'

import TypeBtn from './ui/typeBtn.vue'

export default {
  components: { TypeRadio, TypeBtn },

  data() {
    return {
      typeVal: '',// 选择故事机或视频机
      preType: '',// 暂存
      ischecked: true,
      imgSrc_1: [
        { uri: pic_1_default },
        { uri: pic_3_default }
      ],
      imgSrc_2: [
        { uri: pic_2_default },
        { uri: pic_4_default }
      ],
      btnVal: '0',// 选择第几个按钮
      btnList: [],
      btnList_1: [
        { txt: '充电与开机类' },
        { txt: '可亮灯（耳灯亮），不能正常播放类' },
        { txt: '如何更换或添加播放内容' },
        { txt: '关于蓝牙连接、APP操作' }
      ],
      btnList_2: [
        { txt: '充电与开机类' },
        { txt: '触屏、LCD显示类' },
        { txt: '无声音类' },
        { txt: '如何更换或添加播放内容？' }
      ],
      showList: [],
      detailList: [
        [
          [{
            msg: '1、火火免内置可充电电池，若不能开机，应检查电池是否有电?正常情况下充电指示灯亮，带LCD的机型有充电指示，电池充电一般为3~5小时后可充满,充电指示灯灭,可尝试重新开机试一下。', isRemark: false
          }, {
            msg: '2、不充电,充电提示灯是否正常？充电灯不亮需检查供电是否正常？数据线是否接好？可尝试更换数据线或充电头试一下(接口一致一般可通用)。',
            isRemark: false
          }, {
            msg: '3、可观察一下USB口是否有人为插坏的异常情况，如有损坏需要返修。',
            isRemark: false
          }, {
            msg: '4、确定充电器及USB口没有问题,可拆机检查更换充电电池试一下。',
            isRemark: false
          }, {
            msg: '注：火火兔充电时充电指示红灯亮，充满时红灯灭，绿灯是录音指示灯，充一下就灭可能是电池余电较多；机器默认待机30分钟播放不操作会自动休眠，并非电池没电。可充满电后开机播放常按“耳灯”按键保持三秒关闭自动休眠功能后，能持续播放二个小时以上为正常。',
            isRemark: true
          }],
          [{
            msg: '1、检查音量开关是否调到了最小位置。',
            isRemark: false
          }, {
            msg: '2、开机后能听到“我是火火兔，是你最贴心的好朋友”，则可能是无法读到播放内容，可尝试重新安装内存卡（拧开底部螺丝，就能看见内存卡，个别机型内置卡如TB，需要拆机）。',
            isRemark: false
          }, {
            msg: '3、将兔子通过数据线，连接电脑USB口，正常情况下能找到U盘(K1、M1等机型插上数据线后需要在机器上进行确认打开USB存储)，检查内存卡里的文件夹名、文件格式和文件的存放位置是否正确。',
            isRemark: false
          }, {
            msg: '4、开机后没有任何声音提示，可能是喇叭损坏或内连接线松，需要返修（2014年以前生产较早期产品开机没有“我是火火兔，是你最贴心好朋友”提示音）。',
            isRemark: false
          }, {
            msg: '注：本机播放内容存储在TF卡中，若TF卡文件损坏，中病毒，或TF卡本身损坏，可能导致卡音或不能正常播放，用户可尝试格式化TF卡或自行更换TF卡后重拷文件。',
            isRemark: true
          }],
          [{
            msg: '1、兔子通过USB线连接可联网的电脑，通过内置PC客户端自动链接官网分类下载播放内容,下载后会自动归类到兔子文件夹中。',
            isRemark: false
          }, {
            msg: '2、通过网络下载对应的MP3文件，存放到相应文件夹中即可增加内容。',
            isRemark: false
          }, {
            msg: '3、进入TF对应文件夹，找到不需要的内容删除即可去掉不需要的内容。',
            isRemark: false
          }, {
            msg: '注：摇铃不适用上述情况，内容不能替换。G63网络故事机也不适用。',
            isRemark: true
          }],
          [{
            msg: '1、长按兔子蓝牙按键开启蓝牙功能。',
            isRemark: false
          }, {
            msg: '2、手机设置打开蓝牙，搜索到故事机后连接，兔子会提示蓝牙连接成功；蓝牙连接成功后兔子可作蓝牙音响使用。',
            isRemark: false
          }, {
            msg: '3、打开手机APP，选择故事机，激活设备后正常使用。',
            isRemark: false
          }]
        ],
        [
          [{
            msg: '1、火火免内置可充电电池，若不能开机，应检查电池是否有电?正常情况下充电指示灯亮，带LCD的机型有充电指示，电池充电一般为3~5小时后可充满,充电指示灯灭,可尝试重新开机试一下。',
            isRemark: false
          }, {
            msg: '2、不充电,充电提示灯是否正常？充电灯不亮需检查供电是否正常？数据线是否接好？可尝试更换数据线或充电头试一下(接口一致一般可通用)。',
            isRemark: false
          }, {
            msg: '3、可观察一下USB口是否有人为插坏的异常情况，如有损坏需要返修。',
            isRemark: false
          }, {
            msg: '4、确定充电器及USB口没有问题,可拆机检查更换充电电池试一下。',
            isRemark: false
          }],
          [{
            msg: '1、开机耳灯亮，声音正常，首先检查是否为近距离护眼功能启动？可通过成长宝箱，家长设置更改设置试一下。',
            isRemark: false
          }, {
            msg: '2、LCD显示正常，所有触屏不良，需要返修。',
            isRemark: false
          }, {
            msg: '3、触屏正常，个别菜单下点击菜单无反应，可能是内存卡中对应文件程序丢失，可联系售后客服处理。',
            isRemark: false
          }, {
            msg: '4、LCD显示异常，如白屏，花屏，破裂等需要联系售后返修。',
            isRemark: false
          }],
          [{
            msg: '1、开机后显示正常，没有任何声音，调节音响键检查是否为音量设置为最低。',
            isRemark: false
          }, {
            msg: '2、可能是喇叭损坏需要返修。',
            isRemark: false
          }],
          [{
            msg: '1、兔子通过USB线连接的电脑,将下载的播放内容放置成长宝箱指定的目录中。',
            isRemark: false
          }, {
            msg: '2、视频文件可通过网上资源查找下载，如爱奇异艺，优酷，暴风影音等播放软件离线下载到本地硬盘上。',
            isRemark: false
          }, {
            msg: '3、下载的视频文件不对可通过机器自带软件进行转换，U盘中的软件需在电脑中安装。',
            isRemark: false
          }, {
            msg: '注：自定义视频文件只能放到成长宝箱指定目录。',
            isRemark: true
          }]
        ]
      ]
    }
  },

  created() {
    this.showList = this.detailList[0][0];
    this.preType = this.typeVal;
  },

  updated() {
    this.btnList = this.typeVal === "1" ? this.btnList_1 : this.btnList_2;


    let nowType = this.typeVal;
    if (nowType !== this.preType) {
      this.btnVal = 0;
      this.preType = nowType;
    }


    let i = parseInt(this.typeVal) - 1;
    let j = parseInt(this.btnVal);
    this.showList = this.detailList[i][j];
  }
}
</script>

<style scoped>
.content {
  width: 100%;
  height: 1238px;
}
.type-icon {
  float: left;
  margin: 108px 90px;
}
.type-icon:first-child {
  margin-left: 360px;
}
.type-icon:last-child {
  margin-right: 360px;
}
.que-left {
  float: left;
  margin-left: 106px;
  margin-right: 64px;
}
.que-left > p {
  margin: 0;
  font-size: 24px;
  color: #404040;
  display: inline-block;
}
.que-right {
  float: left;
}
.dividing-line {
  width: 988px;
  height: 1px;
  margin: 34px auto;
  border-top: 1px solid #dbdbdb;
}
.detail-info {
  margin-left: 230px;
  margin-right: 108px;
}
.imRemark {
  color: #929292;
}
.imNotRemark {
  color: #404040;
}
ul {
  list-style-type: none;
}
ul > li {
  position: relative;
  margin-bottom: 28px;
  line-height: 28px;
  clear: both;
  font-size: 16px;
  color: #404040;
}
</style>


