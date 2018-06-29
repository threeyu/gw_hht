<template>

  <div class="btn-toolbar" role="toolbar">
    <div class="btn-group" v-for="(item, index) in btnList" :key=" index ">
      <button type="button" class="btn" :class="{'btn-checked':index === btnVal}" @click="onClick(index)">{{item.txt}}</button>
    </div>
  </div>

</template>

<script>
export default {
  name: 'typeBtn',
  model: {
    prop: 'btnVal',
    event: 'btnSelect'
  },

  props: {
    btnVal: {
      type: [String, Number],
      require: true
    },
    btnList: {
      type: Array,
      default: null
    },
  },

  methods: {
    onClick(index) {
      this.$emit('btnSelect', index);
    }
  }

}
</script>


<style scoped>
.btn {
  background: #fff;
  color: #575757;
  border: 1px solid #575757;
}
.btn-group {
  margin-left: 0;
  margin-right: 26px;
}
.btn-checked {
  color: #e60012;
  border-color: #e60012;
}
button {
  outline: none;
}
</style>

