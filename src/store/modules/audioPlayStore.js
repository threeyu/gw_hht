import { contentApi } from '../../api/index'
import * as TYPE from '../actionType/audioPlayType'
import { is } from '../../utils'
import JSZip from 'jszip'
import FileSaver from 'file-saver'

const state = {
  isPlaying: false,
  currentTime: 0,
  duration: 0,
  leftTime: 0,
  indicatorPosition: 0,
  curSongId: 0
}

const getters = {
  isPlaying: state => state.isPlaying,
  currentTime: state => parseInt(state.currentTime / 60) + ':' + (Array(2).join(0) + (state.currentTime % 60)).slice(-2),
  duration: state => parseInt(state.duration / 60) + ':' + (Array(2).join(0) + (state.duration % 60)).slice(-2),
  leftTime: state => parseInt((state.duration - state.currentTime) / 60) + ':' + (Array(2).join(0) + ((state.duration - state.currentTime) % 60)).slice(-2),
  indicatorPosition: state => state.currentTime / state.duration * 100,
  curSongId: state => state.curSongId
}

const actions = {
  setIsPlaying({ commit, state, rootState }, data) {
    commit(TYPE.AUDIO_SET_IS_PLAY, data);
  },
  updateTime({ commit, state, rootState }, data) {
    commit(TYPE.AUDIO_SET_CURTIME, data.currentTime);
    commit(TYPE.AUDIO_SET_DURATION, data.duration);
  },
  changeSong({ commit, state, rootState }, data) {
    switch (data.model) {
      case 'pre':
        commit(TYPE.AUDIO_SET_IS_PLAY, false);
        let _id1 = (state.curSongId - 1 + data.songNum) % data.songNum;
        commit(TYPE.AUDIO_SET_CURSONGID, _id1);
        break;
      case 'next':
        commit(TYPE.AUDIO_SET_IS_PLAY, false);
        let _id2 = (state.curSongId + 1) % data.songNum;
        commit(TYPE.AUDIO_SET_CURSONGID, _id2);
        break;
      default:
        if (data.model === state.curSongId) {
          return;
        }
        if (data.model >= 0 && data.model < data.songNum) {
          commit(TYPE.AUDIO_SET_IS_PLAY, false);
          commit(TYPE.AUDIO_SET_CURSONGID, data.model);
        }
        break;
    }
  },
  // 下载音频资源
  async audioDownload({ commit, state, rootState }, data) {
    if (!is('Object', data)) {
      return;
    }

    let param = {
      name: data.name + '.mp3',
      url: data.url
    }
    try {
      let res = await contentApi.getAudioResource(param.url);
      let aTag = document.createElement('a');
      let blob = new Blob([res]);
      aTag.download = param.name;
      aTag.href = URL.createObjectURL(blob);
      aTag.click();
      URL.revokeObjectURL(blob);

    } catch (error) {
      console.log(error);
    }
  },
  async audioAllDownload({ commit, state, rootState }, data) {
    if (!is('Array', data)) {
      return;
    }

    let zip = new JSZip();
    let allList = [];
    data.forEach(item => {
      let promise = contentApi.getAudioResource(item.url).then(data => {
        let name = item.name + '.mp3';
        zip.file(name, data, { binary: true });
      });

      allList.push(promise);
    });

    await Promise.all(allList);
    let content = await zip.generateAsync({ type: 'blob' });
    FileSaver.saveAs(content, '批量下载.zip');
  }
}

const mutations = {
  [TYPE.AUDIO_SET_IS_PLAY](state, response) {
    state.isPlaying = response;
  },
  [TYPE.AUDIO_SET_CURTIME](state, response) {
    state.currentTime = response;
  },
  [TYPE.AUDIO_SET_DURATION](state, response) {
    state.duration = response;
  },
  [TYPE.AUDIO_SET_CURSONGID](state, response) {
    state.curSongId = response;
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}