import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import homeStore from './modules/homeStore'
import contentStore from './modules/contentStore'
import productStore from './modules/productStore'
import audioPlayStore from './modules/audioPlayStore'
import searchStore from './modules/searchStore'


const state = {
  requesting: false,
  error: {}
}

const getters = {
  requesting: state => state.requesting,
  error: state => state.error
}

export default new Vuex.Store({
  state,
  getters,
  modules: {
    homeStore,
    contentStore,
    productStore,
    audioPlayStore,
    searchStore
  }
})