<template>
  <!--产品详情-->
  <div class="container" style="padding:50px 0;">
    <div class="row">
      <ol class="breadcrumb">
        <li class="active">产品详情</li>
        <!-- <li>
          <router-link :to="{name: 'productReport', query: { type: type, name: name }}">试用报告</router-link>
        </li> -->
        <li v-if="isShowDownload">
          <router-link :to="{name: 'productDownload', query: { type: type, name: name }}">专属资源下载</router-link>
        </li>
      </ol>
    </div>

    <div class="content">
      <img v-for="(item, index) in proDetailList" :key="index" v-lazy="item.uri" alt="">
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      name: '',
      type: ''
    }
  },
  computed: {
    ...mapGetters([
      'proDetailList'
    ]),
    isShowDownload() {
      return this.type <= 6;
    }
  },
  created() {
    this.name = this.$route.query.name;
    this.type = this.$route.query.type;
  },
  mounted() {

    this.$nextTick(() => {
      this.$store.dispatch('getProductDetailByName', this.name);
    });
  },
}
</script>


<style scoped>
.content {
  position: relative;
  width: 100%;
  min-height: 1200px;
  height: auto !important;
  height: 1200px;
  padding-bottom: 50px;
  text-align: center;
  font-size: 0;
}
.breadcrumb {
  padding: 8px 15px;
  margin-bottom: 20px;
  list-style: none;
  background-color: #f5f5f5;
  border-radius: 4px;
}
.breadcrumb > li > a {
  color: #575757;
}
.breadcrumb > .active {
  color: #e60012;
}
.breadcrumb > li + li:before {
  content: "|\A0";
}
ol {
  float: right;
  margin-top: 0;
  margin-bottom: 10px;
}
</style>

