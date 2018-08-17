import { contentApi } from '../../api/index'
import * as TYPE from '../actionType/contentType'
import { is } from '../../utils'


const state = {
  conTitleList: [
    { txt: '音频', uri: require('../../assets/img/content/sound-icon.png') },
    { txt: '视频', uri: require('../../assets/img/content/video-icon.png') }
  ],
  conAudioTagList: [
    { txt: '全部', uri: require('../../assets/img/content/icon-1.png') },
    { txt: '儿歌', uri: require('../../assets/img/content/icon-1.png') },
    { txt: '故事', uri: require('../../assets/img/content/icon-2.png') },
    { txt: '英语', uri: require('../../assets/img/content/icon-3.png') },
    { txt: '国学', uri: require('../../assets/img/content/icon-4.png') },
    { txt: '古诗', uri: require('../../assets/img/content/icon-5.png') },
    { txt: '哄睡', uri: require('../../assets/img/content/icon-6.png') }
  ],
  conVideoTagList: [
    { txt: '全部', id: 999 },
    { txt: '亲子', id: 2 },
    { txt: '童话', id: 3 },
    { txt: '教育', id: 4 },
    { txt: '励志', id: 5 },
    { txt: '搞笑', id: 6 },
    { txt: '官方原创', id: 1 }
  ],
  conSortList: ['最新', '最热'],

  contentData: {
    titleId: 0,
    tagId: 0,
    sortId: 0
  },
  conResList: [],
  audioPlayList: {},

  contentIndexList: {
    recommendList: [],// 精品推荐
    characterList: [],// 性格养成
    nationList: [],// 国学熏陶
    wealthList: [],// 财商启蒙
    emtionList: [],// 情商培养
    originList: [],// 原创视频
    sleepyList: [],// 哄睡专区
    brandList: []// 品牌专区
  }
}

const getters = {
  conTitleList: state => state.conTitleList,
  conAudioTagList: state => state.conAudioTagList,
  conVideoTagList: state => state.conVideoTagList,
  conSortList: state => state.conSortList,

  contentData: state => state.contentData,
  conResList: state => state.conResList,

  audioPlayList: state => state.audioPlayList,

  contentIndexList: state => state.contentIndexList
}

const actions = {
  setContentData({ commit, state, rootState }, data) {
    rootState.requesting = true;
    commit(TYPE.CONTENT_DATA_REQUEST);

    if (is('Object', data)) {
      commit(TYPE.CONTENT_DATA_SUCCESS, data);
    } else {
      commit(TYPE.CONTENT_DATA_FAILURE);
    }
    rootState.requesting = false;

  },
  // 内容页音频专辑播放列表
  async getAudioAlbumList({ commit, state, rootState }, data = 1028) {
    if (!is('Number', data)) {
      return;
    }

    rootState.requesting = true;
    commit(TYPE.AUDIO_ALBUM_REQUEST);

    let param = {
      id: data,
    }
    try {
      let res = await contentApi.getAudioInfoById(param);
      let _data = res.content;
      let _info = _data.info;
      let _list = _data.musicList;
      let _songList = [];
      let _result;

      for (let i = 0; i < _list.length; ++i) {
        _songList.push({
          txt: _list[i].name,
          uri: _list[i].path,
          playCnt: _list[i].browse
        });
      }
      _result = {
        songList: _songList,
        songNum: _list.length,
        name: _info.name,
        detail: _info.description,
        cover: _info.coverpath
      };

      commit(TYPE.AUDIO_ALBUM_SUCCESS, _result);
    } catch (error) {
      commit(TYPE.AUDIO_ALBUM_FAILURE);
      console.log('--- failed');
      console.log(error);
    }
    rootState.requesting = false;

  },
  // 内容页音频单曲播放列表
  async getAudioAlbumSingle({ commit, state, rootState }, data = 13658) {
    if (!is('Number', data)) {
      return;
    }

    rootState.requesting = true;
    commit(TYPE.AUDIO_ALBUM_REQUEST);

    let param = {
      music_id: data,
    }
    try {
      let res = await contentApi.getAudioSingleInfoById(param);
      let _data = res.content;
      let _info = _data.music;
      let _songList = [];
      let _result;

      _songList.push({
        txt: _info.name,
        uri: _info.path,
        playCnt: _info.browse
      });

      _result = {
        songList: _songList,
        songNum: 1,
        name: _info.name,
        detail: _info.description,
        cover: _info.coverpath
      };

      commit(TYPE.AUDIO_ALBUM_SUCCESS, _result);
    } catch (error) {
      commit(TYPE.AUDIO_ALBUM_FAILURE);
      console.log('--- failed');
      console.log(error);
    }
    rootState.requesting = false;
  },
  // 内容页音频列表
  async getConAudioList({ commit, state, rootState }, data) {
    if (!is('Object', data)) {
      return;
    }

    rootState.requesting = true;
    commit(TYPE.CONTENT_RESOURCE_REQUEST);

    let temp = data.tagId === 0 ? '' : state.conAudioTagList[data.tagId].txt;
    let _name = temp === '哄睡'?'伴眠':temp;
    let param = {
      classname: _name,
      classid: data.sortId
    }
    try {
      let res = await contentApi.getAudioByTxt(param);
      let _data = res.content;
      let _list = _data.specialList;
      let _result = [];

      for (let i = 0; i < _list.length; ++i) {
        _result.push({
          albumId: _list[i].id,
          uri: _list[i].coverpath,
          title: _list[i].name,
          song: '共' + _list[i].musicCount + '首歌'
        });
      }

      commit(TYPE.CONTENT_RESOURCE_SUCCESS, _result);
    } catch (error) {
      commit(TYPE.CONTENT_RESOURCE_FAILURE);
      console.log('--- failed');
      console.log(error);
    }
    rootState.requesting = false;

  },
  // 内容页视频列表
  async getConVideoList({ commit, state, rootState }, data) {
    if (!is('Object', data)) {
      return;
    }

    rootState.requesting = true;
    commit(TYPE.CONTENT_RESOURCE_REQUEST);

    let _genre = data.tagId === 0 ? '' : state.conVideoTagList[data.tagId].id;
    let param = {
      genre: _genre,
      episodeCount: data.sortId
    }
    try {
      let res = await contentApi.getVideoById(param);
      let _data = res.content;
      let _list = _data.animeInfoList;
      let _result = [];

      let str;
      for (let i = 0; i < _list.length; ++i) {
        str = _list[i].viewCount.toString().length < 5 ?
          _list[i].viewCount : _list[i].viewCount.toString().length < 9 ?
            (_list[i].viewCount / 10000).toFixed(1) + "万次" : (_list[i].viewCount / 100000000).toFixed(1) + "亿次";

        _result.push({
          albumId: _list[i].id,
          uri: _list[i].thumbnail,
          title: _list[i].name,
          song: '播放量 : ' + str
        });
      }

      commit(TYPE.CONTENT_RESOURCE_SUCCESS, _result);
    } catch (error) {
      commit(TYPE.CONTENT_RESOURCE_FAILURE);
      console.log('--- failed');
      console.log(error);
    }
    rootState.requesting = false;

  },

  async getConIndexList({ commit, state, rootState }) {
    rootState.requesting = true;
    commit(TYPE.CONTENT_INDEX_REQUEST);

    try {
      let [res1, res2, res3, res4, res5, res6] = await Promise.all([
        _getRecommend(commit), _getCharacter(commit), _getNation(commit), _getWealth(commit), _getEmotion(commit), _getSleepy(commit)
      ]);
      rootState.requesting = false;
    } catch (error) {
      console.log(error);
    }

  },
  clearConList({ commit, state, rootState }) {
    commit(TYPE.CONTENT_RESOURCE_SUCCESS, []);
  }
}

const mutations = {
  // setter
  [TYPE.CONTENT_DATA_REQUEST](state) {

  },
  [TYPE.CONTENT_DATA_FAILURE](state) {

  },
  [TYPE.CONTENT_DATA_SUCCESS](state, response) {
    state.contentData = response;
  },

  // api
  [TYPE.CONTENT_RESOURCE_REQUEST](state) {

  },
  [TYPE.CONTENT_RESOURCE_FAILURE](state) {

  },
  [TYPE.CONTENT_RESOURCE_SUCCESS](state, response) {
    state.conResList = response;
  },

  // audio list
  [TYPE.AUDIO_ALBUM_REQUEST](state) {

  },
  [TYPE.AUDIO_ALBUM_FAILURE](state) {

  },
  [TYPE.AUDIO_ALBUM_SUCCESS](state, response) {
    state.audioPlayList = response;
  },

  [TYPE.CONTENT_INDEX_REQUEST](state) {

  },
  [TYPE.CONTENT_INDEX_FAILURE](state) {

  },
  [TYPE.CONTENT_INDEX_SUCCESS](state, response) {
    state.contentIndexList[response.key] = response.val;
  }

}

let _setIdxList = (arr, result = []) => {
  for (let i = 0; i < (arr.length > 4 ? 4 : arr.length); ++i) {
    result.push({
      albumId: arr[i].id,
      uri: arr[i].coverpath || arr[i].picurl,
      title: arr[i].name,
      detail: arr[i].description
    });
  }
  return result;
}
let _getRecommend = async (commit) => {
  try {
    let res = await contentApi.getRecommendList();
    let _list = res.content.list;
    let _result = _setIdxList(_list);

    commit(TYPE.CONTENT_INDEX_SUCCESS, { key: 'recommendList', val: _result });
  } catch (error) {
    commit(TYPE.CONTENT_INDEX_FAILURE);
    console.log('--- 1failed');
    console.log(error);
  }
}
let _getOrigin = async (commit) => {
  try {
    let res = await contentApi.getOriginalList();
    let _list = res.content.list;
    let _result = _setIdxList(_list);

    commit(TYPE.CONTENT_INDEX_SUCCESS, { key: 'originList', val: _result });
  } catch (error) {
    commit(TYPE.CONTENT_INDEX_FAILURE);
    console.log('--- 2failed');
    console.log(error);
  }
}
let _getSleepy = async (commit) => {
  try {
    let res = await contentApi.getSleepyList();
    let _list = res.content.list;
    let _result = _setIdxList(_list);

    commit(TYPE.CONTENT_INDEX_SUCCESS, { key: 'sleepyList', val: _result });
  } catch (error) {
    commit(TYPE.CONTENT_INDEX_FAILURE);
    console.log('--- 3failed');
    console.log(error);
  }
}
let _getBrand = async (commit) => {
  try {
    let res = await contentApi.getBrandList();
    let _list = res.content.list;
    let _result = _setIdxList(_list);

    commit(TYPE.CONTENT_INDEX_SUCCESS, { key: 'brandList', val: _result });
  } catch (error) {
    commit(TYPE.CONTENT_INDEX_FAILURE);
    console.log('--- 4failed');
    console.log(error);
  }
}
let _getCharacter = async (commit) => {
  try {
    let res = await contentApi.getCharacterList();
    let _list = res.content.list;
    let _result = _setIdxList(_list);

    commit(TYPE.CONTENT_INDEX_SUCCESS, { key: 'characterList', val: _result });
  } catch (error) {
    commit(TYPE.CONTENT_INDEX_FAILURE);
    console.log('--- 5failed');
    console.log(error);
  }
}
let _getNation = async (commit) => {
  try {
    let res = await contentApi.getNationList();
    let _list = res.content.list;
    let _result = _setIdxList(_list);

    commit(TYPE.CONTENT_INDEX_SUCCESS, { key: 'nationList', val: _result });
  } catch (error) {
    commit(TYPE.CONTENT_INDEX_FAILURE);
    console.log('--- 6failed');
    console.log(error);
  }
}
let _getWealth = async (commit) => {
  try {
    let res = await contentApi.getWealthList();
    let _list = res.content.list;
    let _result = _setIdxList(_list);

    commit(TYPE.CONTENT_INDEX_SUCCESS, { key: 'wealthList', val: _result });
  } catch (error) {
    commit(TYPE.CONTENT_INDEX_FAILURE);
    console.log('--- 7failed');
    console.log(error);
  }
}
let _getEmotion = async (commit) => {
  try {
    let res = await contentApi.getEmotionList();
    let _list = res.content.list;
    let _result = _setIdxList(_list);

    commit(TYPE.CONTENT_INDEX_SUCCESS, { key: 'emtionList', val: _result });
  } catch (error) {
    commit(TYPE.CONTENT_INDEX_FAILURE);
    console.log('--- 8failed');
    console.log(error);
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}