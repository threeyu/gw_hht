import { searchApi } from '../../api/index'
import * as TYPE from '../actionType/searchType'
import { is } from '../../utils'

const state = {
  resultAll: {
    singleList: [],
    albumList: [],
    videoList: [],
    productList: []
  }
}

const getters = {
  resultAll: state => state.resultAll
}

const actions = {
  async getSearchAll({ commit, state, rootState }, data) {
    if (!is('String', data)) {
      return;
    }

    rootState.requesting = true;
    commit(TYPE.SEARCH_ALL_REQUEST);

    let param = {
      name: data
    }
    try {
      let res = await searchApi.getAllByName(param);
      let _data = res.content;

      let _sList = _initResList(0, _data.musicList);
      let _aList = _initResList(0, _data.specialList);
      let _vList = _initResList(1, _data.animeInfoList);
      let _result;

      let _pList = [];
      let _pArr = _data.productList;
      for (let i = 0; i < _pArr.length; ++i) {
        _pList.push({
          id: _pArr[i].id,
          name: _pArr[i].model,
          uri: _pArr[i].picture_small,
          title: _pArr[i].name,
          detail: _pArr[i].introduce
        });
      }

      _result = {
        singleList: _sList,
        albumList: _aList,
        videoList: _vList,
        productList: _pList
      }

      commit(TYPE.SEARCH_ALL_SUCCESS, _result);
    } catch (error) {
      commit(TYPE.SEARCH_ALL_FAILURE);
      console.log('--- failed');
      console.log(error);
    }
    rootState.requesting = false;
  }
}

const mutations = {
  [TYPE.SEARCH_ALL_REQUEST](state) {
  },
  [TYPE.SEARCH_ALL_FAILURE](state) {
  },
  [TYPE.SEARCH_ALL_SUCCESS](state, response) {
    state.resultAll = response;
  }
}

let _initResList = (type, arr, result = []) => {
  for (let i in arr) {
    if (type === 1) {// 1为存在coverpath；其他为不存在
      break;
    }
    if (arr[i].coverpath === undefined) {
      arr.splice(i, 1);
    }
  }

  for (let i = 0, str = ''; i < arr.length; ++i) {
    if (arr[i].hasOwnProperty('specialname')) {
      str = arr[i].specialname;
    } else if (arr[i].hasOwnProperty('musicCount')) {
      str = '共' + arr[i].musicCount + '首歌'
    }

    result.push({
      id: arr[i].id,
      uri: arr[i].coverpath || arr[i].thumbnail,
      title: arr[i].name,
      detail: str
    });
  }
  return result;
}

export default {
  state,
  getters,
  actions,
  mutations
}