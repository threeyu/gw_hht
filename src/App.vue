<template>
  <router-view></router-view>
</template>

<script>
export default {
  mounted() {
    this.initCNZZ();
  },
  methods: {
    initCNZZ() {
      const script = document.createElement('script');
      script.src = 'https://s22.cnzz.com/z_stat.php?id=1260820114&web_id=1260820114';
      script.language = 'JavaScript';
      script.id = 'cnzz';
      document.body.appendChild(script);
    }
  },
  watch: {
    '$route'() {
      if (window._czc) {
        // 监听路由变化
        let location = window.location;
        let contentUrl = location.pathname + location.hash;
        let refererUrl = '/';
        window._czc.push(['_trackPageview', contentUrl, refererUrl]);
      }
    }
  }
}
</script>


