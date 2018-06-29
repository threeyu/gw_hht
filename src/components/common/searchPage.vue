<template>
  <!--搜索结果-->
  <div style="padding:70px 0;">
    <div class="container">
      <div class="content">

        <div class="head-title">搜索结果</div>

        <div class="result-list" v-if="resultAll.singleList.length > 0">
          <div class="title">单曲列表</div>

          <div class="row">
            <div class="album-icon" :class="{'clearFix': index % 5 === 0}" v-for="(item, index) in loopPage1" :key="index">
              <div :class="['album-img', 'album-img-audio-height']" @click="onPlaySingle(resultAll.singleList[index + ptrList1[pageList1.curPage - 1]].id)">
                <img :src="resultAll.singleList[index + ptrList1[pageList1.curPage - 1]].uri" class="banner" alt="">
                <img src="../../assets/img/content/cover_play.png" class="cover" alt="">
              </div>
              <p class="album-sub-1">{{resultAll.singleList[index + ptrList1[pageList1.curPage - 1]].title}}</p>
              <p class="album-sub-2">{{resultAll.singleList[index + ptrList1[pageList1.curPage - 1]].detail}}</p>
            </div>
          </div>

          <div class="row">
            <pagination style="text-align:center;" v-model="pageList1" :curPage=pageList1.curPage :pageItem=pageList1.pageItem :totalPage=pageList1.totalPage></pagination>
          </div>
        </div>

        <div class="result-list" v-if="resultAll.albumList.length > 0">
          <div class="title">专辑列表</div>

          <div class="row">
            <div class="album-icon" :class="{'clearFix': index % 5 === 0}" v-for="(item, index) in loopPage2" :key="index">
              <div :class="['album-img', 'album-img-audio-height']" @click="onPlayAlbum(resultAll.albumList[index + ptrList2[pageList2.curPage - 1]].id)">
                <img :src="resultAll.albumList[index + ptrList2[pageList2.curPage - 1]].uri" class="banner" alt="">
                <img src="../../assets/img/content/cover_play.png" class="cover" alt="">
              </div>
              <p class="album-sub-1">{{resultAll.albumList[index + ptrList2[pageList2.curPage - 1]].title}}</p>
              <p class="album-sub-2">{{resultAll.albumList[index + ptrList2[pageList2.curPage - 1]].detail}}</p>
            </div>
          </div>

          <div class="row">
            <pagination style="text-align:center;" v-model="pageList2" :curPage=pageList2.curPage :pageItem=pageList2.pageItem :totalPage=pageList2.totalPage></pagination>
          </div>
        </div>

        <div class="result-list" v-if="resultAll.videoList.length > 0">
          <div class="title">动画列表</div>

          <div class="row">
            <div class="album-icon" :class="{'clearFix': index % 5 === 0}" v-for="(item, index) in loopPage3" :key="index">
              <div :class="['album-img', 'album-img-video-height']" @click="onPlayVideo(resultAll.videoList[index + ptrList3[pageList3.curPage - 1]].id)">
                <img :src="resultAll.videoList[index + ptrList3[pageList3.curPage - 1]].uri" class="banner" alt="">
                <img src="../../assets/img/content/cover_play.png" class="cover" alt="">
              </div>
              <p class="album-sub-1">{{resultAll.videoList[index + ptrList3[pageList3.curPage - 1]].title}}</p>
              <p class="album-sub-2">{{resultAll.videoList[index + ptrList3[pageList3.curPage - 1]].detail}}</p>
            </div>
          </div>

          <div class="row">
            <pagination style="text-align:center;" v-model="pageList3" :curPage=pageList3.curPage :pageItem=pageList3.pageItem :totalPage=pageList3.totalPage></pagination>
          </div>
        </div>

        <div class="result-list" v-if="isEmpty">
          <div class="title">未查询到相应资源</div>
        </div>

      </div>
    </div>

    <audio-player></audio-player>

  </div>
</template>

<script>
import Pagination from '../ui/pagination'
import AudioPlayer from '../ui/mp3player'
import { mapGetters } from 'vuex'

export default {
  components: {
    Pagination, AudioPlayer
  },
  data() {
    return {
      s: '',

      // 分页
      pageList1: {
        curPage: 1,
        pageItem: 8,
        totalPage: 13
      },
      perPage1: 10,
      extra1: 0,
      ptrList1: [],
      // 分页
      pageList2: {
        curPage: 1,
        pageItem: 8,
        totalPage: 13
      },
      perPage2: 10,
      extra2: 0,
      ptrList2: [],
      // 分页
      pageList3: {
        curPage: 1,
        pageItem: 8,
        totalPage: 13
      },
      perPage3: 5,
      extra3: 0,
      ptrList3: [],


      preAlbumId: 1028,
      preSingleId: 13658

    }
  },
  watch: {
    $route(val) {
      this.s = val.query.s;
      this.initResultList();
    }
  },
  computed: {
    ...mapGetters([
      // search result
      'resultAll',
    ]),
    loopPage1() {
      // 分页
      this.ptrList1 = [];
      let pLen = this.resultAll.singleList.length;
      let len = Math.ceil(pLen / this.perPage1);
      for (let i = 0; i < len; ++i) {
        this.ptrList1.push(i * this.perPage1);
      }
      this.extra1 = pLen % this.perPage1;
      this.pageList1.totalPage = len;

      let tmp = this.extra1;
      if (tmp === 0) {
        tmp = this.perPage1;
      }
      return this.pageList1.curPage != this.pageList1.totalPage ? this.perPage1 : tmp;
    },
    loopPage2() {
      // 分页
      this.ptrList2 = [];
      let pLen = this.resultAll.albumList.length;
      let len = Math.ceil(pLen / this.perPage2);
      for (let i = 0; i < len; ++i) {
        this.ptrList2.push(i * this.perPage2);
      }
      this.extra2 = pLen % this.perPage2;
      this.pageList2.totalPage = len;

      let tmp = this.extra2;
      if (tmp === 0) {
        tmp = this.perPage2;
      }
      return this.pageList2.curPage != this.pageList2.totalPage ? this.perPage2 : tmp;
    },
    loopPage3() {
      // 分页
      this.ptrList3 = [];
      let pLen = this.resultAll.videoList.length;
      let len = Math.ceil(pLen / this.perPage3);
      for (let i = 0; i < len; ++i) {
        this.ptrList3.push(i * this.perPage3);
      }
      this.extra3 = pLen % this.perPage3;
      this.pageList3.totalPage = len;

      let tmp = this.extra3;
      if (tmp === 0) {
        tmp = this.perPage3;
      }
      return this.pageList3.curPage != this.pageList3.totalPage ? this.perPage3 : tmp;
    },
    isEmpty() {
      return this.resultAll.singleList.length === 0 && this.resultAll.albumList.length === 0 && this.resultAll.videoList.length === 0;
    }
  },
  created() {
    this.s = this.$route.query.s;
  },
  mounted() {
    this.$nextTick(() => {
      this.initResultList();
    })
  },
  methods: {
    initResultList() {
      this.$store.dispatch('getSearchAll', this.s);
    },
    onPlayAlbum(id) {
      if (this.preAlbumId === id) {
        return;
      }
      this.preAlbumId = id;
      this.stop();
      this.$store.dispatch('getAudioAlbumList', id).then(() => {
        this.play();
      });
    },
    onPlaySingle(id) {
      if (this.preSingleId === id) {
        return;
      }
      this.preSingleId = id;
      this.pause();
      this.$store.dispatch('getAudioAlbumSingle', id);
    },
    onPlayVideo(id) {
      window.open('/static/video.html?v_id=' + id + '&episode=0', '_blank');// dev
      // window.open('static/video.html?v_id=' + id + '&episode=0', '_blank');// pro
    },
    stop() {
      this.pause();
      this.$store.dispatch('updateTime', { currentTime: 0, duration: 0 });
      this.$store.dispatch('changeSong', { model: 0, songNum: 1 });
    },
    pause() {
      this.$store.dispatch('setIsPlaying', false);
    },
    play() {
      this.$store.dispatch('setIsPlaying', true);
    }
  }
}
</script>


<style scoped>
.content {
  width: 100%;
  min-height: 600px;
  height: auto !important;
  height: 600px;
}
.head-title {
  font-size: 30px;
  color: #404040;
  padding-bottom: 24px;
}
.result-list .title {
  font-size: 20px;
  color: #404040;
}
.album-icon {
  position: relative;
  float: left;
  width: 232px;
  margin: 20px 4px;
}
.album-icon > p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.album-img {
  cursor: pointer;
  overflow: hidden;
  min-height: 236px;
}
.album-img-audio-height {
  height: 236px;
}
.album-img-video-height {
  height: 352px;
}
.album-img > .cover {
  position: absolute;
  top: 30%;
  left: 40%;
  width: 24%;
  opacity: 0;
}
.album-img .banner {
  width: 100%;
  height: 100%;
}
.album-img:hover .banner {
  transition: all 0.8s;
  -webkit-transition: all 0.8s;
  -ms-transition: all 0.8s;
  -moz-transition: all 0.8s;
  transform: scale(1.15, 1.15);
  -webkit-transform: scale(1.15, 1.15);
  -ms-transform: scale(1.15, 1.15);
  -moz-transform: scale(1.15, 1.15);
  opacity: 0.6;
}
.album-img:hover .cover {
  transition: all 0.8s;
  -webkit-transition: all 0.8s;
  -ms-transition: all 0.8s;
  -moz-transition: all 0.8s;
  transform: scale(1.15, 1.15);
  -webkit-transform: scale(1.15, 1.15);
  -ms-transform: scale(1.15, 1.15);
  -moz-transform: scale(1.15, 1.15);
  opacity: 1;
}
.album-sub-1 {
  font-size: 20px;
  color: #404040;
  margin-top: 20px;
  margin-bottom: 0;
}
.album-sub-2 {
  color: #929292;
  margin-top: 8px;
  margin-bottom: 0;
}
.clearFix {
  clear: both;
}
</style>


