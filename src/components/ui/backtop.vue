<template>
  <div :class="classes" :style="styles" @click="back()">
    <slot>
      <div :class="innerClasses">
        <i class="icon-een"></i>
      </div>
    </slot>
  </div>
</template>

<script>
import { scrollTop } from '../../utils/assist.js'
import { on, off } from '../../utils/dom.js'
const prefixCls = 'back-top-box'

export default {
  data() {
    return {
      backTop: false,
      ticking: false
    }
  },
  props: {
    height: {
      type: Number,
      default: 400
    },
    bottom: {
      type: Number,
      default: 30
    },
    right: {
      type: Number,
      default: 30
    },
    duration: {
      type: Number,
      default: 1000
    },
    timing: {
      type: String,
      default: 'linear'
    }
  },
  computed: {
    classes() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-show`]: this.backTop
        }
      ];
    },
    styles() {
      return {
        bottom: `${this.bottom}px`,
        right: `${this.right}px`
      };
    },
    innerClasses() {
      return `${prefixCls}-inner`;
    },
  },
  mounted() {
    on(window, 'scroll', this.handleScroll);
    on(window, 'resize', this.handleScroll);
  },
  beforeDestroy() {
    off(window, 'scroll', this.handleScroll);
    off(window, 'resize', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (!this.ticking) {
        requestAnimationFrame(this.realFunc);
        this.ticking = true;
      }
    },
    realFunc() {
      this.backTop = window.pageYOffset >= this.height;
      this.ticking = false;
    },
    back() {
      let sTop = document.documentElement.scrollTop || document.body.scrollTop;
      scrollTop(window, sTop, 0, this.duration, this.timing);
      this.$emit('click');
    }
  }
}
</script>


<style scoped>
@import "../../assets/css/backtop.css";
</style>

