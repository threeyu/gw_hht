<template>
  <!-- 省市县联动 -->
  <!--要把样式抽离出来 -->
  <div class="col-md-5">
    <select class="detail-info" v-model="f.p" @change="selpro">
      <option :value="i" v-for="(v,i) in pro" :key="v.id">{{v.name}}</option>
    </select>

    <select class="detail-info" v-model="f.c" @change="selcity">
      <option :value="i" v-for="(v,i) in city" :key="v.id">{{v.name}}</option>
    </select>

    <select class="detail-info" v-model="f.cc" v-show="county.length>0" @change="result">
      <option :value="i" v-for="(v,i) in county" :key="v.id">{{v.name}}</option>
    </select>
  </div>

</template>

<style scoped>
.detail-info {
  width: 30.33333333%;
  height: 50px;
  font-size: 16px;
  padding-left: 5px;
}
</style>

<script>
import cityData from "../data/city.js";

export default {
  data() {
    return {
      cityData: cityData,
      pro: "",
      city: "",
      county: "",
      f: {
        p: 0,
        c: 0,
        cc: 0,
      }
    }
  },
  model: {
    prop: 'val',
    event: 'select'
  },
  mounted() {
    this.$nextTick(() => {
      this.pro = this.cityData;
      this.f.p = 0;
      this.f.c = 0;
      this.city = this.pro[this.f.p]['child'];
      this.county = this.city[0]['child'];
      this.result();
    })
  },
  methods: {
    selpro() {
      this.city = this.pro[this.f.p]['child'];
      this.county = this.city[0]['child'];
      this.f.c = 0;
      this.f.cc = 0;
      this.result();
    },
    selcity() {
      this.county = this.city[this.f.c]['child'] ? this.city[this.f.c]['child'] : [];
      this.f.cc = 0;
      this.result();
    },
    result() {
      let _re = {
        pro: { id: this.pro[this.f.p].id, name: this.pro[this.f.p].name, n: this.f.p },
        city: { id: this.city[this.f.c].id, name: this.city[this.f.c].name, n: this.f.c },
      };
      if (this.county.length > 0) {
        _re.county = { id: this.county[this.f.cc].id, name: this.county[this.f.cc].name, n: this.f.cc };
      } else {
        _re.county = { id: "", name: "", n: "" };
      }
      this.$emit("select", _re);  //子组件向父组件传递数据
    }
  }
}	
</script>