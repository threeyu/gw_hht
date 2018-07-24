import { productApi } from '../../api/index'
import * as TYPE from '../actionType/productType'
import { is } from '../../utils'

const state = {
  proData: {
    brandId: 0,
    proId: 999
  },
  brandList: [
    { name: '选择品牌', uri: require('../../assets/img/products/logo-default.png') },
    { name: '火火兔', uri: require('../../assets/img/products/logo-1.png') },
    { name: '阿李罗', uri: require('../../assets/img/products/logo-2.png') },
    { name: '小翰童', uri: require('../../assets/img/products/logo-3.png') }
  ],
  proIconList: {
    hht: [
      { id: 1, title: '故事机', uri: require('../../assets/img/products/hht-1.png') },
      { id: 2, title: '视频机', uri: require('../../assets/img/products/hht-2.png') },
      { id: 3, title: '电子摇铃', uri: require('../../assets/img/products/hht-3.png') },
      { id: 4, title: '智能穿戴', uri: require('../../assets/img/products/hht-4.png') },
      { id: 6, title: '智能教育', uri: require('../../assets/img/products/hht-6.png') },
      { id: 5, title: '黑科技', uri: require('../../assets/img/products/hht-5.png') },
      { id: 7, title: '周边产品', uri: require('../../assets/img/products/hht-7.png') }
    ],
    alilo: [
      { id: 8, title: '玩具车', uri: require('../../assets/img/products/alilo-1.png') },
      { id: 10, title: '活力沙', uri: require('../../assets/img/products/alilo-2.png') },
      { id: 11, title: '积木', uri: require('../../assets/img/products/alilo-3.png') },
      { id: 12, title: '爬行垫', uri: require('../../assets/img/products/alilo-4.png') },
      { id: 13, title: '吸吸球', uri: require('../../assets/img/products/alilo-5.png') }
    ],
    xht: [
      { id: 9, title: '磁力积木', uri: require('../../assets/img/products/xht-1.png') }
    ]
  },
  proList: [],
  proDetailList: [],
  proCompList: [],

  proDownloadUrl: ''
}

const getters = {
  proData: state => state.proData,
  brandList: state => state.brandList,
  proIconList: state => state.proIconList,
  proList: state => state.proList,
  proDetailList: state => state.proDetailList,
  proCompList: state => state.proCompList,
  proDownloadUrl: state => state.proDownloadUrl
}

const actions = {
  setProData({ commit, state, rootState }, data) {
    rootState.requesting = true;
    commit(TYPE.PRODUCT_DATA_REQUEST);

    if (is('Object', data)) {
      commit(TYPE.PRODUCT_DATA_SUCCESS, data);
    } else {
      commit(TYPE.PRODUCT_DATA_FAILURE);
    }
    rootState.requesting = false;

  },
  // 全部产品
  async getAllProduct({ commit, state, rootState }) {
    rootState.requesting = true;
    commit(TYPE.PRODUCT_ALL_REQUEST);

    try {
      let res = await productApi.getAllProduct();
      let _data = res.content;
      let _list = _data.produts;
      let _result = _setProList(_list);

      commit(TYPE.PRODUCT_ALL_SUCCESS, _result);
    } catch (error) {
      commit(TYPE.PRODUCT_ALL_FAILURE);
      console.log('--- failed');
      console.log(error);
    }
    rootState.requesting = false;
  },
  // 获取某品牌的全部产品
  async getProductByBrand({ commit, state, rootState }, data) {
    if (!is('Number', data)) {
      return;
    }

    rootState.requesting = true;
    commit(TYPE.PRODUCT_ALL_REQUEST);

    let _param = {
      series: data
    }
    try {
      let res = await productApi.getProductByBrand(_param);
      let _data = res.content;
      let _list = _data.produts;
      let _result = _setProList(_list);

      commit(TYPE.PRODUCT_ALL_SUCCESS, _result);
    } catch (error) {
      commit(TYPE.PRODUCT_ALL_FAILURE);
      console.log('--- failed');
      console.log(error);
    }
    rootState.requesting = false;
  },
  // 获取某品牌下的某系列的全部产品
  async getProductByType({ commit, state, rootState }, data) {
    if (!is('Number', data)) {
      return;
    }

    rootState.requesting = true;
    commit(TYPE.PRODUCT_ALL_REQUEST);

    let _param = {
      type: data
    }
    try {
      let res = await productApi.getProductByType(_param);
      let _data = res.content;
      let _list = _data.produts;
      let _result = _setProList(_list);

      commit(TYPE.PRODUCT_ALL_SUCCESS, _result);
    } catch (error) {
      commit(TYPE.PRODUCT_ALL_FAILURE);
      console.log('--- failed');
      console.log(error);
    }
    rootState.requesting = false;
  },
  // 具体产品
  async getProductDetailByName({ commit, state, rootState }, data) {
    if (!is('String', data)) {
      return;
    }

    rootState.requesting = true;
    commit(TYPE.PRODUCT_INFO_REQUEST);

    let _param = {
      name: data
    }
    try {
      let res = await productApi.getProductDetailByName(_param);
      let _data = res.content;
      let _list = _data.produtinfo;
      let _result = [];

      let localPath = '/static/';// dev
      // let localPath = 'static/';// pro
      for (let i = 0; i < _list.length; ++i) {
        _result.push({
          uri: localPath + _list[i]
        });
      }

      commit(TYPE.PRODUCT_INFO_SUCCESS, _result);
    } catch (error) {
      commit(TYPE.PRODUCT_INFO_FAILURE);
      console.log('--- failed');
      console.log(error);
    }
    rootState.requesting = false;
  },
  // 产品对比
  async getProductComp({ commit, state, rootState }, data) {
    if (!is('String', data)) {
      return;
    }

    rootState.requesting = true;
    commit(TYPE.PRODUCT_COMP_REQUEST);

    let _param = {
      productNames: data
    }
    try {
      let res = await productApi.getCompListByName(_param);
      let _data = res.content;
      let _list = _data.products;
      let _result = [];

      let reg = new RegExp('\n', 'g');
      for (let i = 0; i < _list.length; ++i) {
        _result.push({
          uri: _list[i].picture,
          color: _format(_list[i].extend2),
          name: _format(_list[i].name),
          size: _format(_list[i].size),
          toneQuality: _format(_list[i].toneQuality),
          record: _format(_list[i].record),
          singleCycle: _format(_list[i].singleCycle),
          remoteController: _format(_list[i].remoteController),
          screen: _format(_list[i].screen),
          memory: _format(_list[i].memory),
          childLock: _format(_list[i].childLock),
          cell: _format(_list[i].cell),
          download: _format(_list[i].download),
          onoff: _format(_list[i].onoff),
          specialty: _format(_list[i].specialty)
        });
      }

      commit(TYPE.PRODUCT_COMP_SUCCESS, _result);
    } catch (error) {
      commit(TYPE.PRODUCT_COMP_FAILURE);
      console.log('--- failed');
      console.log(error);
    }
    rootState.requesting = false;
  },
  // 清楚产品缓存
  clearProList({ commit, state, rootState }) {
    commit(TYPE.PRODUCT_ALL_SUCCESS, []);
  },
  // 产品专属资源
  getProductResource({ commit, state, rootState }, data) {
    rootState.requesting = true;
    commit(TYPE.PRODUCT_DOWNLOAD_REQUEST);

    if (is('String', data)) {
      let _result = productApi.getResourceByName(data);
      commit(TYPE.PRODUCT_DOWNLOAD_SUCCESS, _result);
    } else {
      commit(TYPE.PRODUCT_DOWNLOAD_FAILURE);
    }
    rootState.requesting = false;
  }
}

const mutations = {
  [TYPE.PRODUCT_DATA_REQUEST](state) {
  },
  [TYPE.PRODUCT_DATA_FAILURE](state) {
  },
  [TYPE.PRODUCT_DATA_SUCCESS](state, response) {
    state.proData = response;
  },

  // api
  [TYPE.PRODUCT_ALL_REQUEST](state) {
  },
  [TYPE.PRODUCT_ALL_FAILURE](state) {
  },
  [TYPE.PRODUCT_ALL_SUCCESS](state, response) {
    state.proList = response;
  },

  [TYPE.PRODUCT_INFO_REQUEST](state) {
  },
  [TYPE.PRODUCT_INFO_FAILURE](state) {
  },
  [TYPE.PRODUCT_INFO_SUCCESS](state, response) {
    state.proDetailList = response;
  },

  [TYPE.PRODUCT_COMP_REQUEST](state) {
  },
  [TYPE.PRODUCT_COMP_FAILURE](state) {
  },
  [TYPE.PRODUCT_COMP_SUCCESS](state, response) {
    state.proCompList = response;
  },

  [TYPE.PRODUCT_DOWNLOAD_REQUEST](state) {
  },
  [TYPE.PRODUCT_DOWNLOAD_FAILURE](state) {
  },
  [TYPE.PRODUCT_DOWNLOAD_SUCCESS](state, response) {
    state.proDownloadUrl = response;
  }
}

let _setProList = (arr, result = []) => {
  // let _notComList = [7, 8, 9, 10, 11, 12, 13];// 不能对比的产品

  for (let i = 0; i < arr.length; ++i) {
    // let _isShowCom = _notComList.indexOf(arr[i].type) > -1 ? false : true;
    result.push({
      name: arr[i].model,
      title: arr[i].name,
      type: arr[i].type,
      detail: arr[i].introduce,
      uri: arr[i].picture_small,
      isShowCom: false,
      isCom: false,
      wifi: false
    });
  }
  return result;
}

let _format = (data) => {
  let reg = new RegExp('\n', 'g');
  let str = data.toString();
  if (str === '1') {
    str = '支持';
  }
  if (str === '0') {
    str = '不支持';
  }
  return str.replace(reg, '<br>');
}

export default {
  state,
  getters,
  actions,
  mutations
}