<template>
  <div v-if="isShow">
    <!-- <div class="dialog-cover" v-if="isShow" @click="onClose()"></div> -->
    <div class="dialog-cover" ></div>
    <transition name="drop">
      <div class="dialog-content">
        <p class="dialog-close" @click="onClose()">X</p>
        <slot>empty</slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'isShow',
    event: 'dialogClose'
  },
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClose() {
      this.$emit('dialogClose', false);
    }
  }
}
</script>

<style scoped>
.drop-enter-active {
  transition: all 0.5s ease;
}
.drop-leave-active {
  transition: all 0.3s ease;
}
.drop-enter {
  transform: translateY(-500px);
}
.drop-leave-active {
  transform: translateY(-500px);
}

.dialog-cover {
  background: #000;
  opacity: 0.3;
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.dialog-content {
  width: 50%;
  position: fixed;
  height: auto !important;
  background: #fff;
  top: 20%;
  left: 50%;
  margin-left: -25%;
  z-index: 10;
  padding: 2%;
  line-height: 1.6;
  -webkit-box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
}
.dialog-close {
  position: absolute;
  right: 5px;
  top: 5px;
  width: 20px;
  height: 20px;
  text-align: center;
  cursor: pointer;
}
.dialog-close:hover {
  color: #4fc08d;
}
</style>