import { searchApi } from '../../api/index'
import * as TYPE from '../actionType/searchType'
import { is } from '../../utils'

const state = {
  resultAll: {
    singleList: [],
    albumList: [],
    videoList: []
  }
}

const getters = {
  resultAll: state => state.resultAll
}

const actions = {
  getSearchAll({ commit, state, rootState }, data) {
    if (!is('String', data)) {
      return;
    }

    rootState.requesting = true;
    commit(TYPE.SEARCH_ALL_REQUEST);

    let param = {
      name: data
    }
    searchApi.getAllByName(param).then((res) => {
      let _data = res.content;
      let _sList = _initList(0, _data.musicList);
      let _aList = _initList(1, _data.specialList);
      let _vList = _initList(2, _data.animeInfoList);
      let _result;

      _result = {
        singleList: _sList,
        albumList: _aList,
        videoList: _vList
      }

      commit(TYPE.SEARCH_ALL_SUCCESS, _result);
    }).catch((error) => {
      commit(TYPE.SEARCH_ALL_FAILURE);
      console.log('--- failed');
      console.log(error);
    });

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

let _initList = (type, arr, result = []) => {
  for (let i in arr) {
    if (type === 2) {
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