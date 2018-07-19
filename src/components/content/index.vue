<template>
  <!-- 内容管理 -->
  <div class="bg-white">

    <img src="../../assets/img/content/banner.png" class="banner" alt="">

    <div class="container">
      <div class="row title-pos">
        <div class="service-icon" v-for="(item, index) in conAudioTagList" :key="index" v-if="index !== 0">
          <a @click="onJump(index)">
            <img :src="item.uri" alt="">
            <p class="icon-title">{{item.txt}}</p>
          </a>
        </div>

      </div>

      <div class="row album-info" v-if="contentIndexList.recommendList.length > 0">
        <div class="row">
          <p class="album-title">精品推荐</p>
        </div>

        <div class="album-icon" v-for="(item, index) in contentIndexList.recommendList" :key="index">
          <div class="album-img" @click="onPlayAlbum(item.albumId)">
            <img :src="item.uri" class="banner" alt="">
            <img src="../../assets/img/content/cover_play.png" class="cover" alt="">
          </div>
          <p class="album-sub-1">{{item.title}}</p>
          <p class="album-sub-2">{{item.detail}}</p>
        </div>
      </div>

      <div class="row album-info" v-if="contentIndexList.characterList.length > 0">
        <div class="row">
          <p class="album-title">性格养成</p>
        </div>

        <div class="album-icon" v-for="(item, index) in contentIndexList.characterList" :key="index">
          <div class="album-img" @click="onPlayAlbum(item.albumId)">
            <img :src="item.uri" class="banner" alt="">
            <img src="../../assets/img/content/cover_play.png" class="cover" alt="">
          </div>
          <p class="album-sub-1">{{item.title}}</p>
          <p class="album-sub-2">{{item.detail}}</p>
        </div>
      </div>

      <div class="row album-info" v-if="contentIndexList.nationList.length > 0">
        <div class="row">
          <p class="album-title">国学熏陶</p>
        </div>

        <div class="album-icon" v-for="(item, index) in contentIndexList.nationList" :key="index">
          <div class="album-img" @click="onPlayAlbum(item.albumId)">
            <img :src="item.uri" class="banner" alt="">
            <img src="../../assets/img/content/cover_play.png" class="cover" alt="">
          </div>
          <p class="album-sub-1">{{item.title}}</p>
          <p class="album-sub-2">{{item.detail}}</p>
        </div>
      </div>

      <div class="row album-info" v-if="contentIndexList.wealthList.length > 0">
        <div class="row">
          <p class="album-title">财商启蒙</p>
        </div>

        <div class="album-icon" v-for="(item, index) in contentIndexList.wealthList" :key="index">
          <div class="album-img" @click="onPlayAlbum(item.albumId)">
            <img :src="item.uri" class="banner" alt="">
            <img src="../../assets/img/content/cover_play.png" class="cover" alt="">
          </div>
          <p class="album-sub-1">{{item.title}}</p>
          <p class="album-sub-2">{{item.detail}}</p>
        </div>
      </div>

      <div class="row album-info" v-if="contentIndexList.emtionList.length > 0">
        <div class="row">
          <p class="album-title">情商启蒙</p>
        </div>

        <div class="album-icon" v-for="(item, index) in contentIndexList.emtionList" :key="index">
          <div class="album-img" @click="onPlayAlbum(item.albumId)">
            <img :src="item.uri" class="banner" alt="">
            <img src="../../assets/img/content/cover_play.png" class="cover" alt="">
          </div>
          <p class="album-sub-1">{{item.title}}</p>
          <p class="album-sub-2">{{item.detail}}</p>
        </div>
      </div>

      <div class="row album-info" v-if="contentIndexList.sleepyList.length > 0">
        <div class="row">
          <p class="album-title">哄睡专区</p>
        </div>

        <div class="album-icon" v-for="(item, index) in contentIndexList.sleepyList" :key="index">
          <div class="album-img" @click="onPlayAlbum(item.albumId)">
            <img :src="item.uri" class="banner" alt="">
            <img src="../../assets/img/content/cover_play.png" class="cover" alt="">
          </div>
          <p class="album-sub-1">{{item.title}}</p>
          <p class="album-sub-2">{{item.detail}}</p>
        </div>
      </div>

      <!-- <div class="row album-info" v-if="contentIndexList.brandList.length > 0">
        <div class="row">
          <p class="album-title">品牌专区</p>
        </div>

        <div class="album-icon" v-for="(item, index) in contentIndexList.brandList" :key="index">
          <div class="album-img" @click="onPlayAlbum(item.albumId)">
            <img :src="item.uri" class="banner" alt="">
            <img src="../../assets/img/content/cover_play.png" class="cover" alt="">
          </div>
          <p class="album-sub-1">{{item.title}}</p>
          <p class="album-sub-2">{{item.detail}}</p>
        </div>
      </div> -->

    </div>

    <audio-player :posSty="posSty"></audio-player>

    <div class="qr">
      <img src="../../assets/img/content/wx-qr.png" alt="">
      <p>微信扫一扫下载</p>
      <p>火火兔讲故事APP</p>
    </div>

  </div>
</template>

<script>
import AudioPlayer from '../ui/mp3player'
import { mapGetters } from 'vuex'

export default {
  components: {
    AudioPlayer
  },
  data() {
    return {
      posSty: {
        top: '800px',
        left: '0'
      },
      preAlbumId: 1028
    }
  },
  computed: {
    ...mapGetters([
      'conAudioTagList',

      // index list
      'contentIndexList',

      // content list
      'conResList',
    ])
  },
  watch: {
    conResList() {// 暂时用watch代替回调dispatch('getConAudioList')
      if (this.conResList.length > 0) {
        this.$router.push({ name: 'contentDetail' });
      }
    }
  },
  created() {
    this.pause();

    // index list
    this.$store.dispatch('getConIndexList');
  },
  methods: {
    onJump(index) {
      this.$store.dispatch('setContentData', { titleId: 0, tagId: index, sortId: 0 });

      this.$store.dispatch('getConAudioList', { tagId: index, sortId: 0 });

      this.stop();

      // setTimeout(() => {
      //   this.$router.push({ name: 'contentDetail' });
      // }, 300);

      // this.$router.push({ name: 'contentDetail' });
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
.service-icon {
  position: relative;
  float: left;
  margin: 0 74px;
  width: 76px;
  height: 100px;
  text-align: center;
}
.service-icon:first-child {
  margin-left: 0;
}
.service-icon:last-child {
  margin-right: 0;
}
.service-icon > a {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  color: #000;
  display: inline-block;
  cursor: pointer;
}
.service-icon > a:hover {
  -webkit-transition: color 0.3s cubic-bezier(0.46, 0.01, 0.55, 1);
  transition: color 0.3s cubic-bezier(0.46, 0.01, 0.55, 1);
  color: #fe330b;
}
.title-pos {
  margin-top: 100px;
  margin-bottom: 100px;
}
.icon-title {
  font-size: 18px;
  margin-top: 14px;
  margin-bottom: 0;
}
.album-info {
  margin-top: 0;
  margin-bottom: 80px;
}
.album-title {
  font-size: 24px;
  color: #575757;
  margin-top: 0;
  margin-bottom: 20px;
}
.album-icon {
  position: relative;
  float: left;
  margin: 0 20px;
  width: 270px;
}
.album-icon:nth-child(2) {
  margin-left: 0;
}
.album-icon:last-child {
  margin-right: 0;
}
.album-icon p {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.album-img {
  cursor: pointer;
  overflow: hidden;
  width: 270px;
  height: 274px;
}
.album-img > .banner {
  width: 100%;
  height: 100%;
}
.album-img > .cover {
  position: absolute;
  top: 30%;
  left: 40%;
  width: 24%;
  opacity: 0;
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
.qr {
  position: fixed;
  right: 30px;
  bottom: 200px;
}
.qr > p {
  margin: 0;
  font-size: 16px;
  color: #575757;
  text-align: center;
}
</style>