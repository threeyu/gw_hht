<template>
  <ul class="pagination">
    <li v-show="current != 1" @click="current-- && goto(current--)">
      <span>{{btnPre}}</span>
    </li>
    <li v-for="index in pages" @click="goto(index)" :class="{'active':current == index}" :key="index">
      <span>{{index}}</span>
    </li>
    <li v-show="allpage != current && allpage != 0 " @click="current++ && goto(current++)">
      <span>{{btnNext}}</span>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      btnPre: '<',
      btnNext: '>',
      current: 1,
      showItem: 3,
      allpage: 13
    }
  },
  props: {
    curPage: {
      type: [String, Number],
      required: true,
      default: 1
    },
    pageItem: {
      type: [String, Number],
      required: true,
      default: 3
    },
    totalPage: {
      type: [String, Number],
      required: true
    }
  },
  model: {
    prop: 'val',
    event: 'onGoto'
  },
  created() {
    this.current = this.curPage;
    this.showItem = this.pageItem;
    this.allpage = this.totalPage;
  },
  watch: {
    curPage(val) {
      this.current = val;
    },
    pageItem(val) {
      this.showItem = val;
    },
    totalPage(val) {
      this.allpage = val;
    }

  },
  computed: {
    pages() {
      let pag = [];
      if (this.current < this.showItem) { //如果当前的激活的项 小于要显示的条数
        //总页数和要显示的条数那个大就显示多少条
        let i = Math.min(this.showItem, this.allpage);
        while (i) {
          pag.unshift(i--);
        }
      } else { //当前页数大于显示页数了
        let middle = this.current - Math.floor(this.showItem / 2),//从哪里开始
          i = this.showItem;
        if (middle > (this.allpage - this.showItem)) {
          middle = (this.allpage - this.showItem) + 1
        }
        while (i--) {
          pag.push(middle++);
        }
      }
      return pag;
    }
  },
  methods: {
    goto(index) {
      if (index == this.current) return;
      this.current = index;
      let _result = {
        curPage: this.current,
        pageItem: this.showItem,
        totalPage: this.allpage
      };
      this.$emit("onGoto", _result);
      //这里可以发送ajax请求
    }
  }
}
</script>

<style scoped>
ul {
  padding: 0;
}
li {
  list-style: none;
}
.pagination {
  position: relative;
}
.pagination li {
  display: inline-block;
  margin: 0 5px;
}
.pagination li span {
  padding: 0.5rem 1rem;
  display: inline-block;
  color: #929292;
  cursor: pointer;
}
.pagination li.active span {
  color: #e60012;
}
</style>
