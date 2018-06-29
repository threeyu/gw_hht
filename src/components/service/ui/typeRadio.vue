<template>
  <!-- custom radio -->
  <div class="main" @click="onClick()">

    <img :src=imgList[this.idx].uri alt="">

    <span>
      <p class="title" :class="{'title-checked':typeVal==value}">{{txt}}</p>
    </span>

    <label class="ui-radio" :class="{'radio-checked':typeVal==value}">
      <input type="radio" ref="radio" :value="value">
    </label>

  </div>

</template>

<script>


export default {
  name: 'typeRadio',

  data: function () {
    return {
      idx: 0
    }
  },

  model: {
    prop: 'typeVal',
    event: 'typeChange'
  },

  props: {
    value: {
      type: [String, Number],
      require: true
    },
    typeVal: {
      type: [String, Number],
      require: true
    },
    checked: {
      type: Boolean,
      default: false
    },
    imgList: {
      type: Array,
      default: null
    },
    txt: {
      type: String,
      require: true
    }
  },

  mounted() {
    if (this.checked === true)
      this.onClick();
  },

  updated() {
    this.idx = parseInt(this.typeVal) - 1;
  },

  methods: {
    onClick() {
      this.$emit('typeChange', this.$refs.radio.value);
    }
  }

}
</script>

<style scoped>
.main {
  width: auto;
  height: auto;
  max-width: 150px;
  margin: 0 auto;
  text-align: center;
  display: block;
}
.main img {
  width: 100%;
  height: auto;
  max-width: 100%;
  display: block;
}
.ui-radio {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 1px solid #4693fe;
  display: inline-block;
  position: relative;
}
.ui-radio::after {
  content: "";
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -5px 0 0 -5px;
  background-color: #4693fe;
  transition: all 0.5s ease;
  opacity: 0;
  transform: scale(0);
}
.ui-radio.radio-checked::after {
  opacity: 1;
  transform: scale(1);
}
.ui-radio input[type="radio"] {
  opacity: 0;
  margin: 0;
}
.title {
  margin: 22px 0 28px;
  font-size: 14px;
  color: #575757;
}
.title-checked {
  color: #afb4f6;
}
</style>
