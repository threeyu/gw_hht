<template>
  <!--视频播放-->
  <div class="container" style="padding:50px 0;">
    <ol class="breadcrumb">
      <li>
        <router-link :to="{name: 'home'}">首页</router-link>
      </li>
      <li class="active">看动画</li>
      <li class="active">视频播放</li>
    </ol>

    <div class="bg-white">
      <div class="content">

        <div class="row">
          <div class="video-title">
            {{title}}
          </div>
        </div>

        <div class="row">
          <div class="video-player"></div>

          <div class="video-list">
            <div class="top">
              <p class="title">{{videoInfo.title}}</p>
              <p class="detail">{{videoInfo.detail}}</p>
            </div>

            <div class="bottom">
              <ul ref="detailList">
                <li v-for="(item, index) in videoInfo.list" :key="index" @mousewheel="onMouseScroll()">
                  <p class="id">{{index + 1}}</p>
                  <p class="txt">{{item.txt}}</p>
                  <p class="browse">{{item.browseNum}}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>

export default {
  data() {
    return {

      title: '火火兔律动儿歌 : 01 超级英雄',
      videoInfo: {
        title: '火火兔律动儿歌火火兔律动儿歌火火兔律动儿歌火火兔律动儿歌',
        detail: '更新至32集',
        list: [
          { txt: '01 超级英雄', browseNum: 9999 },
          { txt: '02 数鸭子', browseNum: 2342341 },
          { txt: '03 超级英雄', browseNum: 9999 },
          { txt: '04 数鸭子', browseNum: 2342341 },
          { txt: '05 超级英雄', browseNum: 9999 },
          { txt: '06 数鸭子', browseNum: 2342341 },
          { txt: '07 超级英雄', browseNum: 9999 },
          { txt: '08 数鸭子', browseNum: 2342341 },
          { txt: '09 超级英雄', browseNum: 9999 },
          { txt: '10 数鸭子', browseNum: 2342341 },
          { txt: '11 超级英雄', browseNum: 9999 },
          { txt: '12 数鸭子', browseNum: 2342341 },
          { txt: '13 超级英雄', browseNum: 9999 },
          { txt: '14 数鸭子', browseNum: 2342341 },
          { txt: '15 超级英雄', browseNum: 9999 },
          { txt: '16 数鸭子', browseNum: 2342341 },
          { txt: '17 超级英雄', browseNum: 9999 },
          { txt: '18 数鸭子', browseNum: 2342341 },
          { txt: '19 超级英雄', browseNum: 9999 },
          { txt: '20 数鸭子', browseNum: 2342341 },
          { txt: '21 超级英雄', browseNum: 9999 },
          { txt: '22 数鸭子', browseNum: 2342341 },
          { txt: '23 超级英雄', browseNum: 9999 },
          { txt: '24 数鸭子', browseNum: 2342341 },
          { txt: '25 超级英雄', browseNum: 9999 },
          { txt: '26 数鸭子', browseNum: 2342341 },
          { txt: '27 超级英雄', browseNum: 9999 },
          { txt: '28 数鸭子', browseNum: 2342341 },
          { txt: '29 超级英雄', browseNum: 9999 },
          { txt: '30 数鸭子', browseNum: 2342341 },
          { txt: '31 超级英雄', browseNum: 9999 },
          { txt: '32 数鸭子', browseNum: 2342341 }
        ]
      },

      maxRow: 10,
      curVideoId: 0,
      distance: 55,
      listLen: 0,
      scrollY: 0,


    }
  },
  computed: {
    scrollData() {
      return this.scrollY + 'px';
    }
  },
  created() {
    this.listLen = this.videoInfo.list.length;
    this.scrollY = -(this.distance * (this.curVideoId < this.maxRow ? 0 : this.listLen - this.curVideoId < this.maxRow ? this.listLen - this.maxRow : this.curVideoId));
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.detailList.style.top = this.scrollData;


    });
  },
  methods: {
    onMouseScroll() {
      if (this.listLen > this.maxRow) {
        event.preventDefault();
        let _delta = (event.wheelDelta && (event.wheelDelta > 0 ? 1 : -1)) || (event.detail && (event.detail > 0 ? -1 : 1));

        if (_delta > 0) {
          if (this.scrollY === 0) {
            return;
          }
          this.scrollY += this.distance;
        } else {
          let _overflow = this.listLen - this.maxRow;
          if (this.scrollY === -(this.distance * _overflow)) {
            return;
          }
          this.scrollY -= this.distance;
        }
        this.$refs.detailList.style.top = this.scrollData;

      }
    }
  }
}
</script>

<style scoped>
.content {
  position: relative;
  width: 100%;
  height: 680px;
  margin-bottom: 50px;
}
.video-title {
  height: 56px;
  line-height: 56px;
  font-size: 20px;
  color: #333333;
  margin-left: 15px;
}
.video-player {
  float: left;
  width: 894px;
  height: 621px;
  background: url(../../assets/img/content/loading.png) center center no-repeat;
}
.video-list {
  float: right;
  width: 306px;
  height: 621px;
  color: #fff;
  background: #222222;
}
.video-list p {
  margin: 0;
}
.video-list > .top,
.video-list > .bottom {
  position: relative;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.video-list > .top {
  height: 71px;
}
.video-list > .top .title {
  position: absolute;
  top: 15px;
  left: 15px;
  font-size: 16px;
  color: #fcfcfc;
}
.video-list > .top .detail {
  position: absolute;
  top: 40px;
  left: 15px;
  font-size: 12px;
  color: #999999;
}
.video-list > .bottom {
  height: 550px;
}
ul {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  margin: 0;
  padding: 0;
  list-style-type: none;
}
ul > li {
  position: relative;
  height: 55px;
  cursor: pointer;
}
ul > li:hover {
  background: #515151;
}
ul > li .id {
  position: absolute;
  top: 10px;
  left: 15px;
  color: #999999;
  font-size: 12px;
}
ul > li .txt {
  position: absolute;
  top: 10px;
  left: 45px;
  color: #fcfcfc;
  font-size: 14px;
}
ul > li .browse {
  position: absolute;
  top: 30px;
  left: 45px;
  color: #999999;
  font-size: 12px;
}
</style>

