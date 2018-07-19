import { homeApi } from '../../api/index'
import * as TYPE from '../actionType/homeType'
import { is } from '../../utils'

const state = {
  brandNewsList: [
    {
      uri: '',
      title: '',
      date: '',
      txt: '',
      link: ''
    }
  ]
}

const getters = {
  brandNewsList: state => state.brandNewsList
}

const actions = {
  async getNewsList({ commit, state, rootState }) {

    rootState.requesting = true;
    commit(TYPE.NEWS_LIST_REQUEST);

    let param = {
      position: 3,
    }
    try {
      let res = await homeApi.getNewsList(param);
      let _data = res.content;
      let _list = _data.recommendList;
      let _result = [];

      for (let i = 0; i < _list.length; ++i) {
        _result.push({
          uri: _list[i].path,
          title: _list[i].title,
          date: _formatDate(_list[i].createtime),
          txt: _list[i].description,
          link: _list[i].link
        });
      }
      commit(TYPE.NEWS_LIST_SUCCESS, _result);
    } catch (error) {
      commit(TYPE.NEWS_LIST_FAILURE);
      console.log('--- failed');
      console.log(error);
    }
    rootState.requesting = false;

  }
}

const mutations = {
  [TYPE.NEWS_LIST_REQUEST](state) {
  },
  [TYPE.NEWS_LIST_FAILURE](state) {
  },
  [TYPE.NEWS_LIST_SUCCESS](state, response) {
    state.brandNewsList = response;
  }
}

let _formatDate = (stamp) => {
  let date = new Date(stamp);
  let Y, M, D, result;
  Y = date.getFullYear() + '-';
  M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  D = date.getDate() + ' ';
  result = Y + M + D;
  return result;
}

export default {
  state,
  getters,
  actions,
  mutations
}